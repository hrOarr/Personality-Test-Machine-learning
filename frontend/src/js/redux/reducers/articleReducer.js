import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "./utility";

const initialState = {
	loading: false,
	articleList: []
};

const sendNewArticleToServerInit = (state, action) => {
    return updateObject(state, { loading: true, articleList: null });
};

const sendNewArticleToServerSuccess = (state, action) => {
    return updateObject(state, { loading: false, articleList: null });
};

const sendNewArticleToServerFail = (state, action) => {
    return updateObject(state, { loading: false, articleList: null });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEND_NEW_ARTICLE_TO_SERVER_INIT:
            return sendNewArticleToServerInit(state, action);
        case actionTypes.SEND_NEW_ARTICLE_TO_SERVER_SUCCESS:
            return sendNewArticleToServerSuccess(state, action);
        case actionTypes.SEND_NEW_ARTICLE_TO_SERVER_FAIL:
            return sendNewArticleToServerFail(state, action);
        default:
            return state;
    }
};

export default reducer;