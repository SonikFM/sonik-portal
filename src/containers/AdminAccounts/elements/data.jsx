import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CaretUpDownIcon from "@/svgs/CaretUpDownIcon";
import user_img from "@/assets/images/users/1.png";
import organizer_img from "@/assets/images/events/organizer-1.png";
import InactiveIcon from "@/svgs/InactiveIcon";
import CheckedIcon from "@/svgs/CheckedIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, XCircleIcon } from "lucide-react";

export const data = [
  {
    id: "m5gr84i1",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i2",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i3",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i4",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i5",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i6",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i7",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i8",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i9",
    account_id: "E-32348",
    admin: {
      image: user_img,
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
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i10",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i11",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i12",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i13",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i14",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i15",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i16",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i1",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i2",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i3",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i4",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i5",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i6",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i7",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i8",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i9",
    account_id: "E-32348",
    admin: {
      image: user_img,
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
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i10",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i11",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i12",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i13",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i14",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i15",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i16",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i1",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i2",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i3",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i4",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i5",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i6",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i7",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i8",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i9",
    account_id: "E-32348",
    admin: {
      image: user_img,
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
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i10",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i11",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i12",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i13",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i14",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i15",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i16",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i1",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i2",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i3",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i4",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i5",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i6",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i7",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i8",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i9",
    account_id: "E-32348",
    admin: {
      image: user_img,
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
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i10",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i11",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i12",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i13",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i14",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i15",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i16",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i1",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i2",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i3",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i4",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i5",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i6",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i7",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i8",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i9",
    account_id: "E-32348",
    admin: {
      image: user_img,
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
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i10",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i11",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i12",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i13",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i14",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i15",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i16",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i1",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i2",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i3",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i4",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i5",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i6",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i7",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i8",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i9",
    account_id: "E-32348",
    admin: {
      image: user_img,
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
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i10",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i11",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i12",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i13",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i14",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i15",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i16",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i1",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i2",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i3",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i4",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i5",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i6",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i7",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i8",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i9",
    account_id: "E-32348",
    admin: {
      image: user_img,
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
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i10",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i11",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i12",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i13",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i14",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i15",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i16",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i1",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i2",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i3",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i4",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i5",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i6",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i7",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i8",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i9",
    account_id: "E-32348",
    admin: {
      image: user_img,
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
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i10",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i11",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i12",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i13",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i14",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "pending",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i15",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "rejected",
    date: "12-15 Mar 2023",
  },
  {
    id: "m5gr84i16",
    account_id: "E-32348",
    admin: {
      image: user_img,
      name: "James Organization",
      email: "james@gmail.com",
    },
    role: {
      title: "Marketing Manager",
      date: "Aug, 2021",
    },
    status: "active",
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
        <div className="capitalize">Admin Accounts</div>
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
          <div className="flex items-center justify-center w-10 h-10 border-2 rounded-full border-grey-light shrink-0">
            <img src={organizer_img} alt="event image" />
          </div>
          <div>
            <h3 className="font-medium truncate shrink">
              {row.original.admin.name}
            </h3>
            <p className="text-xs text-grey-100">{row.original.admin.email}</p>
          </div>
        </div>
      );
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "account_id",
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
      <span className="text-sm w-28">{row.getValue("account_id")}</span>
    ),
    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "status",
    header: ({ row }) => (
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
            {status === "active" ? (
              <>
                <CheckedIcon /> Active
              </>
            ) : status === "pending" ? (
              <>
                <InactiveIcon className="text-grey" /> Pending
              </>
            ) : (
              <>
                <XCircleIcon className="w-3 h-3 text-error" /> Rejected
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
