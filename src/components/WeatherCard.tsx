import React from "react";
import { kelToCelsConverter } from "../utils/kelToCelsConverter";

import { CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	img: {
		width: 50,
		height: 50,
		display: "inline-block"
	},
	infoTitle: {
		display: "flex",
		alignItems: "left"
	}
});

interface IWeatherCardProps {
	weatherData: any;
}

const WeatherCard: React.FC<IWeatherCardProps> = ({ weatherData }) => {
	const classes = useStyles();
	const { name, weather, wind, main } = weatherData;

	if (weatherData.id === undefined) {
		return (
			<Typography variant='h5' className={classes.infoTitle}>
				Enter the name of the city, if the weather does not download so name incorrect
			</Typography>
		);
	}

	const weatherIcon = weatherData.weather[0].icon;
	const weatherIconUrl = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

	return (
		<>
			<Typography variant='h5' className={classes.infoTitle}>
				{`In ${name} ${weather[0].main} `}
				<CardMedia image={weatherIconUrl} className={classes.img} />
			</Typography>
			<Typography variant='subtitle1' align='left'>{`Temperature: ${kelToCelsConverter(
				main.temp
			)}℃`}</Typography>
			<Typography variant='subtitle1' align='left'>{`Fills like: ${kelToCelsConverter(
				main.feels_like
			)}℃`}</Typography>
			<Typography variant='subtitle1' align='left'>{`Humidity: ${main.humidity}%`}</Typography>
			<Typography variant='subtitle1' align='left'>{`Wind: ${wind.speed}m/s`}</Typography>
		</>
	);
};

export default WeatherCard;
