import React from "react";
import { connect } from "react-redux";

import "./footer.css";

export class Footer extends React.Component {
	render() {
		let style;
		if (this.props.view === "home") {
			style = { opacity: "0", height: "0px" };
		}
		return (
			<footer style={style}>
				<div>
					handcrafted by wilm © 2017 | ufo icon created by Kaylen from the{" "}
					<a href="https://nounproject.org">noun project</a>.
				</div>
				<div className="links container">
					<a href="https://www.linkedin.com/in/Wilm-martin-220667104/">
						<img src="./assets/footer/li-logo-footer.svg" alt="linkedIn" />
					</a>
					<a href="https://github.com/Wilm42">
						<img src="./assets/footer/gh-logo-footer.svg" alt="gitHub" />
					</a>
				</div>
			</footer>
		);
	}
}

const mapStateToProps = state => ({
	view: state.view,
});

export default connect(mapStateToProps)(Footer);
