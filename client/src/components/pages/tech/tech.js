import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

import Header from "../../static/header/header";

import "./tech.css";

export class Tech extends React.Component {
	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(actions.pageLoad("tech"));
	}

	render() {
		return (
			<main className="tech container">
				<Header text={"tech"} />
				<div className="techGrid">
					<img src="./assets/techGrid-outlinedText.svg" />
					<div className="techGrid content container">
						<div className="software container">
							<div className="row">
								<div className="logo">
									<img
										src="./assets/tech-logos/sass-shadow.svg"
										style={{ animationDelay: ".1s" }}
									/>
								</div>
								<div className="logo">
									<img
										src="./assets/tech-logos/javascript.svg"
										style={{ animationDelay: ".2s" }}
									/>
								</div>
								<div className="logo">
									<img
										src="./assets/tech-logos/sketch-2.svg"
										style={{ animationDelay: ".3s" }}
									/>
								</div>
								<div className="logo">
									<img
										src="./assets/tech-logos/firebase-shadow.svg"
										style={{ animationDelay: ".4s" }}
									/>
								</div>
								<div className="logo">
									<img
										src="./assets/tech-logos/adobe-illustrator-cc.svg"
										style={{ animationDelay: ".5s" }}
									/>
								</div>
							</div>
							<div className="row middle">
								<div className="logo">
									<img
										src="./assets/tech-logos/redux.svg"
										style={{ animationDelay: ".15s" }}
									/>
								</div>
								<div className="logo">
									<img
										src="./assets/tech-logos/Node.svg"
										style={{ animationDelay: ".25s" }}
									/>
								</div>
								<div className="logo">
									<img
										src="./assets/tech-logos/react.svg"
										style={{ animationDelay: ".35s" }}
									/>
								</div>
								<div className="logo">
									<img
										src="./assets/tech-logos/zeplin.svg"
										style={{ animationDelay: ".45s" }}
									/>
								</div>
								<div className="logo">
									<img
										src="./assets/tech-logos/mongodb.svg"
										style={{ animationDelay: ".55s" }}
									/>
								</div>
							</div>
							<div className="row">
								<div className="logo">
									<img
										src="./assets/tech-logos/python-5.svg"
										style={{ animationDelay: ".155s" }}
									/>
								</div>
								<div className="logo">
									<img
										src="./assets/tech-logos/django.svg"
										style={{ animationDelay: ".255s" }}
									/>
								</div>
								<div className="logo">
									<img
										src="./assets/tech-logos/postgresql.svg"
										style={{ animationDelay: ".355s" }}
									/>
								</div>
								<div className="logo">
									<img
										src="./assets/tech-logos/github-icon.svg"
										style={{ animationDelay: ".455s" }}
									/>
								</div>
								<div className="logo">
									<img
										src="./assets/tech-logos/photoshop-cc.svg"
										style={{ animationDelay: ".555s" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default connect()(Tech);
