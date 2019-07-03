import React, { Component } from 'react';

class AddFieldTrip extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="tripName" placeholder="Trip Name" />
                    <input type="text" name="location" placeholder="Add Address" />
                    <input type="datetime" name="date" placeholder="Event Date" />
                    <input type="datetime-local" name="startTime" placeholder="Start Time"/>
                    <input type="datetime-local" name="endTime" placeholder="End Time"/>
                    <textarea type="text" name="tripInfo" placeholder="Add Trip Details"/>
                    <button>+Add Trip</button>
                </form>
            </div>
        );
    }
}

export default AddFieldTrip;