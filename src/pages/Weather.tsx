import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import { getWeather, removeCity, setCurrentCity } from "../redux/actions/weather";
import { CitiesList, Loader, WeatherCard, AddCityForm } from "../components";
import withLoginRedirect from "../components/hoc/withLoginRedirect";

import { Grid, Typography } from "@material-ui/core";

const Weather: React.FC = () => {
	const dispatch = useDispatch();
	const { currentCity, citiesList, weatherData } = useSelector(
		({ weather }: RootState) => weather
	);

	useEffect(() => {
		dispatch(getWeather(currentCity));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentCity]);

	const handleClickCity = (text: string): void => {
		dispatch(setCurrentCity(text));
	};

	const handleRemoveCity = (text: string): void => {
		dispatch(removeCity(text));
	};

	return (
		<div className='mt-1 '>
			<Grid container spacing={3}>
				<Grid item xs={6}>
					<Typography variant='h5'>Select or add another city </Typography>
					<CitiesList
						citiesList={citiesList}
						currentCity={currentCity}
						onSelectCity={handleClickCity}
						onRemoveCity={handleRemoveCity}
					/>
					<AddCityForm
						title={"Enter your city"}
						label={"City"}
						buttonText={"Press to enter city"}
						valueHandler={handleClickCity}
					/>
				</Grid>
				<Grid item xs={6}>
					{weatherData ? <WeatherCard weatherData={weatherData} /> : <Loader />}
				</Grid>
			</Grid>
		</div>
	);
};

export default withLoginRedirect(Weather);
