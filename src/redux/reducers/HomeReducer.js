import ACTIONS from "../constants";

const initialState = {
    users: [],
}

export default function homeReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}