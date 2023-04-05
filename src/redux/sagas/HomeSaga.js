import { put, takeEvery, call } from 'redux-saga/effects';
import ACTIONS from '../constants';
import { setUsers, loading } from '../actions';
import axios from 'axios';
import Cookies from 'universal-cookie'

const cookies = new Cookies();
const ServerApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    });

const setUsersRequest = () => {
    return new Promise((resolve, reject) => {
        ServerApi.get('/users', {
            headers: {
              'Authorization': `Bearer ${cookies.get('token')}`
            }
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                resolve(error.response);
            })
    })
}

const setUsersFilterRequest = (params) => {
    return new Promise((resolve, reject) => {
        ServerApi.post('/users/filter', {
            id: params.id === '' ? 0 : parseInt(params.id),
            nickname: params.id === '' ? '' : params.nickname,
            login: params.login === '' ? '' : params.login,
            password: params.password === '' ? '' : params.password
        },
        {
            headers: {
                'Authorization': `Bearer ${cookies.get('token')}`
            }
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                resolve(error.response);
            })
    })
}

function* setUsersWorker() {
    yield put(loading(true));
    const response = yield call(setUsersRequest);
    if (response.status === 200) {
        yield put(setUsers(response.data));
        yield put(loading(false));
    } else {
        yield put(loading(false));
        alert(response.data.title);
    }
}

function* setUsersFilterWorker(params) {
    yield put(loading(true));
    console.log(params.payload.id);
    const response = yield call(setUsersFilterRequest, params.payload);
    if (response.status === 200) {
        yield put(setUsers(response.data));
        yield put(loading(false));
    } else {
        yield put(loading(false));
        alert(response.data.title);
    }
}

export default function* homeWatcher() {
    yield takeEvery(ACTIONS.SET_USERS_ASYNC, setUsersWorker);
    yield takeEvery(ACTIONS.SET_USERS_FILTER, setUsersFilterWorker);
}