import { LOGIN } from "../actions/actionTypes";

export function login (state = [], action) {
    switch (action.type) {
        case LOGIN:
            return action.log;
        default:
            return state;
    }
}
