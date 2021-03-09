import { all, fork } from "redux-saga/effects";
import newsSagas from "./newsSagas";

export default function* rootSaga() {
	yield all([fork(newsSagas)]);
}
