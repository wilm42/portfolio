import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import Header from '../../static/header/header';

export class Work extends React.Component{

  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(actions.pageLoad('work'));
  }

  render(){
    return(
      <main className="work container">
        <Header text={"work"} />
      </main>
    );
  }
}

export default connect()(Work);