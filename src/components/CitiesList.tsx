import React from "react";

import { Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
	wrapper: {
		marginTop: 20,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column"
	},
	cityItem: {
		margin: "5px 0",
		display: "inline-block",
		minWidth: 150
	},
	icon: {
		margin: "0 0 0 10px"
	}
});

interface ICityesListProps {
	citiesList: Array<string>;
	currentCity: string;
	onSelectCity: (text: string) => void;
	onRemoveCity: (text: string) => void;
}

const CitiesList: React.FC<ICityesListProps> = ({
	citiesList,
	currentCity,
	onSelectCity,
	onRemoveCity
}) => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			{citiesList.map((item) => {
				return (
					<div key={item}>
						<Button
							variant={currentCity === item ? "contained" : "text"}
							color={currentCity === item ? "primary" : "default"}
							className={classes.cityItem}
							onClick={() => onSelectCity(item)}
						>
							{item}
						</Button>
						<IconButton className={classes.icon} onClick={() => onRemoveCity(item)}>
							<DeleteIcon fontSize='small' />
						</IconButton>
					</div>
				);
			})}
		</div>
	);
};

export default CitiesList;
