import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "./utility";

const initialState = {
    testResult: null,
    loading: false,
    error: null
};

const textPersonalityTestInit = (state, action) => {
    return updateObject(state, {
        testResult: null,
        loading: true,
        error: null
    });
};

const textPersonalityTestSuccess = (state, action) => {
    return updateObject(state, {
    	testResult: action.testResult,
        loading: false,
        error: null
    });
};

const textPersonalityTestFail = (state, action) => {
    return updateObject(state, {
    	testResult: null,
        loading: false,
        error: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.TEXT_PERSONALITY_TEST_INIT:
            return textPersonalityTestInit(state, action);
        case actionTypes.TEXT_PERSONALITY_TEST_SUCCESS:
            return textPersonalityTestSuccess(state, action);
        case actionTypes.TEXT_PERSONALITY_TEST_FAIL:
            return textPersonalityTestFail(state, action);

        default:
            return state;
    }
};

export default reducer;