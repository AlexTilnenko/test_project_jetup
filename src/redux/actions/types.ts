export const SET_TOKEN = "login/SET_TOKEN";
type SetTokenAction = {
	type: typeof SET_TOKEN;
	payload: boolean;
};

export type LoginActions = SetTokenAction;

export const GET_NEWS = "news/GET_NEWS";
export type GetNewsAction = {
	type: typeof GET_NEWS;
	payload: string;
};
export const SET_NEWS = "news/SET_NEWS";
type SetNewsAction = {
	type: typeof SET_NEWS;
	payload: Array<any>;
};

export type NewsActions = SetNewsAction | GetNewsAction;

export const SAVE_NEWS = "profile/SAVE_NEWS";
type SaveNewsAction = {
	type: typeof SAVE_NEWS;
	payload: any;
};
export const REMOVE_NEWS = "profile/REMOVE_NEWS";
type RemoveNewsAction = {
	type: typeof REMOVE_NEWS;
	payload: string;
};

export type ProfileActions = SaveNewsAction | RemoveNewsAction;

export const SAVE_CITY = "weather/SAVE_CITY";
type SaveCityAction = {
	type: typeof SAVE_CITY;
	payload: string;
};
export const REMOVE_CITY = "weather/REMOVE_CITY";
type RemoveCityAction = {
	type: typeof REMOVE_CITY;
	payload: string;
};
export const GET_WEATHER = "weather/GET_WEATHER";
export type GetWeatherAction = {
	type: typeof GET_WEATHER;
	payload: string;
};
export const SET_WEATHER = "weather/SET_WEATHER";
type SetWeatherAction = {
	type: typeof SET_WEATHER;
	payload: { [k: string]: any };
};
export const SET_CURRENT_CITY = "weather/SET_CURRENT_CITY";
export type SetCurrentCityAction = {
	type: typeof SET_CURRENT_CITY;
	payload: string;
};
export type WeatherActions =
	| SaveCityAction
	| RemoveCityAction
	| GetWeatherAction
	| SetWeatherAction
	| SetCurrentCityAction;

export const SET_INITIALIZED = "initialize/SET_INITIALIZED";
type SetInitializedAction = {
	type: typeof SET_INITIALIZED;
	payload: boolean;
};

export type InitializeActions = SetInitializedAction;
