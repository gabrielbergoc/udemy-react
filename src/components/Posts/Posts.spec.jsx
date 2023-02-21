import { render, screen } from "@testing-library/react";
import Posts from ".";
import { posts } from "../../mocks/posts";


describe("<Posts />", () => {
  it("should render Posts", () => {
    render(<Posts posts={posts} />);

    const allHeadings = screen.getAllByRole("heading");
    const allBodies = screen.getAllByText(/body/i);
    const allImages = screen.getAllByRole("img");

    expect(allHeadings).toHaveLength(posts.length);
    expect(allBodies).toHaveLength(posts.length);
    expect(allImages).toHaveLength(posts.length);
  });

  it("should match snapshot", () => {
    const { container } = render(<Posts posts={posts} />);

    expect(container).toMatchSnapshot();
  });
});
