import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { signup, loading } from '../actions';
import axios from 'axios';
import routes from '../../routes';

const ServerApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });


const signupRequest = (credentials) => {
    return new Promise((resolve, reject) => {
        ServerApi.post('/signup', {
            nickname: credentials.nickname,
            login: credentials.login,
            password: credentials.password
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                resolve(error.response);
            })
    })
}

function* signupWorker(cred) {
    const payload = {
        nickname: cred.payload.nickname,
        login: cred.payload.login,
        password: cred.payload.password
    }
    yield put(loading(true));
    const state = yield signup(payload);
    const credentials = state.payload;
    const response = yield call(signupRequest, credentials);
    if (response.status === 200) {
        yield put(loading(false));
        window.location.href = routes.login;
    } else {
        yield put(loading(false));
        alert(response.data.title);
    }
}

export default function* signupWatcher() {
    yield takeEvery(ACTIONS.SIGNUP_ASYNC, signupWorker);
}