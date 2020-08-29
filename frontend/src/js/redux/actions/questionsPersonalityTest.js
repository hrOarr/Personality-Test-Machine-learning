import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const questionPersonalityTestInit = () => {
    return {
        type: actionTypes.QUESTIONS_PERSONALITY_TEST_INIT
    };
};

export const questionPersonalityTestSuccess = (testResult) => {
    return {
        type: actionTypes.QUESTIONS_PERSONALITY_TEST_SUCCESS,
        testResult: testResult
    };
};

export const questionPersonalityTestFail = (error) => {
    return {
        type: actionTypes.QUESTIONS_PERSONALITY_TEST_FAIL,
        error: error
    };
};

export const questionPersonalityTest = (data, config) => {
    return dispatch => {
        dispatch(questionPersonalityTestInit);
        axios.post("http://127.0.0.1:8000/personality_test/submit_personality_test/", data, config)
            .then(response => {
                dispatch(questionPersonalityTestSuccess(
                	response.data.scores
                ));
            })
            .catch(error => {
                alert("Something Went Wrong... Try Again");
                dispatch(questionPersonalityTestFail(error));
            });
    };
};
