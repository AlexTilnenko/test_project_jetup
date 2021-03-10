export const getData = async (term: string, Apibase: string, Apikey: string): Promise<any> => {
	const url = `${Apibase}${term}&${Apikey}`;
	const req = new Request(url);
	return await fetch(req).then((resp) => resp.json());
};
