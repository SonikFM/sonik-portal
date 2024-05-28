import React from "react";

const SearchIcon = (props) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M7.25 0.5C10.976 0.5 14 3.524 14 7.25C14 10.976 10.976 14 7.25 14C3.524 14 0.5 10.976 0.5 7.25C0.5 3.524 3.524 0.5 7.25 0.5ZM7.25 12.5C10.1502 12.5 12.5 10.1502 12.5 7.25C12.5 4.349 10.1502 2 7.25 2C4.349 2 2 4.349 2 7.25C2 10.1502 4.349 12.5 7.25 12.5ZM13.6137 12.5532L15.7355 14.6742L14.6742 15.7355L12.5532 13.6137L13.6137 12.5532Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export default SearchIcon;
