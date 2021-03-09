import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import withLoginRedirect from "../components/hoc/withLoginRedirect";
import { NewsCard } from "../components";

const Profile: React.FC = () => {
	const { savedNews } = useSelector(({ profile }: RootState) => profile);

	return (
		<div className='mt-1'>
			{savedNews.map((item) => {
				return <NewsCard data={item} key={item.url} savedNews={savedNews} />;
			})}
		</div>
	);
};

export default withLoginRedirect(Profile);
