import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "./utility";

const initialState = {
    testResult: null,
    loading: false,
    error: null
};

const questionPersonalityTestInit = (state, action) => {
    return updateObject(state, {
        testResult: null,
        loading: true,
        error: null
    });
};

const questionPersonalityTestSuccess = (state, action) => {
    return updateObject(state, {
    	   testResult: action.testResult,
        loading: false,
        error: null
    });
};

const questionPersonalityTestFail = (state, action) => {
    return updateObject(state, {
    	   testResult: null,
        loading: false,
        error: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.QUESTIONS_PERSONALITY_TEST_INIT:
            return questionPersonalityTestInit(state, action);
        case actionTypes.QUESTIONS_PERSONALITY_TEST_SUCCESS:
            return questionPersonalityTestSuccess(state, action);
        case actionTypes.QUESTIONS_PERSONALITY_TEST_FAIL:
            return questionPersonalityTestFail(state, action);

        default:
            return state;
    }
};

export default reducer;