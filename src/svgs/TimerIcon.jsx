import React from "react";

const TimerIcon = (props) => {
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
				d="M10 2.5C14.14 2.5 17.5 5.86 17.5 10C17.5 14.14 14.14 17.5 10 17.5C5.86 17.5 2.5 14.14 2.5 10C2.5 5.86 5.86 2.5 10 2.5ZM10 16C13.315 16 16 13.315 16 10C16 6.685 13.315 4 10 4C6.685 4 4 6.685 4 10C4 13.315 6.685 16 10 16ZM12.652 6.2875L13.7125 7.348L10 11.0605L8.9395 10L12.652 6.2875V6.2875Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default TimerIcon;
