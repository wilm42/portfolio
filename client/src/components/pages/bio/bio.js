import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import Header from '../../static/header/header';

export class Bio extends React.Component{

  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(actions.pageLoad('bio'));
  }

  render(){
    return(
      <main className="bio container">
        <Header text={"bio"} />
      </main>
    );
  }
}

export default connect()(Bio);