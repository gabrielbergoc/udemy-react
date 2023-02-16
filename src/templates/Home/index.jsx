import { Component } from "react";
import "./styles.css";
import { getPosts } from "../../utils";
import Posts from "../../components/Posts";
import Button from "../../components/Button";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    pageSize: 6,
    initialPageSize: 6,
    noMorePosts: false,
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

    let noMorePosts = false;
    if (end >= allPosts.length) {
      noMorePosts = true;
    }

    this.setState({ posts: allPosts.slice(start, end), noMorePosts });
  };

  handleButton = () => {
    this.extendPage();
    this.paginate();
  };

  render() {
    const { posts, noMorePosts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />

        <div className="button-container">
          <Button onClick={this.handleButton} disabled={noMorePosts} text="More posts..." />
        </div>
      </section>
    );
  }
}

export default Home;
