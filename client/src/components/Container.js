import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

import Stars from "./static/stars/stars";
import Nav from "./static/nav/nav";
import Home from "./pages/home/home";
import Skills from "./pages/skills/skills";
import Bio from "./pages/bio/bio";
import Contact from "./pages/contact/contact";
import Tech from "./pages/tech/tech";
import Projects from "./pages/projects/projects";
import Footer from "./static/footer/footer";

class Container extends React.Component {
	componentWillMount() {
		const url = window.location.href;
		if (url.search(/wilm/g) > 0 || url.search(/localhost/g) > 0) {
			this.props.dispatch(actions.siteWilm());
		}
	}

	render() {
		return (
			<Router>
				<div className="super container">
					{/* scrolling stars bg */}
					<Stars />
					{/* * * * * * */}

					<Nav />

					<Route exact path="/" component={Home} />
					<Route exact path="/skills" component={Skills} />
					<Route exact path="/bio" component={Bio} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/tech" component={Tech} />
					<Route exact path="/projects" component={Projects} />

					<Footer />
				</div>
			</Router>
		);
	}
}

export default connect()(Container);
