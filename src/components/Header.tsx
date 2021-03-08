import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { RootState } from "../redux/reducers";

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			justifyContent: "space-between"
		}
	})
);

const Header: React.FC = () => {
	const classes = useStyles();

	const { jwtToken } = useSelector(({ login }: RootState) => login);
	console.log(jwtToken);

	return (
		<AppBar position='sticky'>
			<Toolbar className={classes.root}>
				<Button color='inherit'>
					<Link to='/'>Home</Link>
				</Button>
				<Toolbar className={classes.root}>
					<Button color='inherit'>
						<Link to='profile'>Profile</Link>
					</Button>
					<Button color='inherit'>
						<Link to='weather'>Weather</Link>
					</Button>
					<Button color='inherit'>
						<Link to='news'>News</Link>
					</Button>
				</Toolbar>
				{jwtToken ? (
					<Button color='inherit'>Logout</Button>
				) : (
					<Button color='inherit'>
						<Link to='login'>Login</Link>
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
