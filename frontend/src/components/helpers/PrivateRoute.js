import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: PrivComponent, ...rest }) => {
    const sessionLogin = !!localStorage.getItem('token');
    const localLogin = sessionLogin != undefined && sessionLogin == true;
    console.log(sessionLogin);
    return (
        <Route
            {...rest}
            render={(npprops) =>
                localLogin === true ? (
                    <PrivComponent {...npprops} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/auth/login',
                            state: { from: npprops.location }
                        }}
                    />
                )
            }
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default PrivateRoute;
