import * as actionsTypes from "./actionTypes";
import AxiosInstance from "../../../AxiosInstance";
import axios from 'axios';

// user view and create
export const adminUserListViewInit = () => {
    return {
        type: actionsTypes.ADMIN_USER_LIST_VIEW_INIT
    };
};

export const adminUserListViewSuccess = data => {
    return {
        type: actionsTypes.ADMIN_USER_LIST_VIEW_SUCCESS,
        data: data
    };
};

export const adminUserListViewFail = error => {
    return {
        type: actionsTypes.ADMIN_USER_LIST_VIEW_FAIL,
        error: error
    };
};

export const adminUserListView = config => {
    return dispatch => {
        dispatch(adminUserListViewInit());
        axios.get("/admin-panel/users/", config)
            .then(response => {
            	console.log(response.data)
                dispatch(adminUserListViewSuccess(response.data));
            })
            .catch(error => {
                dispatch(adminUserListViewFail(error));
            });
    };
};

export const adminCreateUserInit = () => {
    return {
        type: actionsTypes.ADMIN_CREATE_USER_INIT
    };
};

export const adminCreateUserSuccess = data => {
    return {
        type: actionsTypes.ADMIN_CREATE_USER_SUCCESS,
        data: data
    };
};

export const adminCreateUserFail = error => {
    return {
        type: actionsTypes.ADMIN_CREATE_USER_FAIL,
        error: error
    };
};

export const adminCreateUser = (data, config) => {
    return dispatch => {
        dispatch(adminCreateUserInit());
        AxiosInstance.post("/admin-panel/users/", data, config)
            .then(response => {
                alert("User Created Successfully");
                dispatch(adminCreateUserSuccess(response.data));
            })
            .catch(error => {
                alert("ERROR..!! Something Went Wrong");
                adminCreateUserFail(error);
            });
    };
};


// view all articles
export const adminViewAllArticlesInit = () => {
    return {
        type: actionsTypes.ADMIN_VIEW_ALL_ARTICLES_INIT
    };
};

export const adminViewAllArticlesSuccess = articles => {
    return {
        type: actionsTypes.ADMIN_VIEW_ALL_ARTICLES_SUCCESS,
        articlesData: articles
    };
};

export const adminViewAllArticlesFail = error => {
    return {
        type: actionsTypes.ADMIN_VIEW_ALL_ARTICLES_FAIL,
        error: error
    };
};

export const adminViewAllArticles = config => {
    return dispatch => {
        dispatch(adminViewAllArticlesInit());
        AxiosInstance.get("/admin-panel/articles/", config)
            .then(response => {
                dispatch(adminViewAllArticlesSuccess(response.data));
            })
            .catch(error => {
                alert("ERROR..!! Something Went Wrong");
                dispatch(adminViewAllArticlesFail(error));
            });
    };
};

// edit article
export const adminEditArticleInit = () => {
    return {
        type: actionsTypes.ADMIN_EDIT_ARTICLE_INIT
    };
};

export const adminEditArticleSuccess = () => {
    return {
        type: actionsTypes.ADMIN_EDIT_ARTICLE_SUCCESS
    };
};

export const adminEditArticleFail = error => {
    return {
        type: actionsTypes.ADMIN_EDIT_ARTICLE_FAIL,
        error: error
    };
};

export const adminEditArticle = (config, slug) => {
    return dispatch => {
        dispatch(adminEditArticleInit());
        AxiosInstance.patch(
            "/admin-panel/articles/view/" + slug + "/",
            null,
            config
            )
            .then(response => {
                dispatch(adminEditArticleSuccess());
                alert("Post Edited Successfully");
            })
            .catch(error => {
                dispatch(adminEditArticleFail(error));
                alert("ERROR...!! Something Went Wrong");
                console.log(error.response.data);
            });
    };
};