import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import withLoginRedirect from "../components/hoc/withLoginRedirect";
import { NewsCard } from "../components";
import { Typography } from "@material-ui/core";

const Profile: React.FC = () => {
	const { savedNews } = useSelector(({ profile }: RootState) => profile);

	if (savedNews.length === 0) {
		return (
			<div className='mt-1'>
				<Typography variant='h5'>No saved news...</Typography>
			</div>
		);
	}

	return (
		<div className='mt-1'>
			<Typography variant='h5'>Saved news</Typography>
			{savedNews.map((item) => {
				return <NewsCard data={item} key={item.url} savedNews={savedNews} />;
			})}
		</div>
	);
};

export default withLoginRedirect(Profile);
