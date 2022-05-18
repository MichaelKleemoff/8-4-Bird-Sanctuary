/** @format */

import React, { Component } from 'react';

class Checkout extends Component {
	constructor() {
		super();

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			zipCode: 0,
		};
	}

	handleFormSubmit = (e) => {
		e.preventDefault();
		e.reset();
	};

	handleFirstNameChange = (e) => {
		const { value } = e.target;
		this.setState({
			firstName: value,
		});
	};

	handleLasttNameChange = (e) => {
		const { value } = e.target;
		this.setState({
			lastName: value,
		});
	};

	handleEmailChange = (e) => {
		const { value } = e.target;
		this.setState({
			email: value,
		});
	};

	handleZipCodeChange = (e) => {
		const { value } = e.target;
		this.setState({
			zipCode: value,
		});
	};

	render() {
		const { firstName, lastName, email, zipCode } = this.state;

		return (
			<form onSubmit={this.handleFormSubmit} className="form-container">
				<h2>Checkout</h2>
				<input
					id="text"
					name="firstName"
					value={firstName}
					placeholder="First Name"
					onChange={this.handleFirstNameChange}
				/>
				<br />
				<input
					id="text"
					name="lastName"
					value={lastName}
					placeholder="Last Name"
					onChange={this.handleLasttNameChange}
				/>
				<br />
				<input
					id="text"
					name="email"
					value={email}
					placeholder="Email"
					onChange={this.handleEmailChange}
				/>
				<br />
				<input
					id="text"
					name="zipCode"
					value={zipCode}
					placeholder="Zip Code"
					onChange={this.handleZipCodeChange}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default Checkout;
