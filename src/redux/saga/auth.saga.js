import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from '../ActionType'
import { LoginAPI, ResetPasswordAPI, SingupAPI } from '../../common/apis/auth.api'
import { setAlert } from '../action/alert.action'
import { loggedInUser } from '../action/auth.action'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* singupUser(action) {
    try {
        const user = yield call(SingupAPI, action.payload)
        yield put(setAlert({text:user.message, color:'success'}))
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
        yield put(setAlert({text:e.message, color:'error'}))
    }
}

function* loginUser(action) {
    try {
        const user = yield call(LoginAPI, action.payload.data)
        yield put(loggedInUser(user.user))
        action.payload.callback("/");
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}
function* restePasswordUser(action) {
    try {
        const user = yield call(ResetPasswordAPI, action.payload)
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}


// watcher
function* singupSaga() {
    yield takeEvery(ActionTypes.SIGNUP_USER, singupUser)
}

function* loginSaga () {
    yield takeEvery(ActionTypes.LOGIN_uSER, loginUser)
}
function* resetPasswordSaga () {
    yield takeEvery(ActionTypes.RESETPASSWORD_USER, restePasswordUser)
}

export default function* authSaga() {
    yield all([
        singupSaga(),
        loginSaga(),
        resetPasswordSaga()
    ])
} 
