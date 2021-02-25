import React, { Component } from "react";
import axios from 'axios';
// import KEY from '../../../key.js';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      picture: ''
    };
  }

  componentDidMount(){
    axios.get('/api/picture')
    .then(res => {
      console.log('response in client', res);
      this.setState({
        picture: res.data
      })
    })
    .catch(err => console.log(err))
}

  render() {
    return (
      <div>
        <h1>hi</h1>
        <h2>solo</h2>
        <img src = {this.state.picture}></img>
      </div>
    );
  }
}
