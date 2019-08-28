import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Animal.css";

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {this.props.animal.imgLocation === undefined ||
          this.props.animal.imgLocation === "" ? (
            <picture>
              <img src={require("./img/dog.svg")} alt="dog" />
            </picture>
          ) : this.props.animal.imgLocation.includes("https://") ? (
            <picture>
              <img src={`${this.props.animal.imgLocation}`} alt="My Dog" />
            </picture>
          ) : (
            <picture>
              <img
                src={require(`${this.props.animal.imgLocation}`)}
                alt="dog"
              />
            </picture>
          )}

          <h2>
            Name: <span className="card-petname">{this.props.animal.name}</span>
          </h2>
          <p>Breed: {this.props.animal.breed}</p>
          <Link to={`/animals/${this.props.animal.id}`}>
            <button>Details</button>
          </Link>

          <button
            type="button"
            onClick={() => this.props.deleteAnimal(this.props.animal.id)}
          >
            Discharge
          </button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;
