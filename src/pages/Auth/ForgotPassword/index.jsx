import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "@/layout/Header";
import ForgotPassword from "./components/ForgotPassword";
import { useSelector } from "react-redux";
import Verfication from "./components/Verfication";
import SetPassword from "./components/SetPassword";

const ResetPassword = () => {
  const { t } = useTranslation("auth");
  const { verificationInProgress } = useSelector(state => state.app);

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
      <SetPassword />
      {/* {verificationInProgress.active ? <Verfication /> : <ForgotPassword />} */}
    </div>
  );
};
export default ResetPassword;
