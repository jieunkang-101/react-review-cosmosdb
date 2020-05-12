import React, { Component } from 'react';
import './App.css';
import Reviews from './components/Reviews';

class App extends Component {
  // componentDidMount() {
  //   fetch('/api/message')
  //     .then(response => response.json())
  //     .then(json => this.setState({ message: json }));
  // }

  render() {
    return (
      <div>
        <h1>Reviews</h1>
        <div className="header-bar" />
        <app-reviews />
        <Reviews />
      </div>
    );
  }
}

export default App;
