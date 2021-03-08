import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='profile'>Profile</Link>
				</li>
				<li>
					<Link to='weather'>Weather</Link>
				</li>
				<li>
					<Link to='login'>Authorization</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
