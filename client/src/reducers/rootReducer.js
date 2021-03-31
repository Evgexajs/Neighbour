import { combineReducers } from 'redux';
import { addMessage } from './newMessage';
import { messagesData } from './messagesData';
import { postData } from './postData';
import { dialogsData } from './dialogsData'
import { registration } from './registration';
import { error } from './error'
import { login } from './log';

export default combineReducers({
    dialogsData: dialogsData,
    addMessage: addMessage,
    postData: postData,
    messagesData: messagesData,
    registration: registration,
    error: error,
    login: login
});