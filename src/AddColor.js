import React, { Component } from "react";

const Input = ({ label, placeholder, handleChange, name, type, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label> <br />
      <input
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
        value={value}
      />
    </div>
  );
};

const Form = ({ handleSubmit, handleChange, colorValue, colorName }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label={"Color Name"}
        placeholder={"Type a color"}
        handleChange={handleChange}
        name="colorName"
        value={colorName}
      />
      <Input
        type="color"
        label={"Color Value"}
        handleChange={handleChange}
        name="colorValue"
        value={colorValue}
      />
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};
export class AddColor extends Component {
  state = {
    colorName: "",
    colorValue: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      colorName: this.state.colorName,
      colorValue: this.state.colorValue,
    };
    console.log(data);
    const colors = JSON.parse(localStorage.getItem("colors")) || [];
    localStorage.setItem("colors", JSON.stringify([data, ...colors]));
    this.props.history.push("/");
  };
  render() {
    const { colorName, colorValue } = this.state;
    return (
      <div className="form-container">
        <h1 className="title-form">Add Color</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          colorName={colorName}
          colorValue={colorValue}
        />
      </div>
    );
  }
}

export default AddColor;
