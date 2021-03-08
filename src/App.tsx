import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import { Authorization, Home, Profile, Weather } from "./pages";

const App: React.FC = () => {
	return (
		<div className='App'>
			<Header />
			<Route exact path='/' component={Home} />
			<Route path='/login' component={Authorization} />
			<Route path='/profile' component={Profile} />
			<Route path='/weather' component={Weather} />
		</div>
	);
};

export default App;
