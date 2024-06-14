
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
import Artist from "./elements/Artist";
import FlashLightIcon from "@/svgs/FlashLightIcon";
import TimerIcon from "@/svgs/TimerIcon";
import InputWithIcon from "@/components/InputWithIcon";
import CalendarIcon from "@/svgs/CalendarIcon";
import { AppDatePicker } from "@/components/AppDatePicker";
import ArtistTime from "./elements/ArtistTime";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileUpload from "@/components/FileUpload";
import { Textarea } from "@/components/ui/textarea";
import Ticket from "./elements/Ticket";
import { Switch } from "@/components/ui/switch";
import DollarIcon from "@/svgs/DollarIcon";
import Guest from "./elements/Guest";
import SearchSuggestionInput from "./elements/SearchSuggestionInput";
import BuildingIcon from "@/svgs/BuildingIcon";
import MultiSelect from "@/components/MutliSelect";
import UsersIcon from "@/svgs/UsersIcon";
import MapIcon from "@/svgs/MapIcon";
import Details from "./elements/Details";
import UploadIcon from "@/svgs/UploadIcon";
import bg from "@/assets/images/map-placeholder.png";
import SearchIcon from "@/svgs/SearchIcon";

const CreateVenue = () => {
	const [t, i18n] = useTranslation("dashboard");
	const [checked, setChecked] = useState(false);
	const onChange = () => {
		setChecked(!true);
	};
	return (
		<>
			<DashboardHeader
				title="Create an Venue"
				description="Add your venue deatails below"
				icon={<BuildingIcon className="w-5 h-5 text-grey-100" />}
			/>
			<div className="p-8">
				<div className="pb-4 mb-6 border-b border-grey-light">
					<h3 className="font-medium text-white">Basic</h3>
					<p className="text-grey-100">
						Get started by filling in the basics about your venue.
					</p>
				</div>
				<div className="space-y-8">
					<div className="flex flex-wrap gap-6 lg:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex justify-between text-white">
								<span>
									Venue ID <span className="text-primary">*</span>
								</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="Enter a unique Id..."
							/>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Venue name <span className="text-primary">*</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="Enter place name"
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-6 lg:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex justify-between text-white">
								<span>
									Venue Capacity <span className="text-primary">*</span>
								</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="100"
							/>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Venue Email <span className="text-primary">*</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="example@mail.com"
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-6 lg:flex-nowrap ">
						<div className="flex flex-col w-full gap-1">
							<Label className="flex justify-between text-white">
								<span>
									Search Address<span className="text-primary">*</span>
								</span>
							</Label>
							<InputWithIcon
								icon={<SearchIcon />}
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="Search Address"
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-6 lg:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex justify-between text-white">
								<span>
									Address Line 1<span className="text-primary">*</span>
								</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="+92-343-8831954"
							/>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex justify-between text-white">
								<span>
									Address Line 2<span className="text-primary">*</span>
								</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="+92-343-8831954"
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-6 lg:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Zip code <span className="text-primary">*</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="Enter zip code"
							/>
						</div>

						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Region <span className="text-primary">*</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="Enter region"
							/>
						</div>
					</div>

					<div className="flex flex-wrap gap-6 lg:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex justify-between text-white">
								<span>
									Country<span className="text-primary">*</span>
								</span>
							</Label>
							<Select
								placeholder="Select Country"
								hasSearch
								icon={<SearchIcon />}
								options={[{ label: "Pakistan", value: "pakistan" }]}
							/>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								phone number <span className="text-primary">*</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="+12-234-5678-9"
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-6 lg:flex-nowrap ">
						<div className="flex flex-col w-full gap-1">
							<Label className="flex justify-between text-white">
								<span>
									Venue description
									<span className="ml-1 text-primary">*</span>
								</span>
								<span className="text-xs font-medium text-grey-100">
									50/250
								</span>
							</Label>
							<Textarea
								placeholder="Type your message here."
								className="bg-transparent border-grey-light"
							/>
						</div>
					</div>

					<div className="flex flex-wrap gap-6 ">
						<div className="flex flex-col w-full gap-1">
							<div className="flex justify-between w-full px-4 py-4 mt-2 lg:w-1/2 bg-grey-200 rounded-2xl h-fit">
								<div>
									<Label className="text-white">Venue Status</Label>
									<p className="text-xs text-grey-100">
										Enable so that the venue will be accessiable
									</p>
								</div>
								<Switch id="take-seat" />
							</div>
						</div>
					</div>
				</div>
				{/* <div className="pb-4 mt-10 mb-6 border-b border-grey-light">
					<h3 className="font-medium text-white">Venue Address</h3>
					<p className="text-grey-100">Help users to find your Venue</p>
				</div>
				<div className="space-y-8">
					<div className="flex flex-wrap gap-6 lg:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex justify-between text-white">
								<span>
									Country <span className="text-primary">*</span>
								</span>
							</Label>
							<Select
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="United States"
								// icon={<TimerIcon className="text-grey-100" />}
							/>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Street Address <span className="text-primary">*</span>
							</Label>
							<InputWithIcon
								icon={<MapIcon />}
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="Start typing your address to get suggestions"
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-6 lg:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex justify-between text-white">
								<span>
									Street Address Line 2 <span className="text-primary">*</span>
								</span>
							</Label>
							<InputWithIcon
								icon={<MapIcon />}
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="Apt, suite, unit, building, floor, etc..."
							/>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								City <span className="text-primary">*</span>
							</Label>
							<Select
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="Enter city name"
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-6 lg:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex justify-between text-white">
								<span>
									Postcode/ZipCode <span className="text-primary">*</span>
								</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="California"
							/>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex justify-between text-white">
								<span>
									State <span className="text-primary">*</span>
								</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="CA - California"
							/>
						</div>
					</div>
				</div>
				<div className="pb-4 mt-10">
					<h3 className="font-medium text-white">
						Show your location on Google Maps
					</h3>
					<p className="text-grey-100">
						Drag the pin to the correct location on the map.
					</p>
				</div>
				<div className="space-y-8">
					<div className="min-h-[448px] rounded-2xl">
						<img src={bg} alt="map" className="w-full h-full" />
					</div>
				</div>
				<div className="pb-4 mt-10 ">
					<h3 className="font-medium text-white">Image</h3>
					<p className="text-grey-100">Upload an image about your event.</p>
				</div>
				<div className="space-y-8">
					<FileUpload wrapperClass="min-h-[448px] items-center justify-center flex">
						<div className="flex flex-col items-center justify-center w-full h-full">
							<UploadIcon className="text-grey-100" />
							<h3 className="mt-5 text-sm font-medium text-white">
								Choose a file or drag & drop it here.
							</h3>
							<p className="text-xs text-grey-100 mt-1.5 mb-4">
								JPEG file only & size should be (768x768) pixels
							</p>
							<Button variant="outline" size="xs" className="px-3">
								Browse File
							</Button>
						</div>
					</FileUpload>
				</div>
				<div className="pb-4 mt-10 mb-6 border-b border-grey-light">
					<h3 className="font-medium text-white">More Venue Details</h3>
					<p className="text-grey-100">Enter more details about your venue</p>
				</div>
				<div className="flex flex-col gap-4 pb-6 border-b border-grey-light">
					<Details title="Free Parking on Premises" />
					<Details title="Free Street Parking" />
					<Details title="Paid Parking on Premises" />
					<Details title="Paid Parking off Premises" />
				</div>
				<div className="flex flex-col gap-4 pt-6 pb-5">
					<Details
						title="Age restrictions at the venue"
						description="Specify if your venue has age limits for event attendees."
					/>
				</div> */}
				<div className="flex justify-end gap-3 py-8 mb-4 border-t mt-14 border-grey-light">
					<Button variant="outline" className="w-40">
						Cancel
					</Button>
					<Button className="w-40">Done</Button>
				</div>
			</div>
		</>
	);
};
export default CreateVenue;
