import React from 'react';

import './nav.css';

export default class Nav extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <nav className="bg-card container">
        {/* <ul className="page-nav">
          <li>
            skills
          </li>
          <li>
            tech
          </li>
          <li>
            work
          </li>
          <li>
            bio
          </li>
          <li>
            contact
          </li>
        </ul> */}
      </nav>
    );
  }
}