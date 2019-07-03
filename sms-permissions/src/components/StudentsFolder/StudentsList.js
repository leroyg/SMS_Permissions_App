import React from 'react';
import Students from './Students'
const StudentsList = (props) => {
    console.log("is this what's being logged", props)
    return (
        <div>
           {props.students.map((classes,i) => <Students key={i} student={classes}     />)}
        </div>
    );}



export default StudentsList;
