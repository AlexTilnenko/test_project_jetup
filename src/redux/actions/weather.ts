import * as t from "./types";

export const saveCity = (text: string): t.WeatherActions => ({
	type: t.SAVE_CITY,
	payload: text
});

export const removeCity = (id: string): t.WeatherActions => ({
	type: t.REMOVE_CITY,
	payload: id
});

export const getWeather = (term: string): t.WeatherActions => ({
	type: t.GET_WEATHER,
	payload: term
});

export const setWeather = (data: { [k: string]: any }): t.WeatherActions => ({
	type: t.SET_WEATHER,
	payload: data
});

export const setCurrentCity = (term: string): t.WeatherActions => ({
	type: t.SET_CURRENT_CITY,
	payload: term
});
