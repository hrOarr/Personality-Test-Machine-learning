import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import AuthReducer from "./reducers/authReducer";
import AdminReducer from "./reducers/adminReducer";
import ArticleReducer from "./reducers/articleReducer";
import UserReducer from './reducers/userReducer';
import QuestionTestReducer from './reducers/questionspersonalitytestReducer';
import TextTestReducer from './reducers/textpersonalitytestReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = combineReducers({
    auth: AuthReducer,
    article: ArticleReducer,
    admin: AdminReducer,
    user: UserReducer,
    questionTest: QuestionTestReducer,
    textTest: TextTestReducer,
});

const store = createStore(rootStore, composeEnhancers(applyMiddleware(thunk)));
export default store;