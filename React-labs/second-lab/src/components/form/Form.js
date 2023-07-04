import { Component } from "react";

import "./form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  getUser = (e) => {
    e.preventDefault();
    const { name, age } = this.state;
    this.props.onSubmit({ name, age, });
    this.setState({ name: "", age: "", });


    
  };
  render() {
    return (
      <div class="form-container">
        <div class="form">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={this.onChange}
          />

          <label for="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            required
            onChange={this.onChange}
          />

          <button onClick={this.getUser}>Add</button>
        </div>
      </div>
    );
  }
}
export default Form;
