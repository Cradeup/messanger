import { createReducer } from '@reduxjs/toolkit'
import { CHAT } from '../types'
import { CONTACTS } from '../types'
import { MESSAGES } from '../types'

let currentId = localStorage.getItem('id') ?? 'id0'
const initialState = {
    actualUserId: currentId,
    users: [
        {
            id: 'id0',
            nickName: 'maks007',
            firstName: 'Максим',
            secondName: 'Егоров',
            profileImage: 'https://o-prirode.ru/wp-content/uploads/2019/03/loshad.jpg'
        },
        {
            id: 'id1',
            nickName: '2012Alik',
            firstName: 'Алишер',
            secondName: 'Усманов',
            profileImage: 'https://semena-partner.ru/upload/medialibrary/58a/58aa92914062bc07b09986bf8343bb18.jpg'
        },
        {
            id: 'id2',
            nickName: 'knightofnight',
            firstName: 'Степан',
            secondName: 'Маришин',
            profileImage: 'https://www.anti-malware.ru/files/styles/imagesize400w/public/images/source/snimok_ekrana_2019-02-12_v_10.10.34.png?itok=msSLV76G'
        },
    ],
    chat: [],
    newMessage:
    {
        message: ''
    },
    contactsWanted: '',
    status: 'waiting',
}

export default createReducer(initialState, {
    [CHAT.ON_CHAT_INPUT_CHANGE]: (state, action) => {
        let message = action.payload
        state.newMessage = ({ senderId: message.actualUserId, message: message.value, id: message.dialogId })
    },
    [CHAT.ON_CHAT_INPUT_SUBMIT]: (state, action) => {
        let messageId = parseInt(state.chat.find(chat => chat.id === action.payload).messages[state.chat.find(chat => chat.id === action.payload).messages.length - 1].messageId) + 1
        state.chat.find(chat => chat.id === action.payload).messages.push({ senderId: state.newMessage.senderId, message: state.newMessage.message, messageId: messageId })
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
        state.chat = action.payload
        state.status = 'loaded'
        console.log('messages status ' + state.status)
        console.log(state.chat)
    },
    [MESSAGES.FETCH_MESSAGES_FAIL]: (state) => {
        state.status = 'failed'
    }
}
)
