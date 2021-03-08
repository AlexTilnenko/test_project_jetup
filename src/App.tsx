import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import { Login, Home, Profile, Weather, News } from "./pages";

const App: React.FC = () => {
	return (
		<div className='App'>
			<Header />
			<Route exact path='/' component={Home} />
			<Route path='/login' component={Login} />
			<Route path='/profile' component={Profile} />
			<Route path='/weather' component={Weather} />
			<Route path='/news' component={News} />
		</div>
	);
};

export default App;
