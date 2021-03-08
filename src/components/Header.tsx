import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			justifyContent: "space-between",
			maxWidth: "500px",
			margin: "0 auto"
		}
	})
);

interface IHeaderProps {
	token: boolean;
	onLogout: () => void;
}

const Header: React.FC<IHeaderProps> = ({ token, onLogout }) => {
	const classes = useStyles();

	return (
		<AppBar position='sticky'>
			<Toolbar className={classes.root}>
				<Button color='inherit'>
					<Link to='/'>Home</Link>
				</Button>
				<Button color='inherit'>
					<Link to='profile'>Profile</Link>
				</Button>
				<Button color='inherit'>
					<Link to='weather'>Weather</Link>
				</Button>
				<Button color='inherit'>
					<Link to='news'>News</Link>
				</Button>
				{token ? (
					<Button color='inherit' onClick={onLogout}>
						Logout
					</Button>
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
