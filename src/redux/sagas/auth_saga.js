import { all, takeEvery, put, fork } from "redux-saga/effects"
import { push } from "redux-first-history"

import * as actionTypes from "../actions/actionTypes"
import * as actions from "../actions/index"
import * as API from "../api"
import { toast } from "react-toastify"

export function* login() {
  yield takeEvery(actionTypes.REQUEST_LOGIN, function* (action) {
    yield put(actions.loading(true))

    try {
      const response = yield API.login(action.data)

      if (response.data.access_token) {
        yield put(actions.loginSuccess(response.data))
        yield put(push("/"))
      } else {
        alert("Warning: Fail to login. " + response.data.message)
        yield put(actions.loginFail())
      }
      yield put(actions.loading(false))
    } catch (error) {
      if (error.status === 422) yield put(actions.loginFail(error.data))
      else if (
        error.status === 400 ||
        error.status === 403 ||
        error.status === 401
      ) {
        yield put(actions.loginFail({ message: error.data.message }))
        toast.error(`Error: ${error.data.message}`)
      } else if (error.status === 404) {
        yield put(actions.loginFail({ message: error.data.message }))
        toast.error(`Error: ${error.data.message}`)
      } else yield put(actions.loginFail())
      yield put(actions.loading(false))
    }
  })
}

export function* logout() {
  yield takeEvery(actionTypes.REQUEST_LOGOUT, function* () {
    yield put(actions.loading(true))

    try {
      const response = yield API.logout()

      if (response.status === 200) {
        yield put(actions.logoutSuccess())
        yield put(push("/"))
      } else {
        alert("Warning: Fail to logout. " + response.data.message)
        yield put(actions.logoutFail())
      }
      yield put(actions.loading(false))
    } catch (error) {
      yield put(actions.logoutFail())
      yield put(actions.loading(false))
    }
  })
}

export default function* authSaga() {
  yield all([fork(login), fork(logout)])
}
