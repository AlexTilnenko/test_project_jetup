import * as t from "../actions/types";

type ProfileStateTypes = {
	savedNews: Array<any>;
};

const initialState: ProfileStateTypes = {
	savedNews: []
};

const profileReducer = (state = initialState, action: t.ProfileActions): ProfileStateTypes => {
	switch (action.type) {
		default:
			return state;
	}
};

export default profileReducer;
