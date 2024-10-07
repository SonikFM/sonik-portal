import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useEventHelper from "./hooks/useEventHelper";
import steps from "./steps/config";

const CreateEventForm = ({ children, activeStep, setActiveStep }) => {
  const { getInitialState, submitEvent, isSuccess } = useEventHelper({
    activeStep: activeStep.id,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(activeStep.validationSchema),
    defaultValues: getInitialState(),
  });

  useEffect(() => {
    reset(getInitialState(activeStep.id));
  }, [activeStep]);

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
    if (isSuccess && activeStep.id < 5) setActiveStep(steps[activeStep.id]);
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {React.cloneElement(children, { register, errors, setValue, getValues })}
    </form>
  );
};

export default CreateEventForm;
