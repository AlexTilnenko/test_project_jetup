import React from "react";
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

interface INewsItemProps {
	data: IArticle;
}

const useStyles = makeStyles({
	root: {
		maxWidth: 500,
		margin: "20px auto"
	},
	media: {
		height: 140
	}
});

const imgPlaceholder: string =
	"https://peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg";

const NewsCard: React.FC<INewsItemProps> = ({ data }) => {
	const classes = useStyles();

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
				<Button size='small' color='primary'>
					Save
				</Button>
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
