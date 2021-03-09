import React from "react";

import { CircularProgress, Container } from "@material-ui/core";

const Loader: React.FC = () => {
	return (
		<Container maxWidth='sm'>
			<CircularProgress className='mt-2' />
		</Container>
	);
};

export default Loader;
