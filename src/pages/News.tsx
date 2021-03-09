import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { getNews } from "../redux/actions/news";
import { Loader, NewsCard } from "../components";

const News: React.FC = () => {
	const dispatch = useDispatch();
	const { news, isLoaded } = useSelector(({ news }: RootState) => news);
	const { savedNews } = useSelector(({ profile }: RootState) => profile);

	useEffect(() => {
		dispatch(getNews("frontend"));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// пока новости не подгрузиличь показываем loader
	if (!isLoaded) {
		return <Loader />;
	}

	return (
		<div className='mt-1'>
			{news.map((item) => {
				// из уникальных значений в объекте был только url
				return <NewsCard key={item.url} data={item} savedNews={savedNews} />;
			})}
		</div>
	);
};

export default News;
