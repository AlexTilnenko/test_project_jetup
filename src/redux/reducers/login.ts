import * as t from "../actions/types";

type LoginStateTypes = {
	jwtToken: boolean;
};

const initialState: LoginStateTypes = {
	jwtToken: false
};

const loginReducer = (state = initialState, action: t.LoginActions): LoginStateTypes => {
	switch (action.type) {
		case t.SET_TOKEN:
			return {
				jwtToken: action.payload
			};
		default:
			return state;
	}
};

export default loginReducer;
