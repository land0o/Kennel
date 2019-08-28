import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import EmployeeList from "./employee/EmployeeList";
import LocationList from "./location/LocationList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from "./animal/AnimalForm";
import EmployeeForm from "./employee/EmployeeForm";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/animals"
          render={props => {
            return <AnimalList {...props} />;
          }}
        />
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/animals/new"
          render={props => {
            return <AnimalForm {...props} />;
          }}
        />
        <Route
          exact
          path="/employees"
          render={props => {
            return <EmployeeList {...props} />;
          }}
        />
        />
        <Route
          exact
          path="/employees/new"
          render={props => {
            return <EmployeeForm {...props} />;
          }}
        />
        <Route
          exact
          path="/locations"
          render={props => {
            return <LocationList {...props} />;
          }}
        />
        <Route
          path="/locations/:locationId(\d+)"
          render={props => {
            // Pass the locationId to the LocationDetailComponent
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/owners"
          render={props => {
            return <OwnerList {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
