import React from 'react';
import axios from 'axios';
import './App.css';

import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import User from "./components/User/User";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user : "NULL",
      inputText : "",
      ready: false
    }
  }

  onInputChange = e => {
    this.setState(
      {
        ...this.state,
        inputText : e.target.value
      }
    );
  }

  fetchData = (key) => {
    axios
      .get(`https://api.github.com/users/${key}`)
      .then(res => {
        const userData = res.data;
        this.setState({
          ...this.state,
          user: userData
        });
      })
      .catch(err => {
        this.setState({
          ...this.state,
          user: "NULL",
        })
        // console.log("err : " + err)
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.ready !== prevState.ready) {
      this.fetchData(this.state.inputText);
      this.setState({
        ...this.state,
        ready : false
      })
    }
  }

  onButtonClick = () => {
    this.setState({
      ...this.state,
      ready : true
    })
  }

  render() {
    // console.log(this.state.user);
    return (
      <div className = "App">
        <h1 className = "header">GITHUB USER DATA</h1>
        <input 
          type = "text" 
          value = {this.state.inputText}
          onChange = {this.onInputChange} />
        <button onClick = {this.onButtonClick}>SUBMIT</button>
        
        {(this.state.user === "NULL") ? <ErrorMessage ready = {this.state.ready} user = {this.state.user}/> : <User  user = {this.state.user} />}        
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.inputText}`)
      .then(res => {
        const userData = res.data;
        this.setState({
          ...this.state,
          user: userData
        });
      })
      .catch(err => {
        this.setState({
          ...this.state,
          user: "NULL",
        })
        // console.log("err : " + err)
      });
  }
}

export default App;