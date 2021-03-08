import * as t from "../actions/types";

type NewsStateTypes = {
	news: Array<any>;
};

const initialState: NewsStateTypes = {
	news: []
};

const newsReducer = (state = initialState, action: t.NewsActions): NewsStateTypes => {
	switch (action.type) {
		default:
			return state;
	}
};

export default newsReducer;
