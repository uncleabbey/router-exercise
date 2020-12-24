import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class Color extends Component {
  state = {
    color: {},
  };
  componentDidMount() {
    const colors = JSON.parse(localStorage.getItem("colors")) || [];
    const { color } = this.props.match.params;
    const findColor = colors.find((item) => item.colorName === color);
    this.setState({
      color: findColor,
    });
  }

  render() {
    if (!this.state.color) {
      return <Redirect to="/" />;
    }
    // console.log(this.state.color.colorValue)
    return (
      <div
        className="color-details"
        style={{ background: this.state.color.colorValue }}
      >
        <h1>This is color {this.state.color.colorName} </h1>

        <h1> Isn't it Beautiful </h1>
        <h1>
          {" "}
          <Link to="/">Go back</Link>
        </h1>
      </div>
    );
  }
}

export default Color;
