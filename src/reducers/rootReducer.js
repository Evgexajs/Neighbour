import { combineReducers } from 'redux';
import { addMessage } from './newMessage';
import { messagesData } from './messagesData';
import { postData } from './postData';
import { dialogsData } from './dialogsData'

export default combineReducers({
    dialogsData: dialogsData,
    addMessage: addMessage,
    postData: postData,
    messagesData: messagesData,
});