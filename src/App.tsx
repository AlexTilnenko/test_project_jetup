import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Login, Home, Profile, Weather, News } from "./pages";
import Header from "./components/Header";
import { RootState } from "./redux/reducers";
import { setToken } from "./redux/actions/login";
import { setInitialized } from "./redux/actions/initialize";

import { Container } from "@material-ui/core";
import "./App.css";
import { Loader } from "./components";

const App: React.FC = () => {
	const dispatch = useDispatch();
	const { isInitialized } = useSelector(({ initialize }: RootState) => initialize);
	const { jwtToken } = useSelector(({ login }: RootState) => login);

	useEffect(() => {
		// получаем токен из localStorage
		const data = localStorage.getItem("jwt-token");
		// если он был записан в localStorage тогда парсим его значение и диспатчим в redux
		if (typeof data === "string") {
			const token = JSON.parse(data);
			dispatch(setToken(token));
		}
		// в любом случае заканчиваем инициализую после проверки наличия токена в localStorage
		dispatch(setInitialized(true));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// обновляем значения токена в localStorage при изменении его в store
	useEffect(() => {
		localStorage.setItem("jwt-token", JSON.stringify(jwtToken));
	}, [jwtToken]);

	// при выходе меняем токен на false
	const logoutHandler = () => {
		dispatch(setToken(false));
	};

	return (
		<div className='App'>
			<Container maxWidth='lg'>
				{!isInitialized ? (
					<Loader />
				) : (
					<>
						<Header token={jwtToken} onLogout={logoutHandler} />
						<Route exact path='/' component={Home} />
						<Route path='/login'>
							<Login token={jwtToken} />
						</Route>
						<Route path='/profile' component={Profile} />
						<Route path='/weather' component={Weather} />
						<Route path='/news' component={News} />
					</>
				)}
			</Container>
		</div>
	);
};

export default App;
