import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useTranslation } from "react-i18next";

const schema = object({
	email: string().email().required(),
	passowrd: string().required(),
});

const Auth = () => {
	const {t} = useTranslation('auth')
	const form = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			email: "",
			passowrd: "",
		},
	});

	const onSubmit = (data) => {
		console.log({ data });
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="w-full max-w-md mx-auto space-y-6"
			>
				<Card>
					<CardHeader>
						<Avatar className="w-16 h-16 mx-auto " >
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<CardTitle>{t('login')}</CardTitle>
						<CardDescription>{t('login_details')}</CardDescription>
					</CardHeader>
					<CardContent className="text-left">
						<Label htmlFor="email">{t('email_address')}</Label>
						<Input name="email" />
						<Label htmlFor="password">{t('password')}</Label>
						<Input name="password" />
					</CardContent>
					<CardFooter>
						<Button className="mx-auto">{t('submit')}</Button>
					</CardFooter>
				</Card>
			</form>
		</Form>
	);
};
export default Auth;
