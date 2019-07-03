import React, { Component } from "react";

class AddStudentsToClass extends Component {
  state = {
      studentName: "",
      guardianName: "",
      contact: ""
  }

  addStudent = event => {
    event.preventDefault();
    // add code to create
    const req = {
        student:    {
            name: this.state.studentName,
            teacher_id: 1
        },
        guardian:   {
            name: this.state.guardianName,
            contact: this.state.contact.split(/\D/g).join("")
        }
    }
    console.log(req)
    this.props.addStudent(req);
    this.setState({
        studentName: "",
        guardianName: "",
        contact: ""
  });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
      console.log(this.state)
    return (
      <div>
        <form onSubmit={this.addStudent}>
          <input
            onChange={this.handleInputChange}
            type="text"
            name='studentName'
            placeholder="Student Name"
            value={this.state.studentName}
          />
          <input
            onChange={this.handleInputChange}
            type="text"
            name='guardianName'
            placeholder="Guardian Name"
            value={this.state.guardianName}
          />

<input
            onChange={this.handleInputChange}
            type="tel"
            value={this.state.contact}
            name='contact'
            placeholder="555-555-5555"
          />
          <button>+Add Student</button>
        </form>
      </div>
    );
  }
}

export default AddStudentsToClass;
