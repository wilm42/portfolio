import React from 'react';

import './stars.css';

export default class Stars extends React.Component{
  render(){
    return(
      <div>
        <div className="stars"></div>
        <div className="stars med"></div>
      </div>
    );
  }
}