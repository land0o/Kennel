import React, { Component } from "react";
import "./Employee.css";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`${this.props.employee.imgLocation}`)} alt="Icon made by Freepik from flaticon" />
          </picture>
          <h3>
            Name: <span className="card-employeename">{this.props.employee.name}</span>
          </h3>
          <p>Job: {this.props.employee.job}</p>
        </div>
        <button
            type="button"
            onClick={() => this.props.deleteEmployee(this.props.employee.id)}
          >
            FIRE
          </button>
      </div>
    );
  }
}

export default EmployeeCard;
