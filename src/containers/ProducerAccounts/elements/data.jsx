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
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i1",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i2",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i3",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i4",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i5",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i6",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i7",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i8",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i9",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Doncert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i10",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i11",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i12",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i13",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i14",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "pending",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i15",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "completed",
		email: "jamesbrown@alignui.com",
		date: "12-15 Mar 2023",
		description:
			"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,",
	},
	{
		id: "m5gr84i16",
		producer_id: "E-32348",
		producer: {
			image: event_img,
			name: "Concert For Charity Goodlayers.com",
		},
		organization: {
			name: "James Organization",
			email: "james@gmail.com",
		},
		role: {
			title: "Marketing Manager",
			date: "Aug, 2021",
		},
		status: "success",
		email: "jamesbrown@alignui.com",
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
				<div className="capitalize">Producer Accounts</div>
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
						<img src={organizer_img} alt="event image" />
					</div>
					<h3 className="font-medium truncate shrink">
						{row.original.producer.name}
					</h3>
				</div>
			);
		},
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "organization",
		header: ({ table }) => (
			<div
				className="flex items-center gap-1"
				onClick={() => table.toggleSorting(table.getIsSorted() === "asc")}
			>
				<div className="capitalize">Organization</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center gap-3 w-36">
				<div className="shrink">
					<h4 className="font-medium truncate">
						{row.original.organization.name}
					</h4>
					<p className="text-xs font-normal truncate text-grey-100">
						{row.original.organization.email}
					</p>
				</div>
			</div>
		),
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "role",
		header: ({ row }) => (
			<div
				className="flex items-center gap-1 min-w-fit whitespace-nowrap "
				onClick={() => row.toggleSorting(row.getIsSorted() === "asc")}
			>
				<div className="capitalize">Roles</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => (
			<div className="text-sm w-28 whitespace-nowrap">
				<div className="shrink">
					<h4 className="font-medium truncate">
						{row.original.role.title}
					</h4>
					<p className="text-xs font-normal truncate text-grey-100">
						Since {row.original.role.date}
					</p>
				</div>
			</div>
		),
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "email",
		header: "Email",
		cell: ({ row }) => (
			<div className="text-sm font-medium truncate w-36">{row.getValue("email")}</div>
		),
	},
	{
		accessorKey: "producer_id",
		header: ({ row }) => (
			<div
				className="flex items-center gap-1 min-w-fit whitespace-nowrap"
				onClick={() => row.toggleSorting(row.getIsSorted() === "asc")}
			>
				<div className="capitalize">Producer ID</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => (
			<span className="text-sm w-28">{row.getValue("producer_id")}</span>
		),
		enableSorting: true,
		enableHiding: false,
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
				<div className="w-20 font-medium">
					<Button
						variant="oultined"
						className="h-6 gap-1.5 text-xs border-grey-light text-grey-100 rounded-md border px-2"
					>
						{ status === "success" ? (
							<>
								<CheckedIcon /> Active
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
];
