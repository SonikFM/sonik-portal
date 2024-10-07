import DashboardHeader from "@/layout/DashboardHeader";
import FoldersIcon from "@/svgs/FoldersIcon";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateEventForm from "./CreateEventForm";
import TabMenu from "@/components/TabMenu";
import { useSelector } from "react-redux";
import steps from "./steps/config";

const CreateEventContainer = () => {
  const { currentStep: currStep, steps: currentSteps } = useSelector(
    state => state.event,
  );
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(steps[0]);

  useEffect(() => {
    setCurrentStep(steps[currStep - 1]);
  }, [currStep]);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const navigate = useNavigate();
  const onIconClick = () => {
    navigate(-1);
  };

  const onTabSelect = tab => {
    if (tab.id <= currStep)
      setCurrentStep({ ...tab, component: steps[tab.id - 1].component });
  };

  return (
    <>
      <DashboardHeader
        title="Create an Event"
        description="Add your event deatails below"
        icon={<FoldersIcon className="w-5 h-5 text-grey-100" />}
        onIconClick={onIconClick}
        toggleDrawer={toggleDrawer}
      />
      <div className="max-w-[1100px]">
        <div className="flex p-4 md:p-8 justify-between">
          <TabMenu
            tabs={currentSteps || steps}
            activeTab={currentStep}
            onSelect={onTabSelect}
            title="EVENT CREATION STEPS"
          />
          <div className="w-full max-w-[680px]">
            <div className="pb-4 mb-6 border-b border-grey-light">
              <h3 className="font-medium text-white">{currentStep.label}</h3>
              <p className="text-grey-100">{currentStep.desc}</p>
            </div>
            <CreateEventForm
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            >
              {currentStep.component}
            </CreateEventForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEventContainer;
