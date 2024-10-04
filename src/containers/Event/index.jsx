import DashboardHeader from "@/layout/DashboardHeader";
import FoldersIcon from "@/svgs/FoldersIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateEventForm from "./CreateEventForm";
import steps from "./steps/config";
import TabMenu from "@/components/TabMenu";

const CreateEventContainer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const navigate = useNavigate();
  const onIconClick = () => {
    navigate(-1);
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
            tabs={steps}
            activeTab={currentStep}
            setActiveTab={setCurrentStep}
            title="EVENT CREATION STEPS"
          />
          <div className="w-full max-w-[680px]">
            <div className="pb-4 mb-6 border-b border-grey-light">
              <h3 className="font-medium text-white">{currentStep.label}</h3>
              <p className="text-grey-100">{currentStep.desc}</p>
            </div>
            <CreateEventForm
              setCurrentStep={setCurrentStep}
              currentStep={currentStep}
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
