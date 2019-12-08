// takelatest is whenever dispatch is called it will
//take the latest event or action
// takevery will take every action
// put is like dispatch of reducer
import types from "./Constant";
import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

// the watcher function is a generator function
// we cannot add  * for arrow functions

const watcher = function*() {
  // in generator we will make use of  yield
  // we have to take latest action so going to
  //use takelatest and it will call a function

  yield takeLatest(types.TOTAL, callBacker);
};

const callBacker = function*() {
  // the below statement returns an object when called
  const value = yield axios.get("https://reqres.in/api/users?page=2");
  //for saga calling functions yeid must be used
  yield put({ type: types.DATA, payload: value.data });
};
export default watcher;
