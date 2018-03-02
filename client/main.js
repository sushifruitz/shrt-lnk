import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from '../imports/ui/Login';
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';

const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/links" component={Link}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
});