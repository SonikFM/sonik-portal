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

import InputWithIcon from "@/components/InputWithIcon";
import DoorLockIcon from "@/svgs/DoorLockIcon";
import { useDispatch, useSelector } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import ErrorIcon from "@/svgs/ErrorIcon";
import LockIcon from "@/svgs/LockIcon";
import { resetPasswordSchema } from "../../schemas/resetPassword.schema";
import { resetPassword } from "@/store/global/actions";

const SetPassword = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("auth");
  const { isLoading, message, error, verificationInProgress } = useSelector(
    state => state.app,
  );
  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { errors } = form;

  const onSubmit = async data => {
    dispatch(
      resetPassword({
        password: data.password,
        requestId: verificationInProgress.requestId,
      }),
    );
  };

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-4">
          <Card className="p-8 space-y-6 text-white bg-grey-dark rounded-5 border-grey-light">
            <CardHeader className="px-0 pt-0 pb-6 text-center border-b border-grey-light">
              <Avatar className="flex items-center justify-center w-24 h-24 p-2 mx-auto rounded-full bg-gradient-to-b from-grey-light to-grey/0">
                <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-grey-light bg-grey-dark text-grey-100">
                  <DoorLockIcon />
                </div>
              </Avatar>
              {!isLoading && message === "success" ? (
                <div>
                  <CardTitle className="block mt-6 text-2xl font-medium text-grey-100">
                    {t("update_successfully")}
                  </CardTitle>
                </div>
              ) : (
                <>
                  <CardTitle className="text-2xl font-medium text-grey-100">
                    {t("reset_password")}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {t("enter_your_email_to_reset_your_password")}
                  </CardDescription>
                </>
              )}
            </CardHeader>

            <CardContent className="flex flex-col gap-6 p-0 text-left ">
              {!isLoading && message === "success" ? (
                <CardDescription className="text-base text-center">
                  {t("success_reset_message")}
                </CardDescription>
              ) : (
                <>
                  <div className="flex flex-col gap-3">
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
                            placeholder="Enter new password"
                            {...field}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <Label
                            className="font-medium"
                            htmlFor="confirmPassword"
                          >
                            {t("confirm_password")}
                            <span className="text-primary"> *</span>
                          </Label>
                          <InputWithIcon
                            icon={<LockIcon />}
                            error={errors?.confirmPassword}
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm new password"
                            {...field}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}
            </CardContent>
            {error && (
              <p className="flex items-center gap-3 p-2 rounded-md text-error">
                <ErrorIcon /> {error?.message}
              </p>
            )}
            <CardFooter className="flex flex-col p-0">
              {!isLoading && message === "success" ? (
                <Link
                  to="/login"
                  className="w-full h-10 px-4 py-2 font-medium text-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t("login")}
                </Link>
              ) : (
                <>
                  <Button
                    className="w-full h-10"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading && (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    )}
                    {t("reset_password")}
                  </Button>
                  <CardDescription className="mt-6 mb-1 text-sm text-center">
                    {t("dont_have_access_anymore")}
                  </CardDescription>
                  <Link to="/forgot-password" className="border-b">
                    {t("try_another")}
                  </Link>
                </>
              )}
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
};
export default SetPassword;
