import React, { Component } from "react";
import axios from 'axios';
// import KEY from '../../../key.js';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      date: '',
      explanation: '',
      title: '',
      picture: ''
    };
  }

  componentDidMount(){
    axios.get('/api/picture')
    .then(res => {
      console.log(res)
      this.setState({
        date: res.data.date,
        explanation: res.data.explanation,
        title: res.data.title,
        picture: res.data.url
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>hi</h1>
        <p>{this.state.date}</p>
        <p>{this.state.explanation}</p>
        <p>{this.state.title}</p>
        <img src = {this.state.picture}></img>
      </div>
    );
  }
}
