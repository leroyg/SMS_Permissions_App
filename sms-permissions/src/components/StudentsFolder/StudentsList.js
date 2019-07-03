import React from 'react';
import Students from './Students'
const StudentsList = (props) => {
    console.log(props.students)
    return (
        <div>
           {props.students.map((classes,i) => <Students key={i} student={classes}     />)}
        </div>
    );}
  


export default StudentsList;