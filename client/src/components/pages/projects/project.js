import React from "react";

export default class Project extends React.Component {
	render() {
		return (
			<div className="project-grid">
				<div className="mockup">
					<img
						alt="laptop mockup"
						className="laptop"
						src="./assets/work/laptop-container.svg"
					/>
					<img
						alt={this.props.data.title + " screenshot"}
						className="screenShot"
						src={this.props.data.screenshot}
					/>
				</div>

				<div className="project-links">
					<div>
						<a href={this.props.data.live}>live demo</a>
					</div>
					<div className="sep"> | </div>
					<div>
						<a href={this.props.data.source}>source code</a>
					</div>
				</div>
				<div className="project text">
					<h2 className="project">{this.props.data.title}</h2>
					<div className="body">
						{this.props.data.description.map((paragraph, index) => {
							return <p key={index}>{paragraph}</p>;
						})}
					</div>
				</div>

				<div className="project-tech">
					{this.props.data.tech.map(item => {
						return (
							<div key={item.text} className="project-logo">
								<img alt={item.text} src={item.logo} />
								<h3>{item.text}</h3>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
