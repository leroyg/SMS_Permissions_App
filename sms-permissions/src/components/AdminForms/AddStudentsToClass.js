import React, { Component } from 'react';

class AddStudentsToClass extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="studentFullName" placeholder="Student Name" />
                    <input type="text" name="parentName" placeholder="Parent Name" />
                    <input type="tel" name="contactNumber" placeholder="555-555-5555"/>
                    <button>+Add Student</button>
                </form>
            </div>
        );
    }
}

export default AddStudentsToClass;