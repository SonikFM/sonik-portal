import DashboardHeader from "@/layout/DashboardHeader";
import FoldersIcon from "@/svgs/FoldersIcon";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EventForm from "./EventForm";
import TabMenu from "@/components/TabMenu";
import { useSelector } from "react-redux";
import steps from "./steps/config";
import { useTranslation } from "react-i18next";

const ModifyEventContainer = () => {
  const { t } = useTranslation("events");
  const location = useLocation();
  const { currentStep: currStep, steps: currentSteps } = useSelector(
    state => state.event,
  );
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeStep, setActiveTab] = useState(steps[0]);

  useEffect(() => {
    setActiveTab(steps[currStep - 1]);
  }, [currStep]);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const navigate = useNavigate();
  const onIconClick = () => {
    navigate(-1);
  };

  const onTabSelect = tab => {
    if (tab.id <= currStep || location.pathname.includes("edit-event"))
      setActiveTab({
        ...tab,
        desc: steps[tab.id - 1].desc,
        component: steps[tab.id - 1].component,
        validationSchema: steps[tab.id - 1].validationSchema,
      });
  };

  return (
    <>
      <DashboardHeader
        title={t("createAnEvent")}
        description={t("addYourEventDetailsBellow")}
        icon={<FoldersIcon className="w-5 h-5 text-grey-100" />}
        onIconClick={onIconClick}
        toggleDrawer={toggleDrawer}
      />
      <div className="max-w-[1100px]">
        <div className="flex flex-col md:flex-row p-4 md:p-8 md:justify-between gap-3">
          <TabMenu
            tabs={currentSteps || steps}
            activeTab={activeStep}
            currentTab={currStep}
            onSelect={onTabSelect}
            title={t("eventCreationSteps")}
          />
          <div className="w-full max-w-[680px]">
            <div className="hidden md:block pb-4 mb-6 border-b border-grey-light">
              <h3 className="font-medium text-white">
                {t(`steps.${activeStep.label}.title`)}
              </h3>
              <p className="text-grey-100">{activeStep.desc}</p>
            </div>
            <EventForm activeStep={activeStep} setActiveTab={setActiveTab}>
              {activeStep.component}
            </EventForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModifyEventContainer;
