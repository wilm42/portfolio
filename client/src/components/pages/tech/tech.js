import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import Header from '../../static/header/header';

import './tech.css';

export class Tech extends React.Component{

  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(actions.pageLoad('tech'));
  }

  render(){
    return(
      <main className="tech container">
        <Header text={"tech"} />
        <div className="techGrid">
          <img src="./assets/techGrid.svg" />
          <div className="techGrid content container">
            <div className="software container">
              <div className="row">
                <div className="logo">
                  <img src="./assets/tech-logos/react.svg" />
                </div>
                <div className="logo">
                  <img src="./assets/tech-logos/javascript.svg" />
                </div>
                <div className="logo">
                  <img src="./assets/tech-logos/sketch-2.svg" />
                </div>
                <div className="logo">
                  <img src="./assets/tech-logos/Git.svg" />
                </div>
                <div className="logo">
                  <img src="./assets/tech-logos/adobe-illustrator-cc.svg" />
                </div>
              </div>
              <div className="row middle">
                <div className="logo">
                  <img src="./assets/tech-logos/redux.svg" />
                </div>
                <div className="logo">
                  <img src="./assets/tech-logos/Node.svg" />
                </div>
                <div className="logo">
                  <img src="./assets/tech-logos/bootstrap-4.svg" />
                </div>
                <div className="logo">
                  <img src="./assets/tech-logos/zeplin.svg" />
                </div>
                <div className="logo">
                  <img src="./assets/tech-logos/mongodb.svg" />
                </div>
              </div>
              <div className="row">
                <div className="logo">
                  <img src="./assets/tech-logos/python-5.svg" />
                </div>
                <div className="logo">
                  <img src="./assets/tech-logos/django.svg" />
                </div>
                <div className="logo">
                  <img src="./assets/tech-logos/postgresql.svg" />
                </div>
                <div className="logo">
                  <img src="./assets/tech-logos/github-icon.svg" />
                </div>
                <div className="logo">
                  <img src="./assets/tech-logos/photoshop-cc.svg" />
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