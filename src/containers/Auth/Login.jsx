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
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/layout/Header";
import InputWithIcon from "@/components/InputWithIcon";
import MailIcon from "@/svgs/MailIcon";
import LockIcon from "@/svgs/LockIcon";
import UserIcon from "@/svgs/UserIcon";
import { login } from "@/store/global/actions";
import { useDispatch, useSelector } from "react-redux";
import ErrorIcon from "@/svgs/ErrorIcon";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { resetError } from "@/store/global/slice";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

const schema = z.object({
  password: z.string(),
  email: z.string().email("Invalid email"),
});

const Login = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("auth");
  const { error, isLoading } = useSelector(state => state.app);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      passowrd: "",
    },
  });
  const { formState, errors } = form;

  const onSubmit = async data => {
    dispatch(login(data));
  };

  useEffect(() => {
    dispatch(resetError());
  }, []);

  const actionButton = () => (
    <>
      <p>{t("dont_have_an_account")}</p>
      <Link to="/register" className="border-b text-primary border-primary">
        {t("register")}
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
                  <UserIcon />
                </div>
              </Avatar>
              <CardTitle className="text-2xl font-medium text-grey-100">
                {t("login_to_your_account")}
              </CardTitle>
              <CardDescription className="text-base">
                {t("login_details")}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 p-0 text-left ">
              <div className="flex flex-col gap-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="font-medium" htmlFor="email">
                        {t("email_address")}
                      </Label>
                      <InputWithIcon
                        icon={<MailIcon />}
                        error={errors?.email}
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
                      </Label>
                      <InputWithIcon
                        icon={<LockIcon />}
                        error={errors?.password}
                        type="password"
                        placeholder="• • • • • • • • • •"
                        {...field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-3 items-top">
                <div className="flex items-center w-full gap-2">
                  <Checkbox id="terms1" className="border-grey-light" />
                  <label htmlFor="terms1" className="text-sm">
                    {t("remember_me")}
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm border-b h-max text-grey-100 border-grey-100 min-w-max"
                >
                  {t("forget_password")}
                </Link>
              </div>
            </CardContent>
            {error && (
              <p className="flex items-center gap-3 p-2 rounded-md text-error">
                {" "}
                <ErrorIcon /> {error?.message}
              </p>
            )}

            <CardFooter className="p-0">
              <Button
                className="w-full h-10"
                type="submit"
                disabled={!formState.isValid || isLoading}
              >
                {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {t("submit")}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};
export default Login;
