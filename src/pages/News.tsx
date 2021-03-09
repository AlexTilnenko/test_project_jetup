import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewsCard } from "../components";
import { getNews } from "../redux/actions/news";
import { RootState } from "../redux/reducers";

const News: React.FC = () => {
	const dispatch = useDispatch();

	const { news } = useSelector(({ news }: RootState) => news);

	useEffect(() => {
		dispatch(getNews("frontend"));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='mt-1'>
			{news.map((item, index) => {
				return <NewsCard key={index} data={item} />;
			})}
		</div>
	);
};

export default News;
