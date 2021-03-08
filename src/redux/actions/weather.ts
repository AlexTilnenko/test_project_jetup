import * as t from "./types";

export const saveCity = (news: any): t.WeatherActions => ({
	type: t.SAVE_CITY,
	payload: news
});

export const removeCity = (id: any): t.WeatherActions => ({
	type: t.REMOVE_CITY,
	payload: id
});
