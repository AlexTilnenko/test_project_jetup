import { combineReducers } from "redux";

import login from "./login";
import news from "./news";
import profile from "./profile";
import weather from "./weather";

const rootReducer = combineReducers({
	login,
	news,
	profile,
	weather
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
