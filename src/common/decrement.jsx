import React, { Component } from "react";

class Decrement extends Component {
  render() {
    return (
      <button
        className="btn btn-secondary btn-sm m-2"
        onClick={this.props.onClick}
      >
        -
      </button>
    );
  }
}

export default Decrement;
