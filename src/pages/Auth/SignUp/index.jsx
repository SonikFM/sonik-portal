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
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AddAccountIcon from "@/svgs/AddAccountIcon";
import Header from "@/layout/Header";
import InputWithIcon from "@/components/InputWithIcon";
import MailIcon from "@/svgs/MailIcon";
import LockIcon from "@/svgs/LockIcon";
import InformationIcon from "@/svgs/InformationIcon";
import NameIcon from "@/svgs/NameIcon";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "@/store/global/actions";
import { useDispatch, useSelector } from "react-redux";
import ErrorIcon from "@/svgs/ErrorIcon";
import { resetError } from "@/store/global/slice";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { registerSchema } from "../schemas/signup.schema";

const SignUp = () => {
  const { error, isLoading } = useSelector(state => state.app);
  const dispatch = useDispatch();
  const { t } = useTranslation("auth");
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const { formState, errors } = form;

  useEffect(() => {
    dispatch(resetError());
  }, []);

  const onSubmit = async data => {
    function generateRandomPhoneNumber() {
      const getRandomDigit = () => Math.floor(Math.random() * 10);

      let phoneNumber = "";

      for (let i = 0; i < 10; i++) {
        phoneNumber += getRandomDigit();
      }

      return phoneNumber;
    }
    dispatch(signup({ ...data, phone: generateRandomPhoneNumber() }));
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
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="font-medium" htmlFor="name">
                        {t("first_name")}
                        <span className="text-primary"> *</span>
                      </Label>
                      <InputWithIcon
                        icon={<NameIcon />}
                        error={errors?.name}
                        placeholder="John"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="font-medium" htmlFor="name">
                        {t("last_name")}
                        <span className="text-primary"> *</span>
                      </Label>
                      <InputWithIcon
                        icon={<NameIcon />}
                        error={errors?.name}
                        placeholder="Doe"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="font-medium" htmlFor="email">
                        {t("email_address")}
                        <span className="text-primary"> *</span>
                      </Label>
                      <InputWithIcon
                        icon={<MailIcon />}
                        error={errors?.email}
                        name="email"
                        placeholder="hello@alignui.com"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="font-medium" htmlFor="password">
                        {t("password")}
                        <span className="text-primary"> *</span>
                      </Label>
                      <InputWithIcon
                        icon={<LockIcon />}
                        error={errors?.password}
                        name="password"
                        type="password"
                        placeholder="• • • • • • • • • •"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center w-full gap-2">
                  <InformationIcon className="text-grey" />
                  <p className="text-xs text-grey-100 ">
                    {t("password_message")}
                  </p>
                </div>
              </div>
            </CardContent>
            {error && (
              <p className="flex items-center gap-3 p-2 rounded-md text-error">
                <ErrorIcon /> {error?.message}
              </p>
            )}
            <CardFooter className="flex flex-col p-0">
              <Button
                className="w-full h-10"
                type="submit"
                disabled={!formState.isValid || isLoading}
              >
                {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {t("submit")}
              </Button>
              <CardDescription className="mt-6 mb-1 text-sm">
                {t("by_clicking_register_you_agree_to_accept_apex_financials")}
              </CardDescription>
              <Link to="/forget-password" className="border-b">
                {t("forget_password")}
              </Link>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};
export default SignUp;
