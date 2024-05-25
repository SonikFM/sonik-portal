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
import AddAccountIcon from "@/svgs/AddAccountIcon";
import Header from "@/layout/Header";
import InputWithIcon from "@/components/InputWithIcon";
import MailIcon from "@/svgs/MailIcon";
import LockIcon from "@/svgs/LockIcon";
import InformationIcon from "@/svgs/InformationIcon";
import NameIcon from "@/svgs/NameIcon";

const schema = object({
	fullName: string().required(),
	email: string().email().required(),
	passowrd: string(),
});

const SignUp = () => {
	const navigate = useNavigate();
	const { t } = useTranslation("auth");
	const form = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			fullName: "",
			email: "",
			passowrd: "",
		},
	});

	const onSubmit = async (data) => {
		const a = await fakeAuthProvider.signin("qasim");
		navigate('/dashboard')
	};

	const actionButton = () => (
		<>
			<p>{t("already_have_an_account")}</p>
			<Link to="/login" className="border-b text-primary border-primary">
				{t("login")}
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
									<AddAccountIcon />
								</div>
							</Avatar>
							<CardTitle className="text-2xl font-medium text-white ">
								{t("create_a_new_account")}
							</CardTitle>
							<CardDescription className="text-base text-grey-100">
								{t("signup_details")}
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col gap-6 p-0 text-left ">
							<div className="flex flex-col gap-3">
								<Label className="font-medium" htmlFor="name">
									{t("full_name")}
									<span className="text-primary"> *</span>
								</Label>
								<InputWithIcon
									icon={<NameIcon />}
									name="name"
									placeholder="John doe"
								/>
								<Label className="font-medium" htmlFor="email">
									{t("email_address")}
									<span className="text-primary"> *</span>
								</Label>
								<InputWithIcon
									icon={<MailIcon />}
									name="email"
									placeholder="hello@alignui.com"
								/>
								<Label className="font-medium" htmlFor="password">
									{t("password")}
									<span className="text-primary"> *</span>
								</Label>
								<InputWithIcon
									icon={<LockIcon />}
									name="password"
									type="password"
									placeholder="• • • • • • • • • •"
								/>
								<div className="flex items-center w-full gap-2">
									<InformationIcon className="text-grey" />
									<p className="text-xs text-grey-100 ">
										{t("password_message")}
									</p>
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex flex-col p-0">
							<Button className="w-full h-10" type="submit">
								{t("submit")}
							</Button>
							<CardDescription className="mt-6 mb-1 text-sm">
								{t("by_clicking_register_you_agree_to_accept_apex_financials")}
							</CardDescription>
							<Link to="/forget-password" className="border-b" >{t('forget_password')}</Link>
						</CardFooter>
					</Card>
				</form>
			</Form>
		</div>
	);
};
export default SignUp;
