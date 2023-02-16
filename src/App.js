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

    const [postsJson, photosJson] = await Promise.all([postsFetch, photosFetch])
      .then(responses => Promise.all(responses.map((res) => res.json())));

    const posts = postsJson.map((post, i) => ({
      ...post,
      cover: photosJson[i].url,
    }));

    this.setState({ posts });
  };

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <img src={post.cover} alt={post.title}></img>
              <div className="post-content">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
