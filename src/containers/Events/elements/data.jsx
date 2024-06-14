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

export const data = [

	{
		id: "m5gr84i1",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "pending",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "completed",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		event_id: "E-32348",
		event: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organizer: {
			name: "James Brown",
			email: "james@gmail.com",
		},
		status: "success",
		email: "ken99@yahoo.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
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
				<div className="capitalize">Event Name</div>
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
					<div className="flex items-center justify-center w-10 h-10 border-2 rounded-full border-grey-light shrink-0">
						<img src={event_img} alt="event image" />
					</div>
					<h3 className="font-medium truncate shrink">
						{row.original.event.name}
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
				<div className="capitalize">Organizer</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center gap-3 w-36">
				<div className="flex items-center justify-center w-10 h-10 border-2 rounded-full border-grey-light shrink-0">
					<img src={organizer_img} alt="organizer image" />
				</div>
				<div className="shrink">
					<h4 className="font-medium truncate">
						{row.original.organizer.name}
					</h4>
					<p className="text-xs font-normal truncate text-grey-100">
						{row.original.organizer.email}
					</p>
				</div>
			</div>
		),
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "event_id",
		header: ({ row }) => (
			<div
				className="flex items-center gap-1 min-w-fit whitespace-nowrap"
				onClick={() => row.toggleSorting(row.getIsSorted() === "asc")}
			>
				<div className="capitalize">Event ID</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => (
			<span className="text-sm">{row.getValue("event_id")}</span>
		),
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "event_date",
		header: ({ row }) => (
			<div
				className="flex items-center gap-1 min-w-fit whitespace-nowrap "
				onClick={() => row.toggleSorting(row.getIsSorted() === "asc")}
			>
				<div className="capitalize">Event Date</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => (
			<span className="text-sm whitespace-nowrap">{row.original.date}</span>
		),
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "description",
		header: "Description",
		cell: ({ row }) => (
			<div className="w-48 truncate">{row.getValue("description")}</div>
		),
	},
	{
		accessorKey: "status",
		header: () => (
			<div
				className="flex items-center gap-1 min-w-fit "
				onClick={() => row.toggleSorting(row.getIsSorted() === "asc")}
			>
				<div className="capitalize">Status</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => {
			const status = row.getValue("status");

			return (
				<div className="font-medium">
					<Button
						variant="oultined"
						className="h-6 gap-1.5 text-xs border-grey-light text-grey-100 rounded-md border px-2"
					>
						{status === "success" ? (
							<>
								<ClockIcon className="text-warning" /> In Progress
							</>
						) : status === "completed" ? (
							<>
								<CheckedIcon /> Completed
							</>
						) : (
							<>
								<InactiveIcon className="text-grey" /> Inactive
							</>
						)}
					</Button>
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
						<Button variant="ghost" className="w-8 h-8 p-0 hover:bg-grey-dark hover:text-white">
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
