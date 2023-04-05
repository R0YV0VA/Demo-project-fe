import ACTIONS from "../constants";

const initialState = {
    nickname: '',
    login: '',
    password: ''
}

export default function signupReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.SIGNIN:
            return {
                ...state,
                nickname: action.payload.nickname,
                login: action.payload.login,
                password: action.payload.password
            }
        default:
            return state;
    }
}