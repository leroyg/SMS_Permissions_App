import React, { Component } from 'react';
import axios from 'axios'

class TeacherTripView extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            trips: []
        }
    }

    componentDidMount() {
        axios.get("https://sms-permission-backend.herokuapp.com/fieldTrips/teachers/1")
        .then(data  =>  {
            this.setState({
                trips: data.data
            })
        })
        .catch(err  =>  {
            console.log(err)
        })
    }

    onClickHandler  =   (e)  =>  {
        this.props.history.push(`/trip/${e.target.id}/`)
    }

    render() {
        return (
            <div>
            {this.state.trips.map(trip=>{
                return (<h1 id={trip.id} onClick={this.onClickHandler}>trip</h1>)
            })}

            </div>
        );
    }
};

export default TeacherTripView;
