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
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import ConfirmEmailIcon from "@/svgs/ConfirmEmailIcon";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resendOTP, verifyOTP } from "@/store/global/actions";
import { twMerge } from "tailwind-merge";

const Verfication = () => {
  const inputOtpRef = useRef(null);
  const dispatch = useDispatch();
  const { verificationInProgress, isLoading, error } = useSelector(
    state => state.app,
  );
  const { t } = useTranslation("auth");

  const onSubmit = async event => {
    event.preventDefault();
    dispatch(
      verifyOTP({
        otp: inputOtpRef.current.value,
        requestId: verificationInProgress.requestId,
      }),
    );
  };

  const resendOTPCode = async () => {
    dispatch(resendOTP({ requestId: verificationInProgress.requestId }));
  };

  return (
    <form onSubmit={onSubmit} className="w-[750px] p-4">
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
              {verificationInProgress.email}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 p-0 text-left ">
          <InputOTP maxLength={6} className="" ref={inputOtpRef}>
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPGroup key={index}>
                <InputOTPSlot
                  className={twMerge(
                    "w-20 h-16 text-2xl border-grey-light ",
                    error && "border-[red]",
                  )}
                  index={index}
                />
              </InputOTPGroup>
            ))}
          </InputOTP>
          {error && <p className="text-xs text-[red]">{error.message}</p>}
        </CardContent>
        <CardFooter className="flex flex-col p-0">
          <Button className="w-full h-10" type="submit">
            {t("submit_code")}
          </Button>
          <CardDescription className="mt-6 mb-1 text-sm text-center text-grey-100">
            {t("experiencing_issues_receiving_the_code")}
          </CardDescription>
          <Link to="#" className="border-b" onClick={resendOTPCode}>
            {t("resend_code")}
          </Link>
        </CardFooter>
      </Card>
    </form>
  );
};
export default Verfication;
