import React, { Component } from 'react'

export class Form extends Component {
    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false,
            },
            isSubmitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        type === 'checkbox' ?
            this.setState(prevState => {
                return {
                    dietaryRestrictions: {
                        ...prevState.dietaryRestrictions,
                        [name]: checked
                    }
                }
            })
            : this.setState({ [name]: value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.setState({
            isSubmitted: true
        })
    }

    render() {
        const isSubmitted = this.state.isSubmitted;
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} /><br />
                    <input type="text" name="lastName" placeholder="Last name" onChange={this.handleChange} /><br />
                    <input type="text" name="age" placeholder="Age" onChange={this.handleChange} /><br />
                    <input type="radio" name="gender"
                        value="Male" checked={this.state.gender === 'Male'}
                        onChange={this.handleChange} />Male
                    <input type="radio" name="gender" value="Female"
                        checked={this.state.gender === 'Female'}
                        onChange={this.handleChange} />Female
                    <br />
                    <select name="destination" value={this.state.destination} onChange={this.handleChange}>
                        <option>Select Destination</option>
                        <option value="America">America</option>
                        <option value="Canada">Canada</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Hawaii">Hawaii</option>
                    </select>
                    <br />
                    <input type="checkbox" name="isVegan"
                        onChange={this.handleChange} checked={this.state.dietaryRestrictions.isVegan} /> Vegan?
                    <input type="checkbox" name="isKosher"
                        onChange={this.handleChange} checked={this.state.dietaryRestrictions.isKosher} /> Kosher?
                    <input type="checkbox" name="isLactoseFree"
                        onChange={this.handleChange} checked={this.state.dietaryRestrictions.isLactoseFree} /> Lactose Free?
                    <button>Submit</button>
                </form>
                <div>
                    <p>Entered Information</p>
                    <p>Your Name: {isSubmitted ? this.state.firstName + ' ' + this.state.lastName : ''}</p>
                    <p>Your Gender: {isSubmitted ? this.state.age : ''}</p>
                    <p>Your Gender: {isSubmitted ? this.state.gender : ''}</p>
                    <p>Your Destination: {isSubmitted ? this.state.destination : ''}</p>
                    <p>Your Dieteary Restrictions:</p>
                    <p>Vegan: {isSubmitted ? this.state.dietaryRestrictions.isVegan ? "Yes" : "No" : ""}</p>
                    <p>Kosher: {isSubmitted ? this.state.dietaryRestrictions.isKosher ? "Yes" : "No" : ""}</p>
                    <p>Lactose Free: {isSubmitted ? this.state.dietaryRestrictions.isLactoseFree ? "Yes" : "No" : ""}</p>

                </div>

            </div>
        )
    }
}

export default Form
