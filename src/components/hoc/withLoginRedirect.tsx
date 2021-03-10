import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { RootState } from "../../redux/reducers";

const withLoginRedirect = <P extends object>(Component: React.ComponentType<P>) => {
	return (props: P) => {
		const { jwtToken } = useSelector(({ login }: RootState) => login);

		if (!jwtToken) {
			return <Redirect to='/login' />;
		}
		return <Component {...props} />;
	};
};

export default withLoginRedirect;
