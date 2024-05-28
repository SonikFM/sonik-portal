import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import { fakeAuthProvider } from "@/lib/auth";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/layout/Header";
import InputWithIcon from "@/components/InputWithIcon";
import MailIcon from "@/svgs/MailIcon";
import DoorLockIcon from "@/svgs/DoorLockIcon";

const schema = object({
	email: string().email().required(),
});

const ForgetPassword = () => {
	const navigate = useNavigate();
	const { t } = useTranslation("auth");
	const form = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (data) => {
		console.log({ data });
		const a = await fakeAuthProvider.signin("qasim");
		navigate('/verification')
	};

	const actionButton = () => (
		<>
			<p>{t("changed_your_mind")}</p>
			<Link to="/login" className="border-b text-primary border-primary">
				{t("go_back")}
			</Link>
		</>
	);
	return (
		<div className="">
			<Header actionButton={actionButton()}></Header>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-4">
					<Card className="p-8 space-y-6 text-white bg-grey-dark rounded-5 border-grey-light">
						<CardHeader className="px-0 pt-0 pb-6 text-center border-b border-grey-light">
							<Avatar className="flex items-center justify-center w-24 h-24 p-2 mx-auto rounded-full bg-gradient-to-b from-grey-light to-grey/0">
								<div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-grey-light bg-grey-dark text-grey-100">
									<DoorLockIcon />
								</div>
							</Avatar>
							<CardTitle className="text-2xl font-medium text-grey-100">
								{t("reset_password")}
							</CardTitle>
							<CardDescription className="text-base">
								{t("enter_your_email_to_reset_your_password")}
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col gap-6 p-0 text-left ">
							<div className="flex flex-col gap-3">
								<Label className="font-medium" htmlFor="email">
									{t("email_address")}
									<span className="text-primary"> *</span>
								</Label>
								<InputWithIcon
									icon={<MailIcon />}
									name="email"
									placeholder="hello@alignui.com"
								/>
							</div>
						</CardContent>
						<CardFooter className="flex flex-col p-0">
							<Button className="w-full h-10" type="submit">
								{t("reset_password")}
							</Button>
							<CardDescription className="mt-6 mb-1 text-sm text-center">
								{t("dont_have_access_anymore")}
							</CardDescription>
							<Link to="/forget-password" className="border-b">
								{t("try_another")}
							</Link>
						</CardFooter>
					</Card>
				</form>
			</Form>
		</div>
	);
};
export default ForgetPassword;
