import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert('这是一个 react-ssr demo')
  }
  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>欢迎来到 react 服务端渲染的世界</h2>
        </div>
        <p className="cotent">如果你觉得有帮助，那么请点击赞赏😘</p>
        <button className="btn" onClick={e => this.handleClick()}> 惊喜 </button>  
      </div>
    );
  }
}

export default App;