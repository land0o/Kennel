import React, { Component } from "react";
import "./Location.css";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img
              src={require("./location.jpg")}
              alt="nashville"
            />
          </picture>
          <h3>
            Name: <span className="card-locationname">{this.props.location.name}</span>
          </h3>
        </div>
        <button
            type="button"
            onClick={() => this.props.deleteLocation(this.props.location.id)}
          >
            Moved
          </button>
      </div>
    );
  }
}

export default LocationCard;
