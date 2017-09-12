import React from 'react';

import Gradient from './gradient';

import './home.css';

export default class Home extends React.Component{
  render(){
    return(
      <main className="home container">

        <header className="home container">
          <div className="ship container">
            <img src="./assets/ufo.svg"/>
          </div>
          <div className="text container">
            <h1 className="name">
              <span className="thin">william </span>
              <span className="bold">martian</span>
            </h1>
            <h2 className="tagline">
              <span className="reg">full-stack web developer, designer & earthling.</span>
            </h2>
          </div>
        </header>

        <Gradient />

      </main>
    );
  }
}