import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { saveCity } from "./../redux/actions/weather";
import * as t from "../redux/actions/types";
import { setWeather } from "../redux/actions/weather";
import { getData } from "../api/services";

const weatherApibase: string = "https://api.openweathermap.org/data/2.5/weather?q=";
const weatherApikey: string = "appid=1827c03858478a35143b7d58794e8c59";

function* onFetchWeather({ payload }: t.GetWeatherAction) {
	const { name, id, weather, main, wind } = yield call(
		getData,
		payload,
		weatherApibase,
		weatherApikey
	);
	if (id !== undefined) {
		yield put(saveCity(payload));
	}
	yield put(setWeather({ name, id, weather, main, wind }));
}

function* watchOnFetchWeather() {
	yield takeEvery(t.GET_WEATHER, onFetchWeather);
}

export default function* WeatherSaga() {
	yield all([fork(watchOnFetchWeather)]);
}
