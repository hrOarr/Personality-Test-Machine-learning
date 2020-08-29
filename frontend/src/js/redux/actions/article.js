import * as actionsTypes from "./actionTypes";
import AxiosInstance from "../../../AxiosInstance";

export const sendNewArticleToServerInit = () => {
    return {
        type: actionsTypes.SEND_NEW_ARTICLE_TO_SERVER_INIT
    };
};

export const sendNewArticleToServerSuccess = () => {
    return {
        type: actionsTypes.SEND_NEW_ARTICLE_TO_SERVER_SUCCESS
    };
};

export const sendNewArticleToServerFail = () => {
    return {
        type: actionsTypes.SEND_NEW_ARTICLE_TO_SERVER_FAIL
    };
};

export const sendNewArticleToServer = (articleData, config) => {
    return dispatch => {
        dispatch(sendNewArticleToServerInit());
        AxiosInstance.post("dashboard/create-new-article/", articleData, config)
            .then(response => {
                alert("Article Submitted Successfully");
                dispatch(sendNewArticleToServerSuccess());
            })
            .catch(error => {
                // alert(error.);
                console.log(error.response.data);
                dispatch(sendNewArticleToServerFail());
            });
    };
};