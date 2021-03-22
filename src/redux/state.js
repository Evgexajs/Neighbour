const ADD_MESSAGE = "ADD_MESSAGE";

let store = {
    _state: {
        mainPage: {
            DataPosts: [
                { id: 1, img: "https://i.ytimg.com/vi/zk3bSeYDDFE/maxresdefault.jpg", like: 1, comment: 5, share: 5 },
                { id: 2, img: "https://i.ytimg.com/vi/zk3bSeYDDFE/maxresdefault.jpg", like: 3, comment: 2, share: 2 },
            ]
        },
        messagesPage: {
            DataDialog: [
            { id: 1, name: 'Dmitry' },
            { id: 2, name: 'Ivan' },
            { id: 3, name: 'Sasha' },
            { id: 4, name: 'Andrey' },
            ],
            DataMes: [
            { id: 1, message: 'Hi!', your:'false' },
            { id: 2, message: 'Oh hi!', your:'true' },
            { id: 3, message: 'How are you?', your:'false' },
            { id: 4, message: "I'm good, are you?", your:'true' },
            { id: 5, message: 'Thats nice), me too.', your:'false' },
            ]
        },
    },
    _callSubscriber() {
        console.log('kek')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_MESSAGE) {
            let mes = {
                id: this._state.messagesPage.DataMes.length++,
                message: action.newMessage,
                your: 'true',
            };
            this._state.messagesPage.DataMes.push(mes);
            this._callSubscriber(this._state);
        } else {

        }
    }
}

export const newMessageActionCreator = (newMessage) => {
    return {
        type: ADD_MESSAGE,
        newMessage: newMessage
    }
}

export default store;
window.store = store;