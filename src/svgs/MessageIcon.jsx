import React from "react";

const MessageIcon = (props) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M3.9 4.5H20.1C20.3387 4.5 20.5676 4.59482 20.7364 4.7636C20.9052 4.93239 21 5.16131 21 5.4V18.6C21 18.8387 20.9052 19.0676 20.7364 19.2364C20.5676 19.4052 20.3387 19.5 20.1 19.5H3.9C3.66131 19.5 3.43239 19.4052 3.2636 19.2364C3.09482 19.0676 3 18.8387 3 18.6V5.4C3 5.16131 3.09482 4.93239 3.2636 4.7636C3.43239 4.59482 3.66131 4.5 3.9 4.5ZM19.2 8.3142L12.0648 14.7042L4.8 8.2944V17.7H19.2V8.3142ZM5.2599 6.3L12.0549 12.2958L18.7518 6.3H5.2599Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default MessageIcon;
