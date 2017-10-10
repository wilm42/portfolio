import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

import Header from "../../static/header/header";

import "./contact.css";

export class Contact extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			message: "",
			submitted: false,
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.id]: e.target.value,
		});
	}

	submitContactForm(e) {
		e.preventDefault();
		let data = {
			email: this.state.email,
			name: this.state.name,
			message: this.state.message,
		};
		fetch("https://formspree.io/contact@William.direct", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			this.setState({
				name: "",
				email: "",
				message: "",
				submitted: true,
			});
		});
	}

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(actions.pageLoad("contact"));
	}

	render() {
		return (
			<main className="contact container">
				<Header text={"contact"} />
				<div className="contact content container">
					<form className="contact container">
						<div
							className={
								this.state.submitted ? "feedback submitted show" : "feedback"
							}>
							<span>Sweet, got it!</span>{" "}
							<span>I'm a quick responder, so keep an eye on your email.</span>
						</div>
						<div className="contact input wrapper name">
							<label htmlFor="name">
								<span className="labelText">what should i call you?</span>
								<input
									type="text"
									id="name"
									placeholder="marvin"
									onChange={e => this.handleChange(e)}
									value={this.state.name}
								/>
							</label>
						</div>
						<div className="contact input wrapper method">
							<label htmlFor="email">
								<span className="labelText">how should i get back to you?</span>
								<input
									type="text"
									id="email"
									placeholder="marvin@mars.io"
									onChange={e => this.handleChange(e)}
									value={this.state.email}
								/>
							</label>
						</div>
						<div className="contact input wrapper message">
							<label htmlFor="message">
								<span className="labelText">how can i help you?</span>
								<textarea
									id="message"
									onChange={e => this.handleChange(e)}
									value={this.state.message}
									placeholder="Hi, I'm an actual martian... from Mars. We need to talk."
								/>
							</label>
						</div>
						<button
							type="submit"
							id="contact"
							onClick={e => this.submitContactForm(e)}>
							Beam it up!
						</button>
					</form>
					<div className="contact second container">
						<div className="contact direct container">
							<div className="contact direct images container">
								<a href="https://www.linkedin.com/in/wilm42/">
									<img src="./assets/contact/li-logo.svg" />
								</a>
								<a href="https://github.com/wilm42">
									<img src="./assets/contact/gh-logo.svg" />
								</a>
								<a href={this.props.site.email}>
									<img src="./assets/contact/email.svg" />
								</a>
							</div>
							<img className="sep" src="./assets/contact/sep-line.svg" />
							<img
								className="contactShip"
								src="./assets/contact/contact-ufo.svg"
							/>
							<div className="beams container">
								<img
									className="beam beam-1"
									src="./assets/contact/beams/beam-1.svg"
								/>
								<img
									className="beam beam-2"
									src="./assets/contact/beams/beam-2.svg"
								/>
								<img
									className="beam beam-3"
									src="./assets/contact/beams/beam-3.svg"
								/>
								<img
									className="beam beam-4"
									src="./assets/contact/beams/beam-4.svg"
								/>
								<img
									className="beam beam-5"
									src="./assets/contact/beams/beam-5.svg"
								/>
							</div>
							<div className="cow-grass container">
								<img className="grass" src="./assets/contact/cow/grass.svg" />
								<div className="cow">
									<img className="cow-jaw" src="./assets/contact/cow/jaw.svg" />
									<img className="cow" src="./assets/contact/cow/cow.svg" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

const mapStateToProps = state => ({
	site: state.site,
});

export default connect(mapStateToProps)(Contact);
