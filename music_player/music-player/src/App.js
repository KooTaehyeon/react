import React, { Component } from 'react';
import './App.css';

import ReactPlayer from 'react-player'


class App extends Component {
  render() {
    return (
     <ReactPlayer url="https://www.youtube.com/watch?v=xNoRmx8GXeY"  playing   controls></ReactPlayer>
    );
  }
}

export default App;
