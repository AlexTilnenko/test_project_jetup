import * as t from "../actions/types";

export interface IArticle {
	author: string;
	content: string;
	description: string;
	publishedAt: string;
	source: { id: string; name: string };
	title: string;
	url: string;
	urlToImage: string;
}

interface INewsState {
	news: Array<IArticle>;
	isLoaded: boolean;
}

const initialState: INewsState = {
	news: [],
	isLoaded: false
};

const newsReducer = (state = initialState, action: t.NewsActions): INewsState => {
	switch (action.type) {
		case t.SET_NEWS:
			return {
				...state,
				news: action.payload ? [...action.payload] : [],
				isLoaded: true
			};
		default:
			return state;
	}
};

export default newsReducer;
