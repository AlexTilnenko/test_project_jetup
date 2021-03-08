export const SET_TOKEN = "login/SET_TOKEN";
type SetTokenAction = {
	type: typeof SET_TOKEN;
	payload: boolean;
};

export type LoginActions = SetTokenAction;

export const SET_NEWS = "news/SET_NEWS";
type SetNewsAction = {
	type: typeof SET_NEWS;
	payload: Array<any>;
};

export type NewsActions = SetNewsAction;

export const SAVE_NEWS = "profile/SAVE_NEWS";
type SaveNewsAction = {
	type: typeof SAVE_NEWS;
	payload: any;
};
export const REMOVE_NEWS = "profile/REMOVE_NEWS";
type RemoveNewsAction = {
	type: typeof REMOVE_NEWS;
	payload: any;
};

export type ProfileActions = SaveNewsAction | RemoveNewsAction;

export const SAVE_CITY = "weather/SAVE_CITY";
type SaveCityAction = {
	type: typeof SAVE_CITY;
	payload: any;
};
export const REMOVE_CITY = "weather/REMOVE_CITY";
type RemoveCityAction = {
	type: typeof REMOVE_CITY;
	payload: any;
};

export type WeatherActions = SaveCityAction | RemoveCityAction;

export const SET_INITIALIZED = "initialize/SET_INITIALIZED";
type SetInitializedAction = {
	type: typeof SET_INITIALIZED;
	payload: boolean;
};

export type InitializeActions = SetInitializedAction;
