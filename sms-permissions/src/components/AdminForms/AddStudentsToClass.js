import React, { Component } from "react";

class AddStudentsToClass extends Component {
  state = {
        
    student: {
    name: '',
    teacher_id:''
    },
    guardian: {
    name: "",
    contact: ""
    }
    
  }


axios

  addStudent = event => {
    event.preventDefault();
    // add code to create
    this.props.addStudent(this.state);
    this.setState({
        
    student: {
    name: '',
    teacher_id:''
    },
    guardian: {
    name: " ",
    contact: " "
    }
    
  });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
      console.log(this.state.student.name)
    return (
      <div>
        <form onSubmit={this.addStudent}>
          <input
            onChange={this.handleInputChange}
            type="text"
            name='name'
            placeholder="Student Name"
            value={this.state.student.name}
          />
          <input
            onChange={this.handleInputChange}
            type="text"
            name='StudentTeacher'
            placeholder="Parent Name"
            value={this.state.student.teacher_id}
          />
          <input
            onChange={this.handleInputChange}
            type="text"
            name='guardianName'
            placeholder="name"
            value={this.state.guardian.name}
          />

<input
            onChange={this.handleInputChange}
            type="tel"
            value={this.state.guardian.contact}
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
