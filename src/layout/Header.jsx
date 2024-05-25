import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import logo from "@/assets/images/logo.svg";
import { Link } from "react-router-dom";

const Header = ({ actionButton }) => {
	return (
		<div className="fixed top-0 left-0 flex items-center justify-between w-full py-6 px-11">
			<Link to="/" className="flex items-center gap-2 text-sm text-white">
				<Avatar className="w-10 h-10">
					<AvatarImage src={logo} />
				</Avatar>
				<p>Sonik</p>
			</Link>
			<div className="flex items-center gap-2 text-sm text-grey-100">
				{actionButton}
			</div>
		</div>
	);
};

export default Header;
