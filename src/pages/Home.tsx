import React from "react";
import { Typography, Container } from "@material-ui/core";
const Home: React.FC = () => {
	return (
		<Container maxWidth='sm'>
			<Typography variant='h4'>
				Тестовое задание в компанию Jet Up на позицию Frontend Developer
			</Typography>
			<Typography variant='h6'>by Alexandr Tilnenko</Typography>
		</Container>
	);
};

export default Home;
