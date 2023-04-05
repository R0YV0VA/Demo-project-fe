import ACTIONS from "./constants";

export const signin = (credentials) => {
    return {
        type: ACTIONS.SIGNIN,
        payload: {
            login: credentials.login,
            password: credentials.password
        }
    }
}

export const signinAsync = (credentials) => {
    return {
        type: ACTIONS.SIGNIN_ASYNC,
        payload: {
            login: credentials.login,
            password: credentials.password
        }
    }
}

export const loading = (isLoading) => {
    return {
        type: ACTIONS.LOADING,
        payload: {
            isLoading
        }
    }
}

export const setUsers = (users) => {
    return {
        type: ACTIONS.SET_USERS,
        payload: {
            ...users
        }
    }
}

export const setUsersAsync = () => {
    return {
        type: ACTIONS.SET_USERS_ASYNC
    }
}

export const setUsersFilterAsync = (params) => {
    return {
        type: ACTIONS.SET_USERS_FILTER,
        payload: {
            ...params
        }
    }
}

export const signup = (credentials) => {
    return {
        type: ACTIONS.SIGNUP,
        payload: {
            nickname: credentials.nickname,
            login: credentials.login,
            password: credentials.password
        }
    }
}

export const signupAsync = (credentials) => {
    return {
        type: ACTIONS.SIGNUP_ASYNC,
        payload: {
            nickname: credentials.nickname,
            login: credentials.login,
            password: credentials.password
        }
    }
}