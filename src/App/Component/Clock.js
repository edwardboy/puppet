import React, { Component } from "react";

export default class Clock extends Component {

  state = {
    date: new Date()
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <Name name="Clock" />
        <h1>Hello world!</h1>
        <h2>现在是 {this.state.date.toLocaleTimeString('',{hour12:false})}.</h2>
      </div>
    );
  }
}

// Clock.default

function Name(props) {
  return <h1> 组件名称: {props.name} </h1>;
}
