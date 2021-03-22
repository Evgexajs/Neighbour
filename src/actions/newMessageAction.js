import { ADD_MESSAGE, ERROR } from './actionTypes';
import { DATA } from './Data';

export function addMessageFetchData(text) {
    let newMess = {
        id: DATA.messagesPage.DataMes.length++,
        message: text,
        your: 'true',
    }
    DATA.messagesPage.DataMes.push(newMess)
    return (dispatch) => {
        dispatch({
            type: ADD_MESSAGE,
            newMessage: true
        });
    };
};