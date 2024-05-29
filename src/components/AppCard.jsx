import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Command, CommandInput } from "./ui/command";
import SearchInput from "./SearchInput";
import EventsTable from "./EventsTable";

const AppCard = ({ icon, title, hasSearch=true, buttonLabel = "" }) => {
	console.log({ buttonLabel });
	return (
		<Card className="bg-dark">
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="flex items-center gap-2 text-base font-medium text-white ">
					{icon} {title}
				</CardTitle>
				<div className="flex gap-3">
					{hasSearch ? (
						<SearchInput placeholder="Search for Event..." />
					) : null}
					{buttonLabel ? (
						<Button variant="outline" size="sm" className="px-2.5" >
							{buttonLabel}
						</Button>
					) : null}
				</div>
			</CardHeader>
			<CardContent>
				<EventsTable/>
			</CardContent>
			<CardFooter>
				<p>Card Footer</p>
			</CardFooter>
		</Card>
	);
};

export default AppCard;
