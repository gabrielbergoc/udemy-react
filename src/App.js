import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    name: 'gabs',
  };

  // don't need constructor if class fields and arrow function methods are used
  // constructor(props) {
  //   super(props);
  //   // this.handleClick = this.handleClick.bind(this); --> don't need to do this
  //   // if function is declared as arrow function
  // }

  handleClick = () => {
    console.log(`${this.state.name} clicked`);
    this.setState({ name: 'bergs' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleClick}>
            Hello, {this.state.name}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
