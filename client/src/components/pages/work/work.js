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
              <img className="work-top work-logo" src="./assets/work/logos/devCupid.svg" />
              <div className="work-top work-synop container">
                <p>
                  short description goes here, lorem lorem blah blah blah
                  short description goes here, lorem lorem blah blah blah
                  short description goes here, lorem lorem blah blah blah
                </p>
                <div className="project-links">
                  <a href="">source</a> | <a href="">live demo</a> | <a href="">detail</a>
                </div>
              </div>
            </div>
            <div className="title container">
              <img className="work-top" src="./assets/work/titles/devCupid.svg" />
            </div>
          </div>
          <div className="work-card">
            <div className="gradient container">
              <img className="gradient-bg" src="./assets/work/work-card-bg.svg" />
              <img className="work-top work-logo" src="./assets/work/logos/devCupid.svg" />
              <div className="work-top work-synop container">
                <p>
                  short description goes here, lorem lorem blah blah blah
                  short description goes here, lorem lorem blah blah blah
                  short description goes here, lorem lorem blah blah blah
                </p>
                <div className="project-links">
                  <a href="">source</a> | <a href="">live demo</a> | <a href="">detail</a>
                </div>
              </div>
            </div>
            <div className="title container">
              <img className="work-top" src="./assets/work/titles/devCupid.svg" />
            </div>
          </div>
          <div className="work-card">
            <div className="gradient container">
              <img className="gradient-bg" src="./assets/work/work-card-bg.svg" />
              <img className="work-top work-logo" src="./assets/work/logos/devCupid.svg" />
              <div className="work-top work-synop container">
                <p>
                  short description goes here, lorem lorem blah blah blah
                  short description goes here, lorem lorem blah blah blah
                  short description goes here, lorem lorem blah blah blah
                </p>
                <div className="project-links">
                  <a href="">source</a> | <a href="">live demo</a> | <a href="">detail</a>
                </div>
              </div>
            </div>
            <div className="title container">
              <img className="work-top" src="./assets/work/titles/devCupid.svg" />
            </div>
          </div>
          <div className="work-card">
            <div className="gradient container">
              <img className="gradient-bg" src="./assets/work/work-card-bg.svg" />
              <img className="work-top work-logo" src="./assets/work/logos/devCupid.svg" />
              <div className="work-top work-synop container">
                <p>
                  short description goes here, lorem lorem blah blah blah
                  short description goes here, lorem lorem blah blah blah
                  short description goes here, lorem lorem blah blah blah
                </p>
                <div className="project-links">
                  <a href="">source</a> | <a href="">live demo</a> | <a href="">detail</a>
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