import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CaretUpDownIcon from "@/svgs/CaretUpDownIcon";
import { MoreHorizontal, MoreVertical } from "lucide-react";
import event_img from "@/assets/images/events/event-1.png";
import organizer_img from "@/assets/images/events/organizer-1.png";
import InactiveIcon from "@/svgs/InactiveIcon";
import CheckedIcon from "@/svgs/CheckedIcon";
import ClockIcon from "@/svgs/ClockIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const data = [
	{
		id: "m5gr84i1",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i2",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i3",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i4",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i5",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i6",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i7",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i8",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i9",
		organization: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i10",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i11",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i12",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i13",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i14",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i15",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i16",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i1",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i2",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i3",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i4",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i5",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i6",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i7",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i8",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i9",
		organization: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i10",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i11",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i12",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i13",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i14",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i15",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i16",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i1",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i2",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i3",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i4",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i5",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i6",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i7",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i8",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i9",
		organization: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i10",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i11",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i12",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i13",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i14",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i15",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i16",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i1",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i2",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i3",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i4",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i5",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i6",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i7",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i8",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i9",
		organization: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i10",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i11",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i12",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i13",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i14",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i15",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i16",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i1",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i2",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i3",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i4",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i5",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i6",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i7",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i8",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i9",
		organization: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i10",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i11",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i12",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i13",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i14",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i15",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i16",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i1",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i2",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i3",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i4",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i5",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i6",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i7",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i8",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i9",
		organization: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i10",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i11",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i12",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i13",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i14",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i15",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i16",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i1",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i2",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i3",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i4",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i5",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i6",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i7",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i8",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i9",
		organization: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i10",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i11",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i12",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i13",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i14",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i15",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i16",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i1",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i2",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i3",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i4",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i5",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i6",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i7",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i8",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i9",
		organization: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i10",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i11",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i12",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i13",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i14",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i15",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
	{
		id: "m5gr84i16",
		organization: {
			image: event_img,
			name: "Goodlayers.com",
		},
		organizer: {
			image: organizer_img,
			name: "James Brown",
			email: "james@gmail.com",
		},
		phone: "(702) 555-0122",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
	},
];

export const columns = [
	{
		id: "select",
		header: ({ table }) => (
			<div
				className="flex items-center gap-1"
				onClick={() => table.toggleSorting(table.getIsSorted() === "asc")}
			>
				<div className="capitalize">Organization Name</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => {
			return (
				<div className="flex items-center gap-3 w-60">
					<Checkbox
						checked={row.getIsSelected()}
						onCheckedChange={(value) => row.toggleSelected(!!value)}
						aria-label="Select row"
						className="border-grey-light"
					/>
					<Avatar className="w-10 h-10 border-2 border-grey-light shrink-0">
						<AvatarImage src={event_img} alt="event image" />
						<AvatarFallback>AB</AvatarFallback>
					</Avatar>
					<h3 className="font-medium truncate shrink">
						{row.original.organization.name}
					</h3>
				</div>
			);
		},
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "organizer",
		header: ({ table }) => (
			<div
				className="flex items-center gap-1"
				onClick={() => table.toggleSorting(table.getIsSorted() === "asc")}
			>
				<div className="capitalize">Owner</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center gap-3 w-36">
				<div className="flex items-center justify-center w-10 h-10 border-2 rounded-full border-grey-light shrink-0">
					<Avatar className="w-10 h-10 border-2 border-grey-light shrink-0">
						<AvatarImage src={event_img} alt="event image" />
						<AvatarFallback>AB</AvatarFallback>
					</Avatar>
				</div>
				<h3 className="font-medium truncate shrink">
					{row.original.organizer.name}
				</h3>
			</div>
		),
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "organizer",
		header: ({ table }) => <div className="capitalize">Phone Number</div>,
		cell: ({ row }) => (
			<div className="flex items-center gap-3 w-36">{row.original.phone}</div>
		),
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "gmail",
		header: () => (
			<div
				className="flex items-center gap-1 min-w-fit "
				onClick={() => row.toggleSorting(row.getIsSorted() === "asc")}
			>
				<div className="capitalize">Gmail Address</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => {
			return (
				<div className="flex items-center gap-3 w-36">
					<h3 className="font-medium truncate shrink">{row.original.email}</h3>
				</div>
			);
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="float-right w-8 h-8 p-0 hover:bg-grey-dark hover:text-white"
						>
							<span className="sr-only">Open menu</span>
							<MoreVertical className="w-4 h-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem>Edit</DropdownMenuItem>
						<DropdownMenuItem>View</DropdownMenuItem>
						<DropdownMenuItem>Delete</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
