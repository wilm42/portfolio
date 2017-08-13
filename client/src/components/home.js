import React from 'react';
import {connect} from 'react-redux';

export class Home extends React.Component{

  render(){
    return(
      <h1> Hello World </h1>
    );
  }
}

const mapStateToProps = state => ({
  view: state.view
});

export default connect(mapStateToProps)(Home);