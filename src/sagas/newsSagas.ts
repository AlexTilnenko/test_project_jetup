import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as t from "../redux/actions/types";
import { setNews } from "../redux/actions/news";
import { fetchNews } from "../api/newsAPI";

function* onFetchNews({ payload }: t.GetNewsAction) {
	const { articles } = yield call(fetchNews, payload);
	yield put(setNews(articles));
}

function* watchOnFetchNews() {
	yield takeEvery(t.GET_NEWS, onFetchNews);
}

export default function* NewsSaga() {
	yield all([fork(watchOnFetchNews)]);
}
