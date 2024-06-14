import { cn } from "@/lib/utils";
import React from "react";

const Container = ({ children, className, ...rest }) => {
	return (
		<div className={cn("p-4 md:p-8 lg:ml-[272px]", className)} {...rest}>
			{children}
		</div>
	);
};

export default Container;
