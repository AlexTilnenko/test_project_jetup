import React, { useState, useEffect } from "react";
import { saveNews } from "../redux/actions/profile";
import { removeNews } from "../redux/actions/profile";
import { IArticle } from "../redux/reducers/news";

import { makeStyles } from "@material-ui/core/styles";
import {
	Card,
	CardActionArea,
	CardMedia,
	Typography,
	CardContent,
	CardActions,
	Button,
	Link
} from "@material-ui/core";
import { useDispatch } from "react-redux";

interface INewsItemProps {
	data: IArticle;
	savedNews: Array<IArticle>;
}

const useStyles = makeStyles({
	root: {
		maxWidth: 500,
		margin: "20px auto"
	},
	media: {
		height: 260
	}
});

const imgPlaceholder: string =
	"https://peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg";

const NewsCard: React.FC<INewsItemProps> = ({ data, savedNews }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [isSaved, setIsSaved] = useState<boolean>(false);

	useEffect(() => {
		const currentNews = savedNews.filter((item) => item.url === data.url)[0];

		// отмечаем сохранена ли текущая новость
		if (currentNews) {
			setIsSaved(true);
		} else {
			setIsSaved(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [savedNews]);

	// сохраняем текущую новость в state
	const saveNewsHandler = (news: IArticle): void => {
		dispatch(saveNews(news));
	};
	// удаляем сохраненную новость из state
	const removeNewsHandler = (url: string) => {
		dispatch(removeNews(url));
	};

	const { urlToImage, title, description, url } = data;
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={urlToImage || imgPlaceholder}
					title={title}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{title}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				{isSaved ? (
					<Button size='small' color='primary' onClick={() => removeNewsHandler(data.url)}>
						Remove
					</Button>
				) : (
					<Button size='small' color='primary' onClick={() => saveNewsHandler(data)}>
						Save
					</Button>
				)}
				<Button size='small' color='primary'>
					<Link href={url} rel='noreferrer' target='_blank' color='inherit'>
						Learn More
					</Link>
				</Button>
			</CardActions>
		</Card>
	);
};

export default NewsCard;
