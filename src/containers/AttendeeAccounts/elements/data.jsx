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
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i2",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i3",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i4",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i5",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i6",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i7",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i8",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i9",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i10",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i11",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i12",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i13",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i14",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i15",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i16",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i1",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i2",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i3",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i4",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i5",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i6",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i7",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i8",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i9",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i10",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i11",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i12",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i13",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i14",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i15",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i16",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i1",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i2",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i3",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i4",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i5",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i6",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i7",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i8",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i9",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i10",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i11",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i12",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i13",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i14",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i15",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i16",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i1",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i2",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i3",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i4",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i5",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i6",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i7",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i8",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i9",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i10",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i11",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i12",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i13",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i14",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i15",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i16",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i1",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i2",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i3",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i4",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i5",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i6",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i7",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i8",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i9",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i10",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i11",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i12",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i13",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i14",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i15",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i16",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i1",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i2",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i3",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i4",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i5",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i6",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i7",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i8",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i9",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i10",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i11",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i12",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i13",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i14",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i15",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i16",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i1",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i2",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i3",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i4",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i5",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i6",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i7",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i8",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i9",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i10",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i11",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i12",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i13",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i14",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i15",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i16",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i1",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i2",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i3",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i4",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i5",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i6",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i7",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i8",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i9",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i10",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i11",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i12",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i13",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i14",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i15",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
	},
	{
		id: "m5gr84i16",
		attendee_id: "E-32348",
		member: {
			image: event_img,
			name: "James Brown",
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
		phone: "(702) 555-0122"
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
						{row.original.member.name}
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
			>
				<div className="capitalize ">Phone number</div>
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center w-24 gap-3 ">
				<div className="shrink">
					<p className="font-medium text-white truncate">
						{row.original.phone}
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
			<div className="text-sm font-medium truncate w-72">{row.getValue("email")}</div>
		),
	},
	{
		accessorKey: "attendee_id",
		header: ({ row }) => (
			<div
				className="flex items-center gap-1 min-w-fit whitespace-nowrap"
				onClick={() => row.toggleSorting(row.getIsSorted() === "asc")}
			>
				<div className="capitalize">Attendee Account ID</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => (
			<span className="text-sm w-28">{row.getValue("attendee_id")}</span>
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
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="float-right w-8 h-8 p-0 hover:bg-grey-dark hover:text-white">
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
