import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import Header from '../../static/header/header';

import './contact.css';

export class Contact extends React.Component{

  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(actions.pageLoad('contact'));
  }

  render(){
    return(
      <main className="contact container">
        <Header text={"contact"} />
        <div className="contact content container">
            <form className="contact container">
              <div className="contact input wrapper name">
                <label htmlFor="name">
                  <span className="labelText">what should i call you?</span>
                  <input type="text" id="name" placeholder="marvin"/>
                </label>
              </div>
              <div className="contact input wrapper method">
                <label htmlFor="email">
                <span className="labelText">how should i get back to you?</span>
                    <input type="text" id="email" placeholder="marvin@mars.io"/>
                </label>
              </div>
              <div className="contact input wrapper message">
                <label htmlFor="name">
                <span className="labelText">how can i help you?</span>
                  <textarea id="message" />
                </label>
              </div>
          </form>
          <div className="contact second container">
            <div className="contact direct container">
              <div className="contact direct images container">
                <img src="./assets/contact/li-logo.svg" />
                <img src="./assets/contact/gh-logo.svg" />
                <img src="./assets/contact/email.svg" />
              </div>
              <img className="sep" src="./assets/contact/line.svg" />
              <img className="contactShip" src="./assets/contact/contact-ufo.svg" />
              <div className="beams container">
                <img className="beam beam-1" src="./assets/contact/beams/beam-1.svg" />
                <img className="beam beam-2" src="./assets/contact/beams/beam-2.svg" />
                <img className="beam beam-3" src="./assets/contact/beams/beam-3.svg" />
                <img className="beam beam-4" src="./assets/contact/beams/beam-4.svg" />
                <img className="beam beam-5" src="./assets/contact/beams/beam-5.svg" />
              </div>
              <div className="cow-grass container">
                <img className="grass" src="./assets/contact/cow/grass.svg" />
                <div className="cow">
                  <img className="cow-jaw" src="./assets/contact/cow/jaw.svg" />
                  <img className="cow" src="./assets/contact/cow/cow.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default connect()(Contact);