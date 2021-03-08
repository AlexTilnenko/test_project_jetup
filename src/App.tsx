import React from "react";
import { Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
import { Login, Home, Profile, Weather, News } from "./pages";

import "./App.css";

const App: React.FC = () => {
	return (
		<div className='App'>
			<Container maxWidth='lg'>
				<Header />
				<Route exact path='/' component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/profile' component={Profile} />
				<Route path='/weather' component={Weather} />
				<Route path='/news' component={News} />
			</Container>
		</div>
	);
};

export default App;
