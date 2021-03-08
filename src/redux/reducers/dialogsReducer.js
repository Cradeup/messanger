import { createReducer } from '@reduxjs/toolkit'
import { DIALOGS } from '../types'
const initialState = {
    status: 'waiting',
    dialogs: null,
    actualUser: null,
}

export default createReducer(initialState, {
    [DIALOGS.FETCH_DIALOGS]: (state) => {
        state.status = 'loading'
        if (!state.dialogs) {
            state.dialogs = []
            console.log('dialogs status' + state.status)
        }
    },
    [DIALOGS.FETCH_DIALOGS_SUCCES]: (state, action) => {
        state.dialogs = action.payload.assembledDialogs
        state.actualUser = action.payload.actualUser
        state.status = 'loaded'
        console.log('dialogs status' + state.status)
    },
    [DIALOGS.FETCH_DIALOGS_FAIL]: (state) => {
        state.status = 'failed'
    },
    [DIALOGS.SET_WAITING_STATUS]: (state) => {
        state.status = 'waiting'
        console.log(state.status)
    },
})