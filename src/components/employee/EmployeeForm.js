import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'

class EmployeeForm extends Component {
    state = {
        EmployeeName: "",
        job: "",
        imgLocation: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    constructNewEmployee = evt => {
        evt.preventDefault();
        if (this.state.employeeName === "" || this.state.job === "") {
            window.alert("Please input an employee name and job");
        } else {
            this.setState({ loadingStatus: true });
            const employee = {
                name: this.state.employeeName,
                job: this.state.job,
            };

            // Create the animal and redirect user to animal list
            EmployeeManager.post(employee)
            .then(() => this.props.history.push("/employees"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="employeeName"
                        placeholder="Employee name"
                        />
                        <label htmlFor="employeName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="job"
                        placeholder="job"
                        />
                        <label htmlFor="job">job</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewEmployee}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default EmployeeForm