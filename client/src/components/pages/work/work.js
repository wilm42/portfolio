import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import './work.css';

import Header from '../../static/header/header';

export class Work extends React.Component{

  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(actions.pageLoad('work'));
  }

  render(){
    return(
      <main className="work container">
        <Header text={"work"} />
        <div className="work-cards container">
          
          <div className="work-card">
            <div className="gradient container">
              <img className="gradient-bg" src="./assets/work/work-card-bg.svg" />
              <img className="work-top work-logo" src="./assets/work/logos/seekhana.svg" />
              <div className="work-top work-synop container">
                <p>
                  seekhana is an app designed to teach basic Hindi to a western audience.
                  My responsibilities on this app: Web Design, CSS, Algorithm design, and Node.
                </p>
                <div className="project-links">
                  <a href="https://github.com/williamtwobit/seekhana">source</a> | <a href="http://seekhana.herokuapp.com">live demo</a>
                </div>
              </div>
            </div>
            <div className="title container">
              <img className="work-top" src="./assets/work/titles/seekhana.svg" />
            </div>
          </div>
          <div className="work-card">
            <div className="gradient container">
              <img className="gradient-bg" src="./assets/work/work-card-bg.svg" />
              <img className="work-top work-logo" src="./assets/work/logos/devCupid.svg" />
              <div className="work-top work-synop container">
                <p>
                  devCupid is a social app for finding project collaborators.
                  My responsibilities on this app: Web Design, CSS, Product design, and React.
                </p>
                <div className="project-links">
                  <a href="https://github.com/thinkful-c11/devcupid">source</a> | <a href="http://devcupid.herokuapp.com">live demo</a>
                </div>
              </div>
            </div>
            <div className="title container">
              <img className="work-top" src="./assets/work/titles/devCupid.svg" />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default connect()(Work);