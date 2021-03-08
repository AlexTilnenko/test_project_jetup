import * as t from "./types";

export const setNews = (news: Array<any>): t.NewsActions => ({
	type: t.SET_NEWS,
	payload: news
});
