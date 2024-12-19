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
import { Loader2 } from "lucide-react";
import InputWithIcon from "@/components/InputWithIcon";
import MailIcon from "@/svgs/MailIcon";
import DoorLockIcon from "@/svgs/DoorLockIcon";
import ErrorIcon from "@/svgs/ErrorIcon";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "../../schemas/signup.schema";
import { requestReset } from "@/store/global/actions";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
  const { t } = useTranslation("auth");
  const dispatch = useDispatch();
  const { isLoading, message, error } = useSelector(state => state.app);
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { formState, errors } = form;

  const onSubmit = async data => {
    dispatch(requestReset(data));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-md w-full p-4"
      >
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
          {(!isLoading || message) && (
            <div className="flex">
              <Label
                className="font-normal text-center text-primary "
                htmlFor="message"
              >
                {message}
              </Label>
            </div>
          )}
          <CardContent className="flex flex-col gap-6 p-0 text-left ">
            <div className="flex flex-col gap-3">
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
                      name="email"
                      placeholder="hello@alignui.com"
                      {...field}
                      error={errors?.email}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
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
              {t("reset_password")}
            </Button>
            <CardDescription className="mt-6 mb-1 text-sm text-center">
              {t("dont_have_access_anymore")}
            </CardDescription>
            <Link to="/forgot-password" className="border-b">
              {t("try_another")}
            </Link>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default ForgotPassword;
