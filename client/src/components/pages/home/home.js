import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import Gradient from './gradient';

import './home.css';

export class Home extends React.Component{

  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(actions.pageLoad('home'));
  }

  render(){
    return(
      <main className="home container" id="home">
        <header className="home container">
          <div className="ship container">
            <img ref={ufo => this.ufo = ufo} alt="ufo logo" src="./assets/ufo.svg"/>
          </div>
          <div className="text container">
            <h1 className="name">
              <span className="thin">william </span>
              <span className="bold">martian</span>
            </h1>
            <h2 className="tagline">
              <span className="reg">full-stack web developer, designer, & earthling.</span>
            </h2>
          </div>
        </header>

        <Gradient />

      </main>
    );
  }
}

export default connect()(Home);