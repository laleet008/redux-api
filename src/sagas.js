import { call, put, takeEvery } from "redux-saga/effects";
import { GET_APPLICATIONS_FULLY, GET_APPLICATIONS } from "./actions";

function applicationsFetch() {
  return fetch("https://admin.naxa.com.np/api/services").then((res) =>
    res.json()
  );
}

function* workGetApplicationsFetch() {
  const applications = yield call(applicationsFetch);
  yield put({ type: GET_APPLICATIONS_FULLY, applications });
}

function* dataSaga() {
  yield takeEvery(GET_APPLICATIONS, workGetApplicationsFetch);
}

export default dataSaga;
