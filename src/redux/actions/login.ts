import * as t from "./types";

export const setToken = (isAuthorized: boolean): t.LoginActions => ({
	type: t.SET_TOKEN,
	payload: isAuthorized
});
