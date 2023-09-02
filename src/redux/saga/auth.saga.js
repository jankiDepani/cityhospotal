import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as ActionTypes from '../ActionType'
import { SingupAPI } from '../../common/apis/auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* singupUser(action) {
    try {
        const user = yield call(SingupAPI, action.payload)
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

// watcher
function* singupSaga() {
    yield takeEvery(ActionTypes.SIGNUP_USER, singupUser)
}

export default function* authSaga() {
    yield all([
        singupSaga()
    ])
} 
