import React from "react";

const MapIcon = (props) => {
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
				d="M2.5 4.75L7.75 2.5L12.25 4.75L16.9772 2.72425C17.0343 2.69979 17.0966 2.68988 17.1584 2.69541C17.2202 2.70094 17.2797 2.72173 17.3316 2.75593C17.3834 2.79013 17.4259 2.83666 17.4553 2.89135C17.4847 2.94603 17.5001 3.00716 17.5 3.06925V15.25L12.25 17.5L7.75 15.25L3.02275 17.2758C2.96569 17.3002 2.90344 17.3101 2.8416 17.3046C2.77976 17.2991 2.72026 17.2783 2.66844 17.2441C2.61662 17.2099 2.5741 17.1633 2.54471 17.1087C2.51531 17.054 2.49994 16.9928 2.5 16.9307V4.75ZM13 15.5463L16 14.2607V4.77475L13 6.06025V15.5463ZM11.5 15.448V6.052L8.5 4.552V13.948L11.5 15.448ZM7 13.9398V4.45375L4 5.73925V15.2252L7 13.9398Z"
				fill="#99A0AE"
			/>
		</svg>
	);
};

export default MapIcon;