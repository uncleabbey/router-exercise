import React, { Component } from "react";
import { Link } from "react-router-dom";
// import  from 'react-router-dom'

const Color = ({ color }) => (
  <Link to={`/colors/${color}`}>
    <li>{color}</li>
  </Link>
);

export class Colors extends Component {
  state = {
    colors: JSON.parse(localStorage.getItem("colors")) || [],
  };
  render() {
    const { colors } = this.state;
    const data = colors.map(({ colorValue, colorName }, index) => (
      <Color key={index} color={colorName} />
    ));
    return (
      <div className="color-container">
        <h1 className="title">List of Colors</h1>
        <Link to="/colors/new">
          <button>Add Color </button>
        </Link>
        <ul>{data}</ul>
      </div>
    );
  }
}

export default Colors;
