import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Home from '.';
import { photos, rawPosts } from '../../mocks/posts';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => res(ctx.json(rawPosts))),
  rest.get('https://jsonplaceholder.typicode.com/photos', async (req, res, ctx) => res(ctx.json(photos))),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => server.listen());

  beforeEach(() => render(<Home />));

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should render search input, posts and button', async () => {
    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();
    const button = screen.getByText(/more/i);
    expect(button).toBeInTheDocument();
    const noMorePosts = screen.getByText(/no.+posts/i);
    expect(noMorePosts).toBeInTheDocument();

    await waitForElementToBeRemoved(noMorePosts);
    expect(noMorePosts).not.toBeInTheDocument();

    const imgs = screen.getAllByRole('img', { name: /title/i });
    expect(imgs).toHaveLength(6);
  });

  it('should search for posts', async () => {
    // fetching posts (mock)
    const noMorePosts = screen.getByText(/no.+posts/i);
    await waitForElementToBeRemoved(noMorePosts);

    // verifying that only 6 posts are rendered
    const headings = screen.getAllByText(/title/i);
    expect(headings).toHaveLength(6);

    // search for posts with certain text (not any of the original 6)
    const searchInput = screen.getByPlaceholderText(/search/i);
    userEvent.type(searchInput, '7');

    // verifying that the original 6 posts aren't shown
    headings.forEach((heading) => expect(heading).not.toBeInTheDocument());

    // verifying that the search was made
    const newHeadings = screen.getAllByText(/title/i);
    expect(newHeadings).toHaveLength(1);
    expect(newHeadings[0].innerHTML).toContain('7');
  });

  it('should show "no more posts" if search string doesn\'t have a match', async () => {
    // fetching posts (mock)
    let noMorePosts = screen.getByText(/no.+posts/i);
    await waitForElementToBeRemoved(noMorePosts);

    // verifying that only 6 posts are rendered
    const headings = screen.getAllByText(/title/i);
    expect(headings).toHaveLength(6);

    // search for posts with certain text (not any of the original 6)
    const searchInput = screen.getByPlaceholderText(/search/i);
    userEvent.type(searchInput, '3.1415');

    // verifying that the original 6 posts aren't shown
    headings.forEach((heading) => expect(heading).not.toBeInTheDocument());

    // verifying that the search was made
    const newHeadings = screen.queryAllByText(/title/i);
    expect(newHeadings).toHaveLength(0);

    // verifying that the "no posts match" message is shown
    noMorePosts = screen.getByText(/no.+posts/i);
    expect(noMorePosts).toBeInTheDocument();
  });

  it('should show more posts if "load more" is clicked and disable button if there aren\' more posts', async () => {
    // fetching posts (mock)
    let noMorePosts = screen.getByText(/no.+posts/i);
    await waitForElementToBeRemoved(noMorePosts);

    const button = screen.getByText(/more/i);
    userEvent.click(button);

    // verifying that ALL posts are rendered and the button is disabled
    const headings = screen.getAllByText(/title/i);
    expect(headings).toHaveLength(10);
    expect(button).toBeDisabled();
  });
});
