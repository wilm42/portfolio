import React from 'react';

import './header.css';

export default class Header extends React.Component{
  render(){
    return(
      <header className={this.props.text + " page container"}>
        {this.props.text}
      </header>
    );
  }
}