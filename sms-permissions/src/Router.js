import React, { Component } from "react";

import { Route } from "react-router-dom";
import Home from "./components/Home";
import About_us from "./components/About_us";
import Login from "./components/login";
import Register from "./components/Register";
import Footer from "./components/footer";
import Header from "./components/Header";
import AdminHome from "./components/AdminPages/AdminHome";
import AddFieldTrip from "./components/AdminForms/AddFieldTrip";
import StudentTripView from "./components/studentTripView"
import TeacherTripView from "./components/TeacherTripView"
import AddStudentsToClass from "./components/AdminForms/AddStudentsToClass";

class Router extends Component {
  render() {
    return (
      <div
        style={{
          flexGrow: 1,
          fontSize: "2rem",
          background: "#34004B",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Route path="/" component={Header} />
        <Route path="/admin" component={AdminHome} />
        <div style={{ background: "#FFFFFF", width: "95%" }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/trip/:id" component={StudentTripView} />
          <Route exact path="/teacher/trip" component={TeacherTripView} />
          <Route exact path="/about_Us" component={About_us} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/add_student" component={AddStudentsToClass} />
        </div>
        <Route exact path="/field-trip" component={AddFieldTrip} />

        <Footer />
      </div>
    );
  }
}

export default Router;
