import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      imgLocation: "",
      loadingStatus: true
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        imgLocation: location.imgLocation,
        loadingStatus: false
      });
    });
  }

  
  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({ loadingStatus: true });
    LocationManager.delete(this.props.locationId).then(() =>
      this.props.history.push("/locations")
    );
  };

  render() {
    return (
      <div className="card">
        <div className="card-content">
        {this.state.imgLocation !== "" ? (
            <picture>
              <img src={require(`${this.state.imgLocation}`)} alt="Nashville" />
            </picture>
          ) : (
            <p>no photo</p>
          )}
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <button
            type="button"
            disabled={this.state.loadingStatus}
            onClick={this.handleDelete}
          >
            Closed
          </button>
        </div>
      </div>
    );
  }
}

export default LocationDetail;