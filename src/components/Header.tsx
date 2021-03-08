import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			justifyContent: "space-between"
		}
	})
);

const Header: React.FC = () => {
	const classes = useStyles();

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
				<Button color='inherit'>
					<Link to='login'>Login</Link>
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
