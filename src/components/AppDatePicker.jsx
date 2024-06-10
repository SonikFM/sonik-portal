

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export function AppDatePicker({ icon, className, dateFormat="PPP", ...rest }) {
	const [date, setDate] = React.useState();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"w-full justify-start text-left font-normal px-2 text-sm hover:bg-grey-200 font-normal",
						!date && "text-grey-100",
						className
					)}
                    {...rest}
				>
					{icon}
					{date ? format(date, dateFormat) : <span className="text-sm font-normal text-grey-100" >Pick a date</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
