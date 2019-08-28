import React, { Component } from "react";
//import the components we will need
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

class LocationList extends Component {
  //define what this component needs to render
  state = {
    locations: []
  };

  componentDidMount() {
    console.log("Location LIST: ComponentDidMount");
    //getAll from LocationManager and hang on to that data; put it in state
    LocationManager.getAll().then(locations => {
      this.setState({
        locations: locations
      });
    });
  }
  deleteLocation = id => {
    LocationManager.delete(id).then(() => {
      LocationManager.getAll().then(newLocations => {
        this.setState({
          locations: newLocations
        });
      });
    });
  };

  render() {
    console.log("Location LIST: Render");

    return (
      <React.Fragment>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/locations/new");
            }}
          >
            New Location
          </button>
        </section>
        <div className="container-cards">
          {this.state.locations.map(location => (
            <LocationCard
              {...this.props}
              key={location.id}
              location={location}
              deleteLocation={this.deleteLocation}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default LocationList;
