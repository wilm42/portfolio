import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import './nav.css';

export class Nav extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let style = this.props.view === 'home' ? {opacity: '0', height: '0px'} : null;
    let shipStyle = this.props.view === 'contact' ? {opacity: '0', transition:'.01s ease'} : null;
    return(
      <div>
        <nav className="container" style={style}>
          <div className="buffer container left">
            <Link to="/" style={shipStyle}><img alt="ufo logo, link to home" src="./assets/ufo.svg" /></Link>
          </div>
          <ul className="page-nav container">
            <Link to="/skills">
            <li className={this.props.view === 'skills' ? 'active' : ''}>
              skills
              <div className="selector"></div>
            </li>
            </Link>
            <Link to="/tech">
            <li className={this.props.view === 'tech' ? 'active' : ''}>
              tech
              <div className="selector"></div>
            </li>
            </Link>
            <Link to="/work">
            <li className={this.props.view === 'work' ? 'active' : ''}>
              work
              <div className="selector"></div>
            </li>
            </Link>
            <Link to="/bio">
            <li className={this.props.view === 'bio' ? 'active' : ''}>
              bio
              <div className="selector"></div>
            </li>
            </Link>
            <Link to="/contact">
            <li className={this.props.view === 'contact' ? 'active' : ''}>
              contact
              <div className="selector"></div>
            </li>
            </Link>
          </ul>
          <div className="buffer container right"></div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  view: state.view
})

export default connect(mapStateToProps)(Nav);