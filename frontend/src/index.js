import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loadable from 'react-loadable';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./js/redux/store";
import Preloader from './components/helpers/preloader';
import history from './js/history';
import asyncComponent from "./hoc/AsyncComponent/asyncomponent";

import JavascriptTimeAgo from 'javascript-time-ago'
 
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'
 
JavascriptTimeAgo.addLocale(en)
JavascriptTimeAgo.addLocale(ru)

// App loading section
//const AsyncApp = Loadable({
	//loader: () => import('./App'),
	//loading: Preloader,
	//timeout: 10000,
	//delay: 300
//});


ReactDOM.render(
	<Provider store={store}>
	   <Router history={history}>
	       <App />
	   </Router>
	</Provider>, 
	document.getElementById('root'));

serviceWorker.unregister();