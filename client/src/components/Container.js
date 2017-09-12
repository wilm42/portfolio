import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Stars from './static/stars/stars';
import Nav from './static/nav/nav';
import Home from './pages/home/home';
import Skills from './pages/skills/skills';

export default class Container extends React.Component {

    render() {
        return(
            <Router>
                <div className="super container">

                    {/* scrolling stars bg */}
                    <Stars /> 
                    {/* * * * * * */}

                    <Nav />

                    <Route exact path="/" component={Home} />
                    <Route exact path="/skills" component={Skills} />

                </div>
            </Router>
        );
    }
}
