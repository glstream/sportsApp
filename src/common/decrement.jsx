import React, { Component } from "react";

class Decrement extends Component {
  render() {
    return (
      <button type="button" className="btn btn-outline-danger m-1" onClick={this.props.onClick} 
      style= {{ cursor: 'pointer'}} >-</button>
      
    );
  }
}

export default Decrement;
