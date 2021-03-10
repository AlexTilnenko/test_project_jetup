import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as t from "../redux/actions/types";
import { setNews } from "../redux/actions/news";
import { getData } from "../api/services";

const newsApibase: string = "https://newsapi.org/v2/everything?q=";
const newsApikey: string = "apiKey=86f3eddc98f54d778f7ab8e0fd642815";

function* onFetchNews({ payload }: t.GetNewsAction) {
	const { articles } = yield call(getData, payload, newsApibase, newsApikey);
	yield put(setNews(articles));
}

function* watchOnFetchNews() {
	yield takeEvery(t.GET_NEWS, onFetchNews);
}

export default function* NewsSaga() {
	yield all([fork(watchOnFetchNews)]);
}
