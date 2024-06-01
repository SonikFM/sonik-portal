import React from "react";

const MenuIcon = (props) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M3.25 4H16.75V5.5H3.25V4ZM3.25 9.25H16.75V10.75H3.25V9.25ZM3.25 14.5H16.75V16H3.25V14.5Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default MenuIcon;
