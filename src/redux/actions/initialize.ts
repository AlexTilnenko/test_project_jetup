import * as t from "./types";

export const setInitialized = (isInitialized: boolean): t.InitializeActions => ({
	type: t.SET_INITIALIZED,
	payload: isInitialized
});
