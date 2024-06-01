import React from "react";
export const DashboardHeader = ({ title, description, icon, children }) => {
	return (
		<div className=" fixed top-0 left-[272px] w-[calc(100%-272px)] bg-grey-dark z-50  px-8">
			<div className="border-b border-grey-light flex items-center justify-between h-[88px] gap-5 bg-grey-dark w-full">
				<div className="flex items-center gap-3 shrink-0">
					<div className="flex items-center justify-center w-12 h-12 border rounded-full border-grey-light shrink-0">
						{icon}
					</div>
					<div>
						<h4 className="text-lg font-medium leading-5 text-white">
							{title}
						</h4>
						<p className="mt-1 text-sm text-grey-100">{description}</p>
					</div>
				</div>
				<div className="flex gap-3 text-grey-100">{children}</div>
			</div>
		</div>
	);
};

export default DashboardHeader;
