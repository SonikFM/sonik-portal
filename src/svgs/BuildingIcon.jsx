import React from "react";

const BuildingIcon = (props) => {
	return (
		<svg
			width="18"
			height="14"
			viewBox="0 0 18 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M15.75 12.25H17.25V13.75H0.75V12.25H2.25V1C2.25 0.801088 2.32902 0.610322 2.46967 0.46967C2.61032 0.329018 2.80109 0.25 3 0.25H10.5C10.6989 0.25 10.8897 0.329018 11.0303 0.46967C11.171 0.610322 11.25 0.801088 11.25 1V12.25H14.25V6.25H12.75V4.75H15C15.1989 4.75 15.3897 4.82902 15.5303 4.96967C15.671 5.11032 15.75 5.30109 15.75 5.5V12.25ZM3.75 1.75V12.25H9.75V1.75H3.75ZM5.25 6.25H8.25V7.75H5.25V6.25ZM5.25 3.25H8.25V4.75H5.25V3.25Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default BuildingIcon;
