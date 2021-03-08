import * as t from "./types";

export const saveNews = (news: any): t.ProfileActions => ({
	type: t.SAVE_NEWS,
	payload: news
});

export const removeNews = (id: any): t.ProfileActions => ({
	type: t.REMOVE_NEWS,
	payload: id
});
