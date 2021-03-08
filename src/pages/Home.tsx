import React from "react";
import { Typography, Container } from "@material-ui/core";
import withLoginRedirect from "../components/hoc/withLoginRedirect";

const Home: React.FC = () => {
	return (
		<Container maxWidth='sm'>
			<div className='mt-1'>
				<Typography variant='h4'>
					Тестовое задание в компанию Jet Up на позицию Frontend Developer
				</Typography>
				<Typography variant='h6'>by Alexandr Tilnenko</Typography>
			</div>
		</Container>
	);
};

export default withLoginRedirect(Home);
