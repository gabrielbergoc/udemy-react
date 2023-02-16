import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
  };

  // executed right after the component is first rendered in the DOM
  componentDidMount() {
    this.getPosts();
  }

  // executed right before the component is destroyed
  componentWillUnmount() {}

  getPosts = async () => {
    const postsFetch = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosFetch = fetch("https://jsonplaceholder.typicode.com/photos");

    const [postsResponse, photosResponse] = await Promise.all([
      postsFetch,
      photosFetch,
    ]);
    const [postsJson, photosJson] = await Promise.all([
      postsResponse.json(),
      photosResponse.json(),
    ]);

    const posts = postsJson.map((post, i) => ({
      ...post,
      cover: photosJson[i],
    }));

    this.setState({ posts });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
