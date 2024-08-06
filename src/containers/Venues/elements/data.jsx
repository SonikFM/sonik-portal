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
import { MoreVertical } from "lucide-react";
import event_img from "@/assets/images/events/event-1.png";
import organizer_img from "@/assets/images/events/organizer-1.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const data = [
  {
    id: "m5gr84i1",
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
    venue: {
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486 ",
      image: event_img,
      name: "Mind Space with Lobby Bar",
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
        <div className="text-sm capitalize">Venue Name</div>
        <CaretUpDownIcon />
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3 w-60">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={value => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="border-grey-light"
          />
          <h3 className="text-sm font-medium truncate shrink">
            {row.original.venue.name}
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
        <div className="text-sm capitalize">Owner</div>
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
        <h3 className="text-sm font-medium truncate shrink">
          {row.original.organizer.name}
        </h3>
      </div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "organizer",
    header: ({ table }) => (
      <div className="text-sm capitalize">Phone Number</div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center w-32 gap-3 text-sm">
        {row.original.phone}
      </div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "gmail",
    header: ({ row }) => (
      <div
        className="flex items-center gap-1 min-w-fit "
        onClick={() => row.toggleSorting(row.getIsSorted() === "asc")}
      >
        <div className="text-sm capitalize ">Location</div>
        <CaretUpDownIcon />
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3 w-44">
          <h3 className="font-medium truncate shrink">
            {row.original.venue.location}
          </h3>
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
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
