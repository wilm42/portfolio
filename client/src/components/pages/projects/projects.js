import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

import Header from "../../static/header/header";
import Project from "./project";
import Loader from "./loader/loader";

import * as projectsData from "./projects-data";

import "./projects.css";

class Projects extends React.Component {
	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(actions.pageLoad("work"));
	}
	render() {
		return (
			<main className="work container">
				<Header text={"projects"} />
				<div className="projects">
					{projectsData.projects.map(project => {
						return <Project data={project} />;
					})}
				</div>
			</main>
		);
	}
}

export default connect()(Projects);
