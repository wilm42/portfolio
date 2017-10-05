import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

import Header from "../../static/header/header";

import "./skills.css";

export class Skills extends React.Component {
	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(actions.pageLoad("skills"));
	}

	render() {
		return (
			<main className="skills container">
				<Header text={"skills"} />
				<div className="cards container">
					<div className="skill-card design container">
						<img
							src="./assets/skill-design.svg"
							alt="design skill card header"
						/>
						<p className="skill text">
							“Design is the art of problem solving”. I take this definition to
							heart in my work. Whether designing elegant algorithms, delightful
							user experiences, or rock solid data schemas, it’s got to be both
							form and function, never one over the other.
						</p>
					</div>
					<div className="skill-card develop container">
						<img
							src="./assets/skill-develop.svg"
							alt="develop skill card header"
						/>
						<p className="skill text">
							I write code, and I keep writing code until the vision of the
							design is fulfilled. Being a full-stack developer means that I am
							competent with every aspect of the development process and can
							turn nearly any idea into a working product.
						</p>
					</div>
					<div className="skill-card deploy container">
						<img
							src="./assets/skill-deploy.svg"
							alt="deploy skill card header"
						/>
						<p className="skill text">
							An application or website is no good if you can only use it on
							your home computer. Someone has to be able to deploy it to the web
							using a cloud platform or webserver of your choice, and deal with
							all the fun that comes along. <br /> I can do that.
						</p>
					</div>
				</div>
			</main>
		);
	}
}

export default connect()(Skills);
