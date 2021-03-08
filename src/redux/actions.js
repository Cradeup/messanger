import { fetchJSON } from "../fetch-json";
import { CHAT } from "./types";
import { CONTACTS } from "./types";
import { USERS } from "./types";
import { DIALOGS } from "./types";
import { MESSAGES } from "./types";
import { AUTH } from "./types";

export function onChatInputChangeReducer(message) {
    return {
        type: CHAT.ON_CHAT_INPUT_CHANGE,
        payload: message
    }
}

export function onChatINputSubmit(dialogId) {
    return {
        type: CHAT.ON_CHAT_INPUT_SUBMIT,
        payload: dialogId
    }
}

export function onContactsSearchInputChange(wanted) {
    return {
        type: CONTACTS.ON_CONTACTS_SEARCH_INPUT_CHANGE,
        payload: wanted
    }
}

export const fetchUsers = () => dispatch => {
    dispatch({
        type: USERS.FETCH_USERS
    });
    fetchJSON('http://localhost:3000/users', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify()
    })
        .then(usersFetchSucces(dispatch))
        .catch(usersFetchFail(dispatch));
}

export const usersFetchSucces = dispatch => users => {
    dispatch({
        type: USERS.FETCH_USERS_SUCCES,
        payload: users
    })
}

export const usersFetchFail = dispatch => () => {
    dispatch({
        type: USERS.FETCH_USERS_FAIL
    })
}

export const fetchDialogs = actualUserId => dispatch => {
    dispatch({
        type: DIALOGS.FETCH_DIALOGS
    });
    fetchJSON('http://localhost:3000/dialogs', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({actualUserId})
    })
        .then(dialogsFetchSucces(dispatch))
        .catch(dialogsFetchFail(dispatch));
}

export const dialogsFetchSucces = dispatch => dialogs => {
    dispatch({
        type: DIALOGS.FETCH_DIALOGS_SUCCES,
        payload: dialogs
    })
}

export const dialogsFetchFail = dispatch => () => {
    dispatch({
        type: DIALOGS.FETCH_DIALOGS_FAIL
    })
}

export const fetchMessages = data => dispatch => {
    dispatch({
        type: MESSAGES.FETCH_MESSAGES
    });
    fetchJSON('http://localhost:3000/messages', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data)
    })
        .then(messageFetchSucces(dispatch))
        .catch(messagesFetchFail(dispatch));
}

export const messageFetchSucces = dispatch => messages => {
    dispatch({
        type: MESSAGES.FETCH_MESSAGES_SUCCES,
        payload: messages
    })
}

export const messagesFetchFail = dispatch => () => {
    dispatch({
        type: MESSAGES.FETCH_MESSAGES_FAIL
    })
}

export function onAuthInputChangeReducer(loginPassword) {
    return {
        type: AUTH.ON_INPUT_CHANGE,
        payload: loginPassword
    }
}

export const fetchAuthData = loginPassword => dispatch => {
    fetchJSON('http://localhost:3000/auth', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(loginPassword)
    })
        .then(authDataFetchSucces(dispatch))
        .catch(authDataFetchFail(dispatch));
}

export const authDataFetchSucces = dispatch => actualUserId => {
    dispatch({
        type: AUTH.FETCH_AUTH_DATA_SUCCESS,
        payload: actualUserId
    })
}

export const authDataFetchFail = dispatch => {
    dispatch({
        type: AUTH.FETCH_AUTH_DATA_FAIL
    })
}

export function setDialogsFetchStatusToWaiting() {
    return {
        type: DIALOGS.SET_WAITING_STATUS
    }
}

export function setAuthFetchStatusToWaiting() {
    return {
        type: DIALOGS.SET_WAITING_STATUS
    }
}

