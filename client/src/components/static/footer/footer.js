import React from 'react';
import {connect} from 'react-redux';

import './footer.css';

export class Footer extends React.Component{
  render(){
    let style;
    if(this.props.view === 'home'){ 
      style= {opacity: '0'};
    }
    return(
      <footer style={style}>
        <div>handcrafted by william martin © 2017 | ufo icon created by Kaylen from the <a href="https://nounproject.org">noun project</a>.</div>
        <div className="links container"><img alt="footer link to linkedIn" src="./assets/linkedin-footer.svg"/><img alt="footer link to gitHub" src="./assets/github-footer.svg"/></div>
      </footer>
    );
  }
}

const mapStateToProps = (state) => ({
  view: state.view
})

export default connect(mapStateToProps)(Footer);