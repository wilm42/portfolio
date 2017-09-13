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

                </div>
                <div className="logo">

                </div>
                <div className="logo">

                </div>
                <div className="logo">

                </div>
                <div className="logo">

                </div>
              </div>
              <div className="row middle">
                <div className="logo">

                </div>
                <div className="logo">

                </div>
                <div className="logo">

                </div>
                <div className="logo">

                </div>
                <div className="logo">

                </div>
              </div>
              <div className="row">
                <div className="logo">

                </div>
                <div className="logo">

                </div>
                <div className="logo">

                </div>
                <div className="logo">

                </div>
                <div className="logo">

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