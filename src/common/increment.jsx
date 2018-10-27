import React, { Component } from "react";

class Increment extends Component {
  render() {
    return (
 
      <button type="button" className="btn btn-outline-success m-1" onClick={this.props.onClick} 
      style= {{ cursor: 'pointer'}}>+</button>
    );
  }
}

export default Increment;
