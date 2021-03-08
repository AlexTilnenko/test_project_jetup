import { combineReducers } from "redux";

import login from "./login";
import news from "./news";
import profile from "./profile";
import weather from "./weather";
import initialize from "./initialize";

const rootReducer = combineReducers({
	login,
	news,
	profile,
	weather,
	initialize
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
