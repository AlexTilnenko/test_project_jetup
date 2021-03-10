import * as t from "../actions/types";

type WeatherStateTypes = {
	currentCity: string;
	citiesList: Array<string>;
	weatherData: any;
};

const initialState: WeatherStateTypes = {
	currentCity: "Kherson",
	citiesList: [],
	weatherData: null
};

const loginReducer = (state = initialState, action: t.WeatherActions): WeatherStateTypes => {
	switch (action.type) {
		case t.SET_WEATHER:
			return {
				...state,
				weatherData: { ...action.payload }
			};

		case t.SET_CURRENT_CITY:
			return {
				...state,
				currentCity: action.payload
			};

		case t.SAVE_CITY:
			const exist = state.citiesList.includes(action.payload);
			return {
				...state,
				citiesList: !exist ? [...state.citiesList, action.payload] : [...state.citiesList]
			};
		case t.REMOVE_CITY:
			const newCitiesList = state.citiesList.filter((item) => item !== action.payload);
			return {
				...state,
				citiesList: newCitiesList,
				currentCity: newCitiesList.length > 0 ? newCitiesList[0] : ""
			};
		default:
			return state;
	}
};

export default loginReducer;
