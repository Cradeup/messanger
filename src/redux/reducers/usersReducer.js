import { createReducer } from '@reduxjs/toolkit'
import { USERS } from '../types'
const initialState = {
    status: 'waiting',
    users: null
}

export default createReducer(initialState, {
    [USERS.FETCH_USERS]: (state) => {
        state.status = 'loading'
        if (!state.users) {
            state.users = []
        }
    },
    [USERS.FETCH_SUCCES]: (state, action) => {
        state.status = 'loaded'
        
    }
}) 