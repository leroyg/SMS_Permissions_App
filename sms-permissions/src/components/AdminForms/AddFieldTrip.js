import React, { Component, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    backgroundColor: "white",
    width: "50%"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  textField: {
    margin: "15px auto",
    width: "70%"
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const AddFieldTrip = () => {
  const classes = useStyles();
  const [trip, setTrip] = useState({});

  const changeHandler = e => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    const tripObj = {
      fieldTrip: { date: trip.date, name: trip.tripName, teacher_id: 1 }
    };
    console.log(tripObj);
    e.preventDefault();
    axios
      .post("https://sms-permission-backend.herokuapp.com/fieldTrips", tripObj, {headers: {"Access-Control-Allow-Origin" : "*"}})
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message));
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <TextField
          variant="outlined"
          className={classes.textField}
          onChange={changeHandler}
          value={trip.tripName}
          type="text"
          name="tripName"
          placeholder="Trip Name"
        />

        <TextField
          variant="outlined"
          className={classes.textField}
          onChange={changeHandler}
          value={trip.date}
          type="date"
          name="date"
          placeholder="Event Date"
        />

        <Button
          type="submit"
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          + Add Trip
        </Button>
      </form>
    </div>
  );
};

export default AddFieldTrip;
