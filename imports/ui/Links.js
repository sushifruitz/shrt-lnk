import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Accounts } from 'meteor/accounts-base';

export default class Links extends React.Component {
    onLogout() {
        Accounts.logout();
    }
    render() {
        return (
            <div>
                <h1>Link component</h1>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        );
    }
}
