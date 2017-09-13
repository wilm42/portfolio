import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import { Provider } from 'react-redux';


import './index.css';
import Store from './redux/store';

ReactDOM.render(
  <Provider store={Store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);
