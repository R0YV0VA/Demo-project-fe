import ACTIONS from "../constants";

const initialState = {
    login: '',
    password: ''
}

export default function signinReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.SIGNIN:
            return {
                ...state,
                login: action.payload.login,
                password: action.payload.password
            }
        default:
            return state;
    }
}