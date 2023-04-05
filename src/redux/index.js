import { createStore, combineReducers, applyMiddleware } from 'redux';
import signinReducer from './reducers/SignInReducer';
import loadingReducer from './reducers/LoadingReducer';
import homeReducer from './reducers/HomeReducer';
import signupReducer from './reducers/SignUpReducer';
import createSagaMiddleware from 'redux-saga';
import rootWatcher from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    signin: signinReducer,
    loading: loadingReducer,
    home: homeReducer,
    signup: signupReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);

export default store;