import { all } from "redux-saga/effects";
import newsSagas from "./newsSagas";
import weatherSagas from "./weatherSagas";

export default function* rootSaga() {
	yield all([newsSagas(), weatherSagas()]);
}
