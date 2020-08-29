import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "./utility";

const initialState = {
    newUser: null,
    userList: null,
    loading: false,
    error: null,
    allArticles: null
};

// user list managed by Admin

const adminUserListViewInit = (state, action) => {
    return updateObject(state, {
        userList: null,
        loading: true,
        error: null,
        newUser: null,
        allPosts: null
    });
};

const adminUserListViewSuccess = (state, action) => {
    return updateObject(state, {
        userList: action.data,
        loading: false,
        error: null,
        newUser: null,
        allPosts: null
    });
};

const adminUserListViewFail = (state, action) => {
    return updateObject(state, {
        userList: null,
        loading: false,
        error: action.error,
        newUser: null,
        allPosts: null
    });
};

const adminCreateUserInit = (state, action) => {
    return updateObject(state, {
        userList: null,
        loading: true,
        error: null,
        newUser: null,
        allPosts: null
    });
};

const adminCreateUserSuccess = (state, action) => {
    return updateObject(state, {
        userList: null,
        loading: false,
        error: null,
        newUser: action.data,
        allPosts: null
    });
};

const adminCreateUserFail = (state, action) => {
    return updateObject(state, {
        userList: null,
        loading: false,
        error: action.error,
        newUser: null,
        allPosts: null
    });
};

const adminEditUserInit = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: true,
        error: null,
        allPosts: null
    });
};

const adminEditUserSuccess = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: null,
        allPosts: null
    });
};

const adminEditUserFail = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: action.error,
        allPosts: null
    });
};

// Articles managed by Admin

const adminViewAllArticlesInit = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: true,
        error: null,
        allArticles: null
    });
};

const adminViewAllArticlesSuccess = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: null,
        allArticles: action.articlesData
    });
};

const adminViewAllArticlesFail = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: action.error,
        allArticles: null
    });
};

const adminEditArticleInit = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: true,
        error: null,
        allPosts: null
    });
};

const adminEditArticleSuccess = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: null,
        allArticles: null
    });
};

const adminEditArticleFail = (state, action) => {
    return updateObject(state, {
        newUser: null,
        userList: null,
        loading: false,
        error: action.error,
        allArticles: null
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.ADMIN_USER_LIST_VIEW_INIT:
            return adminUserListViewInit(state, action);
        case actionTypes.ADMIN_USER_LIST_VIEW_SUCCESS:
            return adminUserListViewSuccess(state, action);
        case actionTypes.ADMIN_USER_LIST_VIEW_FAIL:
            return adminUserListViewFail(state, action);

        case actionTypes.ADMIN_CREATE_USER_INIT:
            return adminCreateUserInit(state, action);
        case actionTypes.ADMIN_CREATE_USER_SUCCESS:
            return adminCreateUserSuccess(state, action);
        case actionTypes.ADMIN_CREATE_USER_FAIL:
            return adminCreateUserFail(state, action);

        case actionTypes.ADMIN_VIEW_ALL_ARTICLES_INIT:
            return adminViewAllArticlesInit(state, action);
        case actionTypes.ADMIN_VIEW_ALL_ARTICLES_SUCCESS:
            return adminViewAllArticlesSuccess(state, action);
        case actionTypes.ADMIN_VIEW_ALL_ARTICLES_FAIL:
            return adminViewAllArticlesFail(state, action);

        case actionTypes.ADMIN_EDIT_ARTICLE_INIT:
            return adminEditArticleInit(state, action);
        case actionTypes.ADMIN_EDIT_ARTICLE_SUCCESS:
            return adminEditArticleSuccess(state, action);
        case actionTypes.ADMIN_EDIT_ARTICLE_FAIL:
            return adminEditArticleFail(state, action);
        default:
            return state;
    }
};

export default reducer;