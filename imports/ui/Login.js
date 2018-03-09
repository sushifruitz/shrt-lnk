import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ' '
        };
    }

    onSubmit(e){
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Meteor.loginWithPassword({email}, password, (err) => {
            console.log('Login Callback', err)
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>

                {this.state.error ? <p>{this.state.error}</p> :undefined}
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" ref="email" name="email" 
                            placeholder="Email" />
                    <input type="password" ref="password"
                            name="password" placeholder="Password" />
                    <button>Login</button>
                </form>
                <Link to="/signup">Create Account</Link>
            </div>
        );
    }
}