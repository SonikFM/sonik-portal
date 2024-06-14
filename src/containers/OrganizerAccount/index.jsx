
import SearchInput from "@/components/SearchInput";
import { Select } from "@/components/Select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DashboardHeader from "@/layout/DashboardHeader";
import FoldersIcon from "@/svgs/FoldersIcon";
import InformationIcon from "@/svgs/InformationIcon";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import Artist from "./elements/Artist";
import FlashLightIcon from "@/svgs/FlashLightIcon";
import TimerIcon from "@/svgs/TimerIcon";
import InputWithIcon from "@/components/InputWithIcon";
import CalendarIcon from "@/svgs/CalendarIcon";
import { AppDatePicker } from "@/components/AppDatePicker";
// import ArtistTime from "./elements/ArtistTime";
import { ChevronLeft, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileUpload from "@/components/FileUpload";
import { Textarea } from "@/components/ui/textarea";
// import Ticket from "./elements/Ticket";
import { Switch } from "@/components/ui/switch";
import DollarIcon from "@/svgs/DollarIcon";
// import Guest from "./elements/Guest";
// import SearchSuggestionInput from "./elements/SearchSuggestionInput";
import SearchIcon from "@/svgs/SearchIcon";
import BellIcon from "@/svgs/BellIcon";
import Profile from "./elements/Profile";
import UploadIcon from "@/svgs/UploadIcon";
import { useNavigate } from "react-router-dom";

const OrganizerAccount = () => {
	const [t, i18n] = useTranslation("dashboard");
	const [checked, setChecked] = useState(false);
	const onChange = () => {
		setChecked(!true);
	};

	const navigate = useNavigate()
	const onIconClick=()=>{
		navigate(-1)
	}
	return (
		<>
			<DashboardHeader
				title="Add Orgranizer Profile"
				description="Let attendees know who is hosting events"
				icon={<ChevronLeft className="w-5 h-5 text-grey-100" />}
				onIconClick={onIconClick}
			>
				{/* <Button variant="outline"> Cancel </Button> */}
				<Button> Save </Button>
			</DashboardHeader>
			<div className="p-8 space-y-6">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
					<div className="grid gap-1">
						<Label className="flex justify-between text-white">
							<span>
								Organizer Name <span className="text-primary">*</span>
							</span>
						</Label>
						<Input
							className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
							placeholder="Sonik"
						/>
					</div>
					<div className="grid gap-1">
						<Label className="text-white">
							Website <span className="text-primary"></span>
						</Label>
						<Input
							className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
							placeholder="https://www.sonic.com/home"
						/>
					</div>
				</div>
				<Profile />
				<div>
					<FileUpload className="h-20">
						<div className="flex items-center justify-between w-full h-full">
							<div className="flex w-full gap-4 shrink">
								<div className="flex items-center justify-center w-10 h-10 border rounded-full border-grey-light shrink-0 bg-grey-light">
									<UploadIcon className="text-grey-100" />
								</div>
								<div className="text-left">
									<h3 className="text-sm font-medium text-white">
										Choose a file or drag & drop it here.
									</h3>
									<p className="text-xs text-grey-100 mt-1.5">
										JPEG file only and image size no longer than 10 MB
									</p>
								</div>
							</div>
							<Button
								size="xs"
								variant="outline"
								className="text-grey-100 bg-grey-dark"
							>
								Browse File
							</Button>
						</div>
					</FileUpload>
				</div>
				<div>
					<div className="pb-4 ">
						<h3 className="font-medium text-white">Organizer Bio</h3>
						<p className="text-sm text-grey-100">
							Describe who you are, the types of events you host, or your
							mission. The bio is displayed on your organizer profile.
						</p>
					</div>
					<Textarea
						placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						className="bg-transparent border-grey-light"
					/>
				</div>
				<div>
					<div className="pb-4 ">
						<h3 className="font-medium text-white">
							Description for event pages
						</h3>
						<p className="text-sm text-grey-100">
							Write a short description for this oraanizer to show on all vour
							event pades.
						</p>
					</div>
					<Textarea
						placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
						className="bg-transparent border-grey-light"
					/>
				</div>
				<div>
					<div className="flex justify-between pt-4 pb-4 border-b border-grey-light">
						<div>
							<h3 className="font-medium text-white">
								Social media and marketing
							</h3>
							<p className="text-sm text-grey-100">
								Let attendees know how to connect with you
							</p>
						</div>
						<Button className="flex gap-2">
							<PlusIcon className="w-4 h-4" /> Add Social Link
						</Button>
					</div>
					<div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 ">
						<div className="grid gap-1">
							<Label className="flex justify-between text-white">
								<span>
									Facebook ID <span className="text-primary">*</span>
								</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="Sonik"
							/>
						</div>
						<div className="grid gap-1">
							<Label className="text-white">
								Twiiter ID <span className="text-primary"></span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="https://www.sonic.com/home"
							/>
						</div>
					</div>
					<div className="flex items-center gap-4 mt-6">
						<Switch id="asdfasf" />
						<div className="grid space-y-1" >
							<h3 className="text-sm font-medium text-white ">
								Social media and marketing
							</h3>
							<p className="text-xs text-grey-100">
								Let attendees know how to connect with you
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default OrganizerAccount;
