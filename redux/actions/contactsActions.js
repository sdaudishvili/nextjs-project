import { SET_CONTACTS, FETCH_CONTACTS, UPDATE_CONTACTS } from '../actionTypes';

export const setContacts = (payload) => {
    return {
        type: SET_CONTACTS,
        payload
    };
};

export const fetchContacts = (payload) => {
    return {
        type: FETCH_CONTACTS,
        payload
    };
};

export const updateContacts = (payload) => {
    return {
        type: UPDATE_CONTACTS,
        payload
    };
};
