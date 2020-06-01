import "./App.css";

import React, { Component } from "react";
import PostList from "./components/PostList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch("https://www.reddit.com/.json")
      .then(response => response.json())
      .then(data => this.setState({ posts: data.data.children }));
  }

  display = () => {
    if (this.state.posts === []) {
      return <div>Loading...</div>;
    }
    return <PostList posts={this.state.posts} />;
  };

  render() {
    return (
      <div>
        <h1>Reddit</h1>

        {this.display()}
      </div>
    );
  }
}
