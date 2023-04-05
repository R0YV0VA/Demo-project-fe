import { all } from "redux-saga/effects";
import signinWatcher from "./SignInSaga";
import signupWatcher from "./SignUpSaga";
import homeWatcher from "./HomeSaga";

export default function* rootWatcher() {
    yield all([
        signinWatcher(),
        homeWatcher(),
        signupWatcher(),
    ])
}