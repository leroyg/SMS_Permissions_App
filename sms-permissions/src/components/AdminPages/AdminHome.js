import React, { Component } from 'react';
import axios from 'axios'
import StudentsList from '../StudentsFolder/StudentsList'
import AddStudents from '../AdminForms/AddStudentsToClass'
class AdminHome extends Component {
    constructor(props){
        super(props)

        this.state={students:[]}
    }
    

    componentDidMount() {
        axios
          .get("https://sms-permission-backend.herokuapp.com/students")
          .then(res => this.setState(   { students: res.data.students }  ))
          .catch(err => console.log(err));
      }
    
      addStudent = student => {
     
        axios
          .post("https://sms-permission-backend.herokuapp.com/students", student)
          .then(res => this.setState({ students:res.data.students }))
          .catch(err => console.log(err));
        this.props.history.push("/admin");
      };
    


    render() {
        return (
            <div>
             //  <StudentsList students={this.state.students}  />
               <AddStudents addStudent={this.addStudent}/>
            </div>
        ); 
    }
} 

export default AdminHome;