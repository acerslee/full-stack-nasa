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
      return axios.get(`/api/renderPicture/${res.data.insertId}`)
    })
    .then(res => {
      console.log(res.data[0].picture);
      this.setState({
        picture: res.data[0].picture
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
