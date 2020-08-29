import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from './js/redux/actions/index';
import Loadable from 'react-loadable';
import Header from './components/helpers/header';
import Footer from './components/helpers/footer';
import Preloader from './components/helpers/preloader';
import ArticleList from "./components/Articles/ArticleList";
import ArticleBody from "./components/Articles/ArticleBody";
import Login from './components/Login/login';
import PrivateRoute from './components/helpers/PrivateRoute';
import logo from './logo.svg';
import './App.css';

const AsyncHome = Loadable({
    loader: () => import('./components/Home/home'),
    loading: Preloader
});

const AsyncAdmin = Loadable({
    loader: () => import('./components/Admin'),
    loading: Preloader
    
});

const AsyncAdminUserListView = Loadable({
    loader: () => import('./components/Admin/UserList/userlist'),
    loading: Preloader
    
});

const AsyncBig5PersonalityTest = Loadable({
    loader: () => import('./components/Big5_personality/personality_test'),
    loading: Preloader
    
});

const AsyncBig5PersonalityTestResult = Loadable({
    loader: () => import('./components/Big5_personality/personality_test_result'),
    loading: Preloader
    
});

const AsyncBig5PersonalityFromText = Loadable({
    loader: () => import('./components/Big5_personality_from_text/personality_test'),
    loading: Preloader
    
});

const AsyncBig5PersonalityFromTextResult = Loadable({
    loader: () => import('./components/Big5_personality_from_text/personality_test_result'),
    loading: Preloader
    
});

class App extends Component {

    componentDidMount(){
        this.props.onCheckAuthStatus();
    }

    render(){
        console.log(this.props.isUserProfile)
        const allRoutes = (
        <div>
        <Header />
        <Switch>
           // Front-end
           <Route path="/" component={AsyncHome} exact/>
           <Route path="/articles" component={ArticleList} exact/>
           <Route path="/articles/:slug" component={ArticleBody} exact/>
           <Route path="/personality_test/questions/" component={AsyncBig5PersonalityTest} exact/>
           <Route path="/personality_test/questions/result" component={AsyncBig5PersonalityTestResult} exact/>
           <Route path="/personality_test/text/" component={AsyncBig5PersonalityFromText} exact/>
           <Route path="/personality_test/text/result" component={AsyncBig5PersonalityFromTextResult} exact/>

           // Authentication
           <Route path="/auth/login" component={Login} exact/>

           // Back-end
           <PrivateRoute path="/admin" component={AsyncAdmin} exact/>
           <PrivateRoute path="/admin/user-list" component={AsyncAdminUserListView} exact/>
        </Switch>
        </div>
        );

        return (
            <div>
               {allRoutes}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null,
        isUserProfile: state.user.userProfile !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCheckAuthStatus: () => dispatch(actions.authLoginCheckState())
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);