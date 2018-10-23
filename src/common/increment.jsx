import React, { Component } from "react";

class Increment extends Component {
  render() {
    return (
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={this.props.onClick}
      >
        +
      </button>
    );
  }
}

export default Increment;
