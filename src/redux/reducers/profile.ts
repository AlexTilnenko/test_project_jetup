import * as t from "../actions/types";

type ProfileStateTypes = {
	savedNews: Array<any>;
};

const initialState: ProfileStateTypes = {
	savedNews: []
};

const profileReducer = (state = initialState, action: t.ProfileActions): ProfileStateTypes => {
	switch (action.type) {
		case t.SAVE_NEWS:
			return {
				...state,
				savedNews: [...state.savedNews, action.payload]
			};
		case t.REMOVE_NEWS:
			const newSavedNews = state.savedNews.filter((item) => item.url !== action.payload);
			return {
				...state,
				savedNews: [...newSavedNews]
			};
		default:
			return state;
	}
};

export default profileReducer;
