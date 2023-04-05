import ACTIONS from "../constants";

const initialState = {
    isLoading: false
}

export default function loadingReducer (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        default:
            return state;
    }
}