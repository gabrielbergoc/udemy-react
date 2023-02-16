import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'gabs',
    names: ['bergs', 'gabs'],
    posts: [
      {
        id: 1,
        title: 'title 1',
        body: 'body 1',
      },
      {
        id: 2,
        title: 'title 2',
        body: 'body 2',
      },
      {
        id: 3,
        title: 'title 3',
        body: 'body 3',
      },
    ],
  };

  // executed right after the component is first rendered in the DOM
  componentDidMount() {

  }

  // executed right before the component is destroyed
  componentWillUnmount() {

  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>  
        ))}
      </div>
    );
  }
}

export default App;
