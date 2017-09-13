import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Stars from './static/stars/stars';
import Nav from './static/nav/nav';
import Home from './pages/home/home';
import Skills from './pages/skills/skills';
import Bio from './pages/bio/bio';
import Contact from './pages/contact/contact';
import Tech from './pages/tech/tech';
import Work from './pages/work/work';
import Footer from './static/footer/footer';

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
                    <Route exact path="/bio" component={Bio} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/tech" component={Tech} />
                    <Route exact path="/work" component={Work} />

                    <Footer />
                </div>
            </Router>
        );
    }
}
