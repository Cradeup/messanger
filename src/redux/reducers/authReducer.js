import { createReducer } from '@reduxjs/toolkit'
import { fetchJSON } from '../../fetch-json'
import { AUTH } from '../types'
const initialState = {
    status: 'waiting',
    login: '',
    password: '',
    actualUserId: null,
}

export default createReducer(initialState, {
    [AUTH.ON_INPUT_CHANGE]: (state, action) => {
        state.login = action.payload.login
        state.password = action.payload.password
        console.log(state.login + state.password)
    },
    [AUTH.FETCH_AUTH_DATA]: (state, action) => {
        state.status = 'loading'
    },
    [AUTH.FETCH_AUTH_DATA_SUCCESS]: (state, action) => {
        state.status = 'loaded'
        state.actualUserId = action.payload.actualUserId
        console.log(state.actualUserId)
    },
    [AUTH.FETCH_AUTH_DATA_FAIL]: (state, action) => {
        state.status = 'fail'

    },
    [AUTH.SET_WAITING_STATUS]: (state) => {
        state.status = 'waiting'
        console.log(state.status)
    },

})