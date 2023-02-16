import { Component } from "react";
import "./styles.css";
import { getPosts } from "../../utils";
import Posts from '../../components/Posts';

class Home extends Component {
  state = {
    posts: [],
  };

  // executed right after the component is first rendered in the DOM
  componentDidMount() {
    this.setPosts();
  }

  // executed right before the component is destroyed
  componentWillUnmount() {}

  setPosts = async () => {
    const posts = await getPosts();
    this.setState({ posts });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}

export default Home;
