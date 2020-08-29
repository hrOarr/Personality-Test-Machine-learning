import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const userProfileViewInit = () => {
    return {
        type: actionTypes.USER_PROFILE_VIEW_INIT
    };
};

export const userProfileViewSuccess = userProfile => {
    return {
        type: actionTypes.USER_PROFILE_VIEW_SUCCESS,
        userProfile: userProfile
    };
};

export const userProfileViewFail = error => {
    return {
        type: actionTypes.USER_PROFILE_VIEW_FAIL,
        error: error
    };
};

export const userProfileView = config => {
    return dispatch => {
        dispatch(userProfileViewInit());
        axios.get("/dashboard/profile", config)
            .then(response => dispatch(userProfileViewSuccess(response.data)))
            .catch(error => userProfileViewFail(error));
    };
};

export const userProfileEditInit = () => {
    return {
        type: actionTypes.USER_PROFILE_EDIT_INIT
    };
};

export const userProfileEditSuccess = data => {
    return {
        type: actionTypes.USER_PROFILE_EDIT_SUCCESS,
        data: data
    };
};

export const userProfileEditFail = error => {
    return {
        type: actionTypes.USER_PROFILE_EDIT_FAIL,
        error: error
    };
};

export const userProfileEdit = (updatedProfile, config) => {
    return dispatch => {
        dispatch(userProfileEditInit());
        axios.patch("/dashboard/profile/", updatedProfile, config)
            .then(response => {
                alert("Profile Updated Successfully");
                dispatch(userProfileEditSuccess(response.data));
            })
            .catch(error => {
                alert("Something Went Wrong... Try Again");
                dispatch(userProfileEditFail(error));
            });
    };
};

export const userArticleEditInit = () => {
    return {
        type: actionTypes.USER_ARTICLE_EDIT_INIT
    };
};

export const userArticleEditSuccess = () => {
    return {
        type: actionTypes.USER_ARTICLE_EDIT_SUCCESS
    };
};

export const userArticleEditFail = error => {
    return {
        type: actionTypes.USER_ARTICLE_EDIT_FAIL,
        error: error
    };
};

export const userArticleEdit = (updatedPost, config) => {
    return dispatch => {
        dispatch(userArticleEditInit());
        axios.post("/dashboard/update-article/", updatedPost, config)
            .then(response => {
                alert("Post Updated Successfully");
                dispatch(userArticleEditSuccess());
            })
            .catch(error => {
                alert("Something Went Wrong... Try Again");
                dispatch(userArticleEditFail(error));
            });
    };
};