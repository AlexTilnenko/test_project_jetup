import * as t from "./types";

export const setNews = (news: Array<any>): t.NewsActions => ({
	type: t.SET_NEWS,
	payload: news
});

export const getNews = (term: string): t.NewsActions => ({
	type: t.GET_NEWS,
	payload: term
});
