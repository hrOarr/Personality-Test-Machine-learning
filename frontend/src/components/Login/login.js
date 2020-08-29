import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect,withRouter } from 'react-router-dom';

import * as actions from '../../js/redux/actions/index';
import Preloader from '../helpers/preloader';
import { SITE_TITLE } from '../helpers/constants';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            auth_message: ''
        };
    }
    componentDidMount() {
        document.title = 'Login - ' + SITE_TITLE;
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const loginCred = {
        	username: this.state.username,
        	password: this.state.password
        }
        this.props.onAuthLogin(loginCred);
    };
    render() {

        if(this.props.isAuth) return <Redirect to="/admin/" />;
        if(this.props.loading) return <Preloader />;
        return (
            <div className="login-section section center z-depth-1">
                <div className="heading">
                    <h5>Welcome Back</h5>
                    <p>
                        Sign in to appreciate stories you love, and more.
                    </p>
                </div>

                <div className="login-form">
                    <form className="row" onSubmit={this.handleSubmit}>
                        <div className="input-field col s12">
                            <input
                                type="text"
                                id="username"
                                placeholder="Your username"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field col s12">
                            <input
                                type="password"
                                id="password"
                                placeholder="Your password"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field col s12">
                            <button type="submit" className="btn">
                                    Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

const mapStateProps = state => {
	return {
		loading: state.auth.loading,
		isAuth: state.auth.token !== null,
		loginRedirectURL: state.auth.loginRedirectURL
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAuthLogin: loginCred => 
		    dispatch(actions.authLogin(loginCred))
	};
};

export default connect(mapStateProps,mapDispatchToProps)(Login);