import React, { Component } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";

class AnimalDetail extends Component {
  state = {
    name: "",
    breed: "",
    imgLocation: "",
    loadingStatus: true
  };

  componentDidMount() {
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(this.props.animalId).then(animal => {
      this.setState({
        name: animal.name,
        breed: animal.breed,
        imgLocation: animal.imgLocation,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({ loadingStatus: true });
    AnimalManager.delete(this.props.animalId).then(() =>
      this.props.history.push("/animals")
    );
  };

  render() {
    console.log(this.state);
    return (
      <div className="card">
        <div className="card-content">
          {this.state.imgLocation === undefined ||
          this.state.imgLocation === "" ? (
            <picture>
              <img src={require("./img/dog.svg")} alt="dog" />
            </picture>
          ) : this.state.imgLocation.includes("https://") ? (
            <picture>
              <img src={`${this.state.imgLocation}`} alt="My Dog" />
            </picture>
          ) : (
            <picture>
              <img src={require(`${this.state.imgLocation}`)} alt="dog" />
            </picture>
          )}

          <h3>
            Name:
            <span style={{ color: "darkslategrey" }}>{this.state.name}</span>
          </h3>
          <p>Breed: {this.state.breed}</p>
          <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}
          >
            Discharge
          </button>
        </div>
      </div>
    );
  }
}

export default AnimalDetail;
