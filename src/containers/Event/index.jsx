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
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
	const [t, i18n] = useTranslation("dashboard");
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setDrawerOpen(!isDrawerOpen);
	};
	const [checked, setChecked] = useState(false);
	const onChange = () => {
		setChecked(!true);
	};
	const navigate = useNavigate();
	const onIconClick = () => {
		navigate(-1);
	};

	return (
		<>
			<DashboardHeader
				title="Create an Event"
				description="Add your event deatails below"
				icon={<FoldersIcon className="w-5 h-5 text-grey-100" />}
				onIconClick={onIconClick}
				toggleDrawer={toggleDrawer}
			></DashboardHeader>
			<div className="p-4 md:p-8" >
				<div className="pb-4 mb-6 border-b border-grey-light">
					<h3 className="font-medium text-white">Basic</h3>
					<p className="text-grey-100">
						Get started by filling in the basics about your event.
					</p>
				</div>
				<div className="space-y-8">
					<div className="flex flex-wrap gap-6 md:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex justify-between text-white">
								<span>
									Event ID <span className="text-primary">*</span>
								</span>
								<span className="text-xs font-medium text-grey-100">1/7</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="Enter a unique Id..."
							/>
							<span className="flex gap-1 text-xs text-grey-100">
								<InformationIcon />
								Must include a special character
							</span>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Type <span className="text-primary">*</span>
							</Label>
							<Select
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="Enter a unique Id..."
								icon={<FlashLightIcon className="text-grey-100" />}
								options={[
									{ value: "concert", label: "Concert" },
									{ value: "dj", label: "DJ" },
									{ value: "party", label: "Party" },
								]}
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-6 md:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex justify-between text-white">
								<span>
									Title<span className="text-primary">*</span>
								</span>
								<span className="text-xs font-medium text-grey-100">12/50</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="Enter a unique Id..."
							/>
							<span className="flex gap-1 text-xs text-grey-100">
								<InformationIcon />
								Must include a special character
							</span>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Genre <span className="text-primary">*</span>
							</Label>
							<div className="flex flex-wrap gap-3">
								<div className="flex w-[calc(25%-12px)] gap-2">
									<Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
									<Label className="text-white">Rock</Label>
								</div>
								<div className="flex w-[calc(25%-12px)] gap-2">
									<Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
									<Label className="text-white">Rock</Label>
								</div>
								<div className="flex w-[calc(25%-12px)] gap-2">
									<Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
									<Label className="text-white">Rock</Label>
								</div>
								<div className="flex w-[calc(25%-12px)] gap-2">
									<Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
									<Label className="text-white">Rock</Label>
								</div>
								<div className="flex w-[calc(25%-12px)] gap-2">
									<Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
									<Label className="text-white">Rock</Label>
								</div>
								<div className="flex w-[calc(25%-12px)] gap-2">
									<Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
									<Label className="text-white">Rock</Label>
								</div>
								<div className="flex w-[calc(25%-12px)] gap-2">
									<Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
									<Label className="text-white">Rock</Label>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap gap-6 md:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex text-white justify-betweeb">
								Artist<span className="text-primary">*</span>
							</Label>
							<SearchInput
								className="h-10 "
								placeholder="Search"
								onChange={(event) => console.log({ event })}
								value={""}
								showSuggesstions={false}
							/>
							<div className="px-4 py-1 mt-2 bg-grey-200 rounded-2xl">
								<Artist className="py-4 border-b border-grey-light " />
								<Artist className="py-4 border-b border-grey-light " />
								<Artist className="" />
							</div>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Genre <span className="text-primary">*</span>
							</Label>
							<SearchInput
								className="h-10 "
								placeholder="The Great Hall"
								onChange={(event) => console.log({ event })}
								value={""}
								showSuggesstions={false}
							/>
						</div>
					</div>
				</div>
				<div className="pb-4 mt-10 mb-6 border-b border-grey-light">
					<h3 className="font-medium text-white">Timeline</h3>
					<p className="text-grey-100">
						Set the timing of your event, when it’s on sale and the running
						order.
					</p>
				</div>
				<div className="space-y-8">
					<div className="flex flex-wrap gap-6 md:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex justify-between text-white">
								<span>
									Timezone <span className="text-primary">*</span>
								</span>
							</Label>
							<Select
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="COT (Colombian Time) - UTC-5"
								icon={<TimerIcon className="text-grey-100" />}
							/>
							<span className="flex gap-1 text-xs text-grey-100">
								<InformationIcon />
								Must include a special character
							</span>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Announcement <span className="text-primary">*</span>
							</Label>
							<AppDatePicker
								icon={<CalendarIcon className="mr-3 text-grey-100" />}
								className="text-white bg-transparent border-grey-light rounded-[10px] placeholder:text-grey-100"
								placeholder="Fri, Apr 16,2024 12:00 PM"
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-6 md:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Event on sale <span className="text-primary">*</span>
							</Label>
							<AppDatePicker
								icon={<CalendarIcon className="mr-3 text-grey-100" />}
								className="text-white bg-transparent border-grey-light rounded-[10px] placeholder:text-grey-100"
								placeholder="Fri, Apr 16,2024 12:00 PM"
							/>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Event off sale <span className="text-primary">*</span>
							</Label>
							<AppDatePicker
								icon={<CalendarIcon className="mr-3 text-grey-100" />}
								className="text-white bg-transparent border-grey-light rounded-[10px] placeholder:text-grey-100"
								placeholder="Fri, Apr 16,2024 12:00 PM"
							/>
						</div>
					</div>
					<div className="flex flex-wrap gap-6 md:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Event start <span className="text-primary">*</span>
							</Label>
							<AppDatePicker
								icon={<CalendarIcon className="mr-3 text-grey-100" />}
								className="text-white bg-transparent border-grey-light rounded-[10px] placeholder:text-grey-100"
								placeholder="Fri, Apr 16,2024 12:00 PM"
							/>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Event end<span className="text-primary">*</span>
							</Label>
							<AppDatePicker
								icon={<CalendarIcon className="mr-3 text-grey-100" />}
								className="text-white bg-transparent border-grey-light rounded-[10px] placeholder:text-grey-100"
								placeholder="Fri, Apr 16,2024 12:00 PM"
							/>
						</div>
					</div>
				</div>
				<div className="pb-4 mt-10 mb-6 border-b border-grey-light">
					<h3 className="font-medium text-white">Lineup</h3>
					<p className="text-grey-100">
						From open to close and every performance in-between, set the order
						and timing of your event
					</p>
				</div>
				<div className="space-y-8">
					<div className="flex flex-wrap gap-6 xl:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 xl:w-1/2">
							<Label className="flex justify-between text-white">
								<span>
									Timezone <span className="text-primary">*</span>
								</span>
							</Label>
							<div className="px-4 py-1 bg-grey-200 rounded-2xl">
								<ArtistTime className="py-4 border-b border-grey-light " />
								<ArtistTime className="py-4 border-b border-grey-light " />
								<ArtistTime className="" />
							</div>
							<Button
								variant="outline"
								className="gap-1 mt-3 bg-transparent w-36"
							>
								<PlusIcon /> Add a time{" "}
							</Button>
						</div>
						<div className="flex flex-col w-full gap-1 xl:w-1/2">
							<Label className="text-white">
								Announcement <span className="text-primary">*</span>
							</Label>

							<InputWithIcon
								icon={<TimerIcon className="text-grey-100" />}
								className="text-white bg-grey-200 border-grey-200 placeholder:text-grey-100 rounded-[10px] "
								placeholder="12:00 "
							/>
						</div>
					</div>
				</div>
				<div className="pb-4 mt-10 mb-6 border-b border-grey-light">
					<h3 className="font-medium text-white">Image</h3>
					<p className="text-grey-100">Upload an image about your event.</p>
				</div>
				<div className="space-y-8">
					<Tabs defaultValue="a1" className="w-full ">
						<TabsList className="flex flex-wrap justify-start w-full h-auto p-1 rounded-md bg-grey-200 w-fit ml-o ">
							<TabsTrigger className="px-4 rounded-md" value="a1">
								Billboard
							</TabsTrigger>
							<TabsTrigger className="px-4 rounded-md" value="a2">
								Ticket
							</TabsTrigger>
							<TabsTrigger className="px-4 rounded-md" value="a3">
								Discover Feed
							</TabsTrigger>
							<TabsTrigger className="px-4 rounded-md" value="a4">
								Event Page
							</TabsTrigger>
							<TabsTrigger className="px-4 rounded-md" value="a5">
								Search results
							</TabsTrigger>
						</TabsList>
						<TabsContent
							value="a1"
							className="h-[448px] w-full bg-grey-200 rounded-lg mt-4"
						>
							<FileUpload />
						</TabsContent>
						<TabsContent
							value="a2"
							className="h-[448px] w-full bg-grey-200 rounded-lg mt-4"
						>
							<FileUpload />
						</TabsContent>
						<TabsContent
							value="a3"
							className="h-[448px] w-full bg-grey-200 rounded-lg mt-4"
						>
							<FileUpload />
						</TabsContent>
						<TabsContent
							value="a4"
							className="h-[448px] w-full bg-grey-200 rounded-lg mt-4"
						>
							<FileUpload />
						</TabsContent>
						<TabsContent
							value="a5"
							className="h-[448px] w-full bg-grey-200 rounded-lg mt-4"
						>
							<FileUpload />
						</TabsContent>
					</Tabs>
				</div>
				<div className="pb-4 mt-10 mb-6 border-b border-grey-light">
					<h3 className="font-medium text-white">Information</h3>
					<p className="text-grey-100">
						Tell your fans about your event and set an age limit
					</p>
				</div>
				<div className="space-y-8">
					<div className="flex flex-col w-full gap-1">
						<Label className="flex justify-between text-white">
							<span>
								Description
								<span className="ml-1 text-primary">*</span>
							</span>
							<span className="text-xs font-medium text-grey-100">
								500/1500
							</span>
						</Label>
						<Textarea
							placeholder="Type your message here."
							className="bg-transparent border-grey-light"
						/>
					</div>
					<div className="flex flex-col w-full gap-1">
						<Label className="flex justify-between text-white">
							<span>
								FAQS
								<span className="ml-1 text-primary">*</span>
							</span>
							<span className="text-xs font-medium text-grey-100">
								500/1500
							</span>
						</Label>
						<Textarea
							placeholder="Type your message here."
							className="bg-transparent border-grey-light"
						/>
					</div>
					<div className="flex flex-wrap gap-6 md:flex-nowrap ">
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="flex text-white">
								<span>
									Age Limit <span className="text-primary">*</span>
								</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="This is 21+ event"
							/>
						</div>
						<div className="flex flex-col w-full gap-1 lg:w-1/2">
							<Label className="text-white">
								Presented by <span className="text-primary">*</span>
							</Label>
							<Input
								className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
								placeholder="Avant Gradner"
							/>
						</div>
					</div>
					<div className="flex flex-col w-full gap-1">
						<Label className="flex justify-between text-white">
							<span>
								Purchase confirmation email
								<span className="ml-1 text-primary">*</span>
							</span>
							<span className="text-xs font-medium text-grey-100">
								500/1500
							</span>
						</Label>
						<Textarea
							placeholder="Type your message here."
							className="bg-transparent border-grey-light"
						/>
					</div>
					<div className="flex flex-col w-full gap-1">
						<Label className="flex justify-between text-white">
							<span>
								Days of event Email
								<span className="ml-1 text-primary">*</span>
							</span>
							<span className="text-xs font-medium text-grey-100">
								500/1500
							</span>
						</Label>
						<Textarea
							placeholder="Type your message here."
							className="bg-transparent border-grey-light"
						/>
					</div>
				</div>
				<div className="pb-4 mt-10 mb-6 border-b border-grey-light">
					<h3 className="font-medium text-white">Tickets</h3>
					<p className="text-grey-100">
						Create ticket types, set the price and limit how many tickets people
						can buy.
					</p>
				</div>

				<div className="flex flex-wrap gap-6 md:flex-nowrap ">
					<div className="flex justify-between w-full px-6 py-1 py-4 mt-2 lg:w-1/2 bg-grey-200 rounded-2xl h-fit">
						<div>
							<Label className="text-white">This is a seated event</Label>
							<p className="text-xs text-grey-100">
								Enable so that you can access seatmaps
							</p>
						</div>
						<Switch id="take-seat" />
					</div>
					<div className="flex flex-col w-full gap-1 lg:w-1/2">
						<Label className="text-white">
							Currency<span className="text-primary">*</span>
						</Label>
						<Select
							icon={<DollarIcon className="mr-1 text-grey-100" />}
							className="rounded-[10px]"
							placeholder="USD"
							options={[]}
						/>
						<Label className="text-white mt-7">
							Ticket Limit Per Person<span className="text-primary">*</span>
						</Label>
						<Input
							className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
							placeholder="6"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full gap-1 pb-4 mt-10 ">
					<Label className="text-white">
						Ticket Types<span className="text-primary">*</span>
					</Label>
					<div className="px-4 py-1 mt-2 bg-grey-200 rounded-2xl">
						<Ticket className="py-4 border-b border-grey-light " />
						<Ticket className="py-4 border-b border-grey-light " />
						<Ticket className="" />
					</div>
					<Button variant="outline" className="gap-1 mt-3 bg-transparent w-36">
						<PlusIcon />
						Add a Ticket type
					</Button>
				</div>
				<div className="pb-4 mt-10 mb-6 border-b border-grey-light">
					<h3 className="font-medium text-white">Settings</h3>
					<p className="text-grey-100">
						Assign contact details and reporting access.
					</p>
				</div>
				<div className="flex flex-wrap gap-6 mb-6 md:flex-nowrap">
					<div className="flex flex-col w-full gap-1 lg:w-1/2">
						<Label className="text-white">
							Genre <span className="text-primary">*</span>
						</Label>
						<SearchSuggestionInput
							className="h-10 "
							placeholder="The Great Hall"
							onChange={(event) => console.log({ event })}
							value={""}
							showSuggesstions={false}
						/>
					</div>
					<div className="flex flex-col w-full gap-1 lg:w-1/2">
						<Label className="flex text-white justify-betweeb">
							Guest Access<span className="text-primary">*</span>
						</Label>
						<div className="px-4 py-1 mt-2 bg-grey-200 rounded-2xl">
							<Guest className="py-4" />
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full gap-1">
					<Label className="flex justify-between text-white">
						<span>
							Internal Notes
							<span className="ml-1 text-primary">*</span>
						</span>
						<span className="text-xs font-medium text-grey-100">500/1500</span>
					</Label>
					<Textarea
						placeholder="Type your message here."
						className="bg-transparent border-grey-light"
					/>
				</div>
				<div className="flex justify-end gap-3 py-8 mb-4 border-t mt-14 border-grey-light">
					<Button variant="outline" className="w-40">
						Cancel
					</Button>
					<Button className="w-40">Continue</Button>
				</div>
			</div>
		</>
	);
};
export default CreateEvent;
