import React, { Component } from 'react';
import axios from 'axios'

class StudentTripView extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            students: [],
            confirmed: [],
            other: []
        }
    }

    componentDidMount() {
        // console.log(this.props)
        axios.get(`https://sms-permission-backend.herokuapp.com/students/trip/${this.props.match.params.id}`)
        .then(data  =>  {
            console.log(data)
            const left = []
            const right = []
            data.data.filter(item    =>  {
                item.status === 0 ? left.push(item) : right.push(item)
            })
            this.setState({
                students: data.data,
                confirmed: right,
                other: left
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{"confirmed"}</h1>
                {this.state.confirmed.map(student  =>  {
                    return(<h5>{student.name}</h5>)
                })}
                <h1>{"other"}</h1>

                {this.state.other.map(student  =>  {
                    return(<h5>{student.name}</h5>)
                })}
            </div>
        );
    }
};

export default StudentTripView;
