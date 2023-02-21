import { render, screen } from '@testing-library/react';
import PostCard from '.';
import { post } from '../../mocks/posts';

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard post={post} />);

    const img = screen.getByRole('img', { name: /title/i });
    const heading = screen.getByRole('heading', { name: /title/i });
    const p = screen.getByText(/body/i);

    expect(img).toHaveAttribute('src', 'img/img1.png');
    expect(heading).toBeInTheDocument();
    expect(p).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = render(<PostCard post={post} />);

    expect(container).toMatchSnapshot();
  });
});
