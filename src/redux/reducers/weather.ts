import * as t from "../actions/types";

type WeatherStateTypes = {
	currentCity: string;
	citesList: Array<string>;
};

const initialState: WeatherStateTypes = {
	currentCity: "Khmelnitsky",
	citesList: []
};

const loginReducer = (state = initialState, action: t.LoginActions): WeatherStateTypes => {
	switch (action.type) {
		default:
			return state;
	}
};

export default loginReducer;
