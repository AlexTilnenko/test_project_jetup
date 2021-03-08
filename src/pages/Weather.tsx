import React from "react";
import withLoginRedirect from "../components/hoc/withLoginRedirect";

const Weather: React.FC = () => {
	return <div>Weather</div>;
};

export default withLoginRedirect(Weather);
