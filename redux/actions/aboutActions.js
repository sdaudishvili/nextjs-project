import { SET_ABOUT, FETCH_ABOUT, UPDATE_ABOUT } from '../actionTypes';

export const setAbout = (payload) => {
    return {
        type: SET_ABOUT,
        payload
    };
};

export const fetchAbout = (payload) => {
    return {
        type: FETCH_ABOUT,
        payload
    };
};

export const updateAbout = (payload) => {
    return {
        type: UPDATE_ABOUT,
        payload
    };
};
