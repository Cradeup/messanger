import { createReducer } from '@reduxjs/toolkit'
import { fetchJSON } from '../../fetch-json'
import { CHAT } from '../types'
import { CONTACTS } from '../types'
import { MESSAGES } from '../types'
const initialState = {
    users: [],
    chat: [],
    newMessage:
    {
        message: ''
    },
    contactsWanted: '',
    status: 'waiting',
    companion: {},
}

export default createReducer(initialState, {
    [CHAT.ON_CHAT_INPUT_CHANGE]: (state, action) => {
        let message = action.payload
        state.newMessage = ({ senderId: message.actualUserId, message: message.value, id: message.dialogId })
    },
    [CHAT.ON_CHAT_INPUT_SUBMIT]: (state, action) => {
        let messageId = parseInt(state.chat.messages.length)
        state.chat.messages.push({ senderId: state.newMessage.senderId, message: state.newMessage.message, messageId: messageId })
        fetchJSON('http://localhost:3000/addmessage', {
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
            body: JSON.stringify({ message: state.newMessage.message, id: state.chat.id, actualUserId: state.authReducer.actualUserId })
        })
        state.newMessage = ''
    },
    [CONTACTS.ON_CONTACTS_SEARCH_INPUT_CHANGE]: (state, action) => {
        let wanted = action.payload
        state.contactsWanted = wanted
    },
    [MESSAGES.FETCH_MESSAGES]: (state) => {
        state.status = 'loading'
        if (!state.messages) {
            state.messages = []
            console.log('messages status ' + state.status)
        }
    },
    [MESSAGES.FETCH_MESSAGES_SUCCES]: (state, action) => {
        state.chat = action.payload.messages
        state.companion = action.payload.companion
        state.status = 'loaded'
        console.log('messages status ' + state.status)
    },
    [MESSAGES.FETCH_MESSAGES_FAIL]: (state) => {
        state.status = 'failed'
    }
}
)
