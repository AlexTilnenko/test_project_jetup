import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import store from "./redux/store";
import App from "./App";

import "./index.css";

ReactDOM.render(
	<Provider store={store}>
		<Router basename='/'>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
