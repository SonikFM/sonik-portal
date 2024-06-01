import React from "react";

const StarIcon = (props) => {
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
				d="M10.0002 14.695L4.71043 17.656L5.89168 11.71L1.44043 7.594L7.46068 6.88L10.0002 1.375L12.5397 6.88L18.5599 7.594L14.1087 11.71L15.2899 17.656L10.0002 14.695ZM10.0002 12.976L13.1854 14.7587L12.4737 11.179L15.1534 8.70025L11.5287 8.2705L10.0002 4.95625L8.47168 8.27125L4.84693 8.70025L7.52668 11.179L6.81493 14.7587L10.0002 12.976Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default StarIcon;
