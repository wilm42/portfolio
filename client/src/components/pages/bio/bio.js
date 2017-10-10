import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";
import { Link } from "react-router-dom";

import Header from "../../static/header/header";

import "./bio.css";

export class Bio extends React.Component {
	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(actions.pageLoad("bio"));
	}

	render() {
		const myspace = <a href="https://myspace.com/">myspace</a>;
		const neopets = <a href="http://www.neopets.com/">neopets</a>;
		const danger = <a href="http://dangerpress.com/">Danger Press</a>;
		const getInTouch = <Link to="/contact">Get in touch</Link>;
		return (
			<main className="bio container">
				<Header text={"bio"} />
				<div className="bio content container">
					<div className="bio image container">
						<img src="./assets/bio/temp_portrait.jpg" />
					</div>
					<div className="bio text container">
						<h2 className="bio greetings">Greetings,</h2>
						<div className="bio paragraphs">
							<p>
								My name is {this.props.site.nameCap} Martin, thank you for
								checking out my portfolio!
							</p>
							{this.props.site.bioBlurb ? (
								<p>{this.props.site.bioBlurb}</p>
							) : null}
							<p>
								I've been writing HTML and CSS for my friends since around 2005,
								back when {myspace} and {neopets} profiles were the ultimate
								status symbols. Around that same time I was also getting into
								graphic design through designing t-shirts and show posters for
								local punk bands that I looked up to.
							</p>
							<p>
								After high school, I pursued a career in graphic design via the
								screen printing industry for 5 years before rediscovering my
								love of writing code while working at {danger} in Atlanta, GA.
							</p>
							<p>
								I can say honestly that my three biggest passions are designing,
								building, and learning. I am constantly doing all three of
								those, and have no intention of stopping any of them any time
								soon.
							</p>
							<p>
								Some other things I enjoy doing are hiking mountains, travelling
								to mountains, being near mountains and just looking at them,
								playing my guitar, artsy music (from jazz to prog-metal),
								activism, watching the x-files, listening to coding & political
								podcasts, and working on fun projects with awesome people.
							</p>
							<p>
								Are you an awesome person with a fun project? Of course you are.{" "}
								{getInTouch}, and let's make something happen!
							</p>
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

export default connect(mapStateToProps)(Bio);
