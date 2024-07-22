import React from "react";

const AppLoader = () => {
	return (
		<div className="fixed flex items-center justify-center w-full h-full gap-2 text-white bg-grey-dark">
			<div className="border-4 rounded-full w-7 h-7 animate-spin border-t-primary border-primary/30"></div>{" "}
		</div>
	);
};

export default AppLoader;
