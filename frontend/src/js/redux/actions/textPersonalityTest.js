import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const textPersonalityTestInit = () => {
    return {
        type: actionTypes.TEXT_PERSONALITY_TEST_INIT
    };
};

export const textPersonalityTestSuccess = (testResult) => {
    return {
        type: actionTypes.TEXT_PERSONALITY_TEST_SUCCESS,
        testResult: testResult
    };
};

export const textPersonalityTestFail = (error) => {
    return {
        type: actionTypes.TEXT_PERSONALITY_TEST_FAIL,
        error: error
    };
};

export const textPersonalityTest = (data, config) => {
    return dispatch => {
        dispatch(textPersonalityTestInit);
        axios.post("http://127.0.0.1:8000/personality_from_text/submit_personality_test/", data, config)
            .then(response => {
                dispatch(textPersonalityTestSuccess(
                	response.data
                ));
            })
            .catch(error => {
                alert("Something Went Wrong... Try Again");
                dispatch(textPersonalityTestFail(error));
            });
    };
};
