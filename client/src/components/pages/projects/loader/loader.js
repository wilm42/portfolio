import React from "react";

import "./loader.css";

export default class Loader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaderIndex: 0,
			loaderText: [
				"Heroku is warming up... It's cold in outer space.",
				"Heh, well... this is awkward. So how about this weather?",
				"Earth to Heroku, Do you read?",
				"While I've got you here - do you have a moment to talk about aliens?",
				"THE TRUTH IS OUT THERE",
				"*Whistles casually*",
			],
		};
	}

	setText(index) {
		if (index === this.state.index) {
			this.changeText();
		} else {
			console.log(index);
			this.setState({ loaderIndex: index });
		}
	}

	changeText() {
		let newIndex = Math.floor(Math.random() * this.state.loaderText.length);
		this.setText(newIndex);
	}

	componentWillMount() {
		this.changeText();
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const { loaderText, loaderIndex } = this.state;
		return (
			<div className="loader">
				<h2 className="loaderText">{loaderText[loaderIndex]}</h2>
				<span className="loading">
					loading<span className="loaderDots">...</span>
				</span>
				<img className="loaderUfo" src="./assets/ufo.svg" />
			</div>
		);
	}
}
