import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import Header from '../../static/header/header';

export class Contact extends React.Component{

  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(actions.pageLoad('contact'));
  }

  render(){
    return(
      <main className="contact container">
        <Header text={"contact"} />
      </main>
    );
  }
}

export default connect()(Contact);