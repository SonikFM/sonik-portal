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
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/layout/Header";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import ConfirmEmailIcon from "@/svgs/ConfirmEmailIcon";


const Verfication = () => {
	const navigate = useNavigate();
	const { t } = useTranslation("auth");

	const onSubmit = async (data) => {
		console.log({ data });
		navigate('/dashboard')
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

			<Form>
				<form onSubmit={onSubmit} className="w-full p-4">
					<Card className="p-8 space-y-6 text-white bg-grey-dark rounded-5 border-grey-light">
						<CardHeader className="px-0 pt-0 pb-6 text-center border-b border-grey-light">
							<Avatar className="flex items-center justify-center w-24 h-24 p-2 mx-auto rounded-full bg-gradient-to-b from-grey-light to-grey/0">
								<div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-grey-light bg-grey-dark text-grey-100">
									<ConfirmEmailIcon />
								</div>
							</Avatar>
							<CardTitle className="text-2xl font-medium text-white">
								{t("enter_verification_code")}
							</CardTitle>
							<CardDescription className="text-base">
								{t("we_have_sent_a_code_to")}{" "}
								<span className="font-medium text-white">
									arthur@alignui.com
								</span>
							</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col items-center gap-6 p-0 text-left ">
							<InputOTP maxLength={4} className="">
								<InputOTPGroup  >
									<InputOTPSlot className="w-20 h-16 text-2xl border-grey-light " index={0} />
								</InputOTPGroup>
								<InputOTPGroup  >
									<InputOTPSlot className="w-20 h-16 text-2xl border-grey-light " index={1} />
								</InputOTPGroup>
								<InputOTPGroup  >
									<InputOTPSlot className="w-20 h-16 text-2xl border-grey-light " index={2} />
								</InputOTPGroup>
								<InputOTPGroup  >
									<InputOTPSlot className="w-20 h-16 text-2xl border-grey-light " index={3} />
								</InputOTPGroup>
							</InputOTP>
						</CardContent>
						<CardFooter className="flex flex-col p-0">
							<Button className="w-full h-10" type="submit">
								{t("submit_code")}
							</Button>
							<CardDescription className="mt-6 mb-1 text-sm text-center text-grey-100">
								{t("experiencing_issues_receiving_the_code")}
							</CardDescription>
							<Link to="#" className="border-b">
								{t("resend_code")}
							</Link>
						</CardFooter>
					</Card>
				</form>
			</Form>
		</div>
	);
};
export default Verfication;
