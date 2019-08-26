import React, { Component } from "react";
import "./Owner.css";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require(`${this.props.owner.imgLocation}`)} alt="Icon made by Freepik from flaticon" />
          </picture>
          <h3>
            Name: <span className="card-ownername">{this.props.owner.name}</span>
          </h3>
          <p>Phone Number: {this.props.owner.phoneNumber}</p>
        </div>
        <button
            type="button"
            onClick={() => this.props.deleteOwner(this.props.owner.id)}
          >
            Abandoned
          </button>
      </div>
    );
  }
}

export default OwnerCard;
