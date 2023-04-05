import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { signin, loading } from '../actions';
import axios from 'axios';
import Cookies from 'universal-cookie'
import routes from '../../routes';

const cookies = new Cookies();
const ServerApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

const signinRequest = (credentials) => {
    return new Promise((resolve, reject) => {
        ServerApi.post('signin', {
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

const setCookie = (token) => {
    return new Promise((resolve, reject) => {
        cookies.set('token', token, { path: '/' });
        resolve();
    })
}

function* signinWorker(cred) {
    const payload = {
        login: cred.payload.login,
        password: cred.payload.password
    }
    yield put(loading(true));
    const state = yield signin(payload);
    const credentials = state.payload;
    const response = yield call(signinRequest, credentials);
    if (response.status === 200) {
        yield call(setCookie, response.data);
        yield put(loading(false));
        window.location.href = routes.home;
    } else {
        yield put(loading(false));
        alert(response.data.title);
    }
}

export default function* signinWatcher() {
    yield takeEvery(ACTIONS.SIGNIN_ASYNC, signinWorker);
}