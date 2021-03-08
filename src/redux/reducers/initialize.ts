import * as t from "../actions/types";

type InitializeStateTypes = {
	isInitialized: boolean;
};

const initialState: InitializeStateTypes = {
	isInitialized: false
};

const initializeReducer = (
	state = initialState,
	action: t.InitializeActions
): InitializeStateTypes => {
	switch (action.type) {
		case t.SET_INITIALIZED:
			return {
				isInitialized: action.payload
			};
		default:
			return state;
	}
};

export default initializeReducer;
