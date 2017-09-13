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
        <div className="links container">
          <a href="https://www.linkedin.com/in/william-martin-220667104/">
            <img src="./assets/footer/linkedin-footer.svg" alt="linkedIn" />
          </a>
          <a href="https://github.com/williamtwobit">
            <img src="./assets/footer/github-footer.svg" alt="gitHub" />
          </a>
        </div>
      </footer>
    );
  }
}

const mapStateToProps = (state) => ({
  view: state.view
})

export default connect(mapStateToProps)(Footer);