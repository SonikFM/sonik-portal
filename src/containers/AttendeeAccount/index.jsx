import { Select } from "@/components/Select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DashboardHeader from "@/layout/DashboardHeader";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppDatePicker } from "@/components/AppDatePicker";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/FileUpload";
import Profile from "./elements/Profile";
import UploadIcon from "@/svgs/UploadIcon";
import { useNavigate } from "react-router-dom";

const AttendeeAccount = () => {
	const [t, i18n] = useTranslation("dashboard");
	const [checked, setChecked] = useState(false);
	const onChange = () => {
		startTransition(() => {
			setChecked(!checked);
		});
	};

	const navigate = useNavigate()
	const onIconClick=()=>{
		navigate(-1)
	}
	return (
		<>
			<DashboardHeader
				title="Attendee Account"
				description="For create an account full-fill the required informations"
				icon={<ChevronLeft className="w-5 h-5 text-grey-100" />}
				onIconClick={onIconClick}
			>
				<Button variant="outline"> Cancel </Button>
				<Button> Create Account </Button>
			</DashboardHeader>
			<div className="p-4 space-y-6  md:p-8">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 ">
					<div className="grid gap-1">
						<Label className="flex justify-between text-white">
							<span>
								First Name <span className="text-primary">*</span>
							</span>
							<span className="text-xs font-medium text-grey-100">1/7</span>
						</Label>
						<Input
							className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
							placeholder="Jhone Doe"
						/>
					</div>
					<div className="grid gap-1">
						<Label className="text-white">
							Middle Name <span className="text-primary"></span>
						</Label>
						<Input
							className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
							placeholder="Jhone Doe"
						/>
					</div>
					<div className="grid gap-1">
						<Label className="text-white">
							Last Name <span className="text-primary">*</span>
						</Label>
						<Input
							className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
							placeholder="Jhone Doe"
						/>
					</div>

					<div className="grid gap-1">
						<Label className="text-white">
							Phone Number<span className="text-primary">*</span>
						</Label>
						<Input
							className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
							placeholder="+57 000 0000"
						/>
					</div>
					<div className="grid gap-1">
						<Label className="text-white">
							Email Address <span className="text-primary">*</span>
						</Label>
						<Input
							className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
							placeholder="Jhone Doe"
						/>
					</div>
					<div className="grid gap-1">
						<Label className="text-white">
							Birthdate<span className="text-primary">*</span>
						</Label>
						<AppDatePicker
							icon={null}
							className="text-white bg-transparent border-grey-light rounded-[10px] placeholder:text-grey-100"
							placeholder="Apr 16,2024"
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
					<div className="grid gap-1">
						<Label className="text-white">
							Gender<span className="text-primary">*</span>
						</Label>
						<Select
							icon={null}
							className="rounded-[10px]"
							placeholder="Gender"
							options={[
								{ value: "male", label: "Male" },
								{ value: "female", label: "Female" },
								{ value: "other", label: "Other" },
							]}
						/>
					</div>
					<div className="grid gap-1">
						<Label className="text-white">
							Status <span className="text-primary">*</span>
						</Label>
						<Select
							icon={null}
							className="rounded-[10px]"
							placeholder="Status"
							options={[
								{ value: "active", label: "Active" },
								{ value: "inactive", label: "Inactive" },
							]}
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
			</div>
		</>
	);
};
export default AttendeeAccount;
