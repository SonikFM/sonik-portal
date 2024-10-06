import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useEventHelper from "./hooks/useEventHelper";
import steps from "./steps/config";

const CreateEventForm = ({ children, currentStep, setCurrentStep }) => {
  const { getInitialState, submitEvent, isSuccess } = useEventHelper();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(currentStep.validationSchema),
    defaultValues: getInitialState(currentStep),
  });

  watch();

  const onSubmit = data => {
    console.log("Submitted data", data);
    submitEvent(data);
  };

  useEffect(() => {
    if (isSuccess && currentStep.id < 5) setCurrentStep(steps[currentStep.id]);
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.cloneElement(children, { register, errors, setValue, getValues })}
    </form>
  );
};

export default CreateEventForm;
