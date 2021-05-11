import React, { Component } from "react";

class Loader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="spinner">
        <div className="loader" />
      </div>
    );
  }
}

export default Loader;
