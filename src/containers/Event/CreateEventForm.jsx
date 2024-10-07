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
    reset,
  } = useForm({
    resolver: zodResolver(currentStep.validationSchema),
    defaultValues: getInitialState(),
  });

  useEffect(() => {
    reset(getInitialState(currentStep.id));
  }, [currentStep]);

  const data = watch();
  console.log(data, "Form Data");

  const onSubmit = data => {
    console.log("Submitted data", data);
    submitEvent(data);
  };

  const onError = error => {
    console.log(error);
  };

  useEffect(() => {
    if (isSuccess && currentStep.id < 5) setCurrentStep(steps[currentStep.id]);
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {React.cloneElement(children, { register, errors, setValue, getValues })}
    </form>
  );
};

export default CreateEventForm;
