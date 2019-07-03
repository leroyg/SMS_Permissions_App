import React from 'react';

const Students = (props) => {
    console.log(props)
  const {name,teacher_id,guardian_id,id} = props.student
    return (
        <div style={{background:'red'}}>
            <h2>{name} </h2>
            <h3>{teacher_id}</h3>
            <h3>{guardian_id}</h3>
            <h3>{id}</h3>
         
        </div>
    );
};

export default Students;