import { IArticle } from "../redux/reducers/news";

const _apibase: string = "https://newsapi.org/v2/everything?";
const _APIKEY: string = "86f3eddc98f54d778f7ab8e0fd642815";

interface INewsResponse {
	status: string;
	totalResults: number;
	articles: Array<IArticle>;
}

export const fetchNews = async (term: string): Promise<INewsResponse> => {
	const url = `${_apibase}q=${term}&apiKey=${_APIKEY}`;
	const req = new Request(url);
	return await fetch(req).then((resp) => resp.json());
};
