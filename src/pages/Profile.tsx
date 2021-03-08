import React from "react";
import withLoginRedirect from "../components/hoc/withLoginRedirect";

const Profile: React.FC = () => {
	return <div>Profile</div>;
};

export default withLoginRedirect(Profile);
