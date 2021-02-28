import { combineReducers } from 'redux';
import chatReducer from './chatReducer'
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    chatReducer: chatReducer,
    usersReducer: usersReducer,
    dialogsReducer: dialogsReducer,
})