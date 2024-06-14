import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CaretUpDownIcon from "@/svgs/CaretUpDownIcon";
import organizer_img from "@/assets/images/events/organizer-1.png";
import { MoreVertical } from "lucide-react";
import { formatDate } from "@/lib/utils";
const dates = [
	new Date(),
	new Date(new Date().setDate(new Date().getDate() - 1)), // Yesterday
	new Date("2023-09-24T14:10:00"),
	new Date("2023-09-23T13:30:00"),
];
const getRandomDate = () => {
	const randomIndex = Math.floor(Math.random() * dates.length);
	return dates[randomIndex];
  };
export const data = [
	{
		id: "m5gr84i1",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i2",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i3",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i4",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i5",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i6",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i7",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i8",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i9",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i10",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i11",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i12",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i13",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i14",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i15",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i16",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i1",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i2",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i3",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i4",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i5",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i6",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i7",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i8",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i9",

		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i10",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i11",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i12",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i13",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i14",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i15",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i16",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i1",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i2",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i3",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i4",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i5",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i6",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i7",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i8",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i9",

		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i10",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i11",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i12",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i13",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i14",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i15",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i16",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i1",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i2",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i3",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i4",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i5",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i6",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i7",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i8",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i9",

		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i10",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i11",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i12",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i13",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i14",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i15",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i16",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i1",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i2",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i3",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i4",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i5",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i6",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i7",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i8",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i9",

		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i10",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i11",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i12",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i13",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i14",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i15",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i16",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i1",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i2",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i3",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i4",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i5",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i6",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i7",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i8",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i9",

		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i10",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i11",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i12",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i13",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i14",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i15",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i16",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i1",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i2",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i3",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i4",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i5",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i6",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i7",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i8",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i9",

		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i10",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i11",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i12",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i13",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i14",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i15",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i16",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i1",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i2",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i3",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i4",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i5",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i6",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i7",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i8",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i9",

		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i10",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i11",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i12",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i13",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i14",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i15",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
	},
	{
		id: "m5gr84i16",
		role: "Owner",
		email: "jamesbrown@alignui.com",
		date: getRandomDate(),
		name: "Arthur Taylor",
		profile: organizer_img,
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
				<div className="capitalize">Member Full Name</div>
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
					<h3 className="text-sm font-medium truncate shrink-1">{row.original.name}</h3>
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
				<div className="capitalize">Email Address</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => (
			<div className="flex items-center gap-3 w-36">
				<div className="shrink-1">
					<p className="text-xs font-normal truncate text-grey-100">
						{row.original.email}
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
				<div className="capitalize">Last Activity</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => (
			<div className="w-48 text-sm whitespace-nowrap">
				<div className="shrink-1">
					<p className="text-xs font-normal truncate text-grey-100">
						{formatDate(row.original.date)}
					</p>
				</div>
			</div>
		),
		enableSorting: true,
		enableHiding: false,
	},
	{
		accessorKey: "role",
		header: () => (
			<div
				className="flex items-center gap-1 min-w-fit "
				onClick={() => row.toggleSorting(row.getIsSorted() === "asc")}
			>
				<div className="capitalize">Role</div>
				<CaretUpDownIcon />
			</div>
		),
		cell: ({ row }) => {
			const role = row.getValue("role");

			return (
				<div className="w-20 font-medium">
					<Button
						variant="oultined"
						className="h-6 gap-2 px-2 py-0 text-xs border rounded-md border-grey-light text-grey-100"
					>
						<div className="w-1 h-1 rounded-full bg-success" />
						{role}
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
