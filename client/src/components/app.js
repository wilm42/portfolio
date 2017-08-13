import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import {connect} from 'react-redux';

class App extends React.Component {

    render() {
        return(
            <Router>
                <Route exact path="/" component={Home} />
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    view: state.view
});

export default connect(mapStateToProps)(App);
