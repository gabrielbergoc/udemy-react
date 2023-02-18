import { Component } from "react";
import "./styles.css";
import { getPosts } from "../../utils";
import Posts from "../../components/Posts";
import Button from "../../components/Button";
import SearchInput from "../../components/Input/Search";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    pageSize: 6,
    initialPageSize: 6,
    noMorePosts: false,
    searchString: "",
  };

  // executed right after the component is first rendered in the DOM
  async componentDidMount() {
    await this.loadAllPosts();
    this.paginate();
  }

  // executed right before the component is destroyed
  componentWillUnmount() {}

  loadAllPosts = async () => {
    const allPosts = await getPosts();
    this.setState({ allPosts });
  };

  extendPage = () => {
    const { pageSize, initialPageSize } = this.state;
    this.setState({ pageSize: pageSize + initialPageSize });
  };

  paginate = () => {
    const { page, pageSize, allPosts } = this.state;

    const start = page * pageSize;
    const end = start + pageSize;

    this.setState({
      posts: allPosts.slice(start, end),
      noMorePosts: end >= allPosts.length,
    });
  };

  handleButton = () => {
    this.extendPage();
    this.paginate();
  };

  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    const { posts, allPosts, noMorePosts, searchString } = this.state;

    const filteredPosts = !!searchString
      ? allPosts.filter((post) =>
          post.title.toLowerCase().includes(searchString.toLowerCase())
        )
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          <SearchInput
            handleChange={this.handleChange}
            value={searchString}
            placeholder="Search posts..."
          />
        </div>

        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && <p>No posts match the search.</p>}

        <div className="button-container">
          {!searchString && (
            <Button
              onClick={this.handleButton}
              disabled={noMorePosts}
              text="More posts..."
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
