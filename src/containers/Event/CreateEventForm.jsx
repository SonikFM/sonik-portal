import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useEventHelper from "./hooks/useEventHelper";

const CreateEventForm = ({ children, activeStep, setActiveStep }) => {
  const { getInitialState, submitEvent, isLoading } = useEventHelper({
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

  watch();

  const onSubmit = data => {
    submitEvent(data);
  };

  const onError = error => {
    console.log(error);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {React.cloneElement(children, {
        register,
        errors,
        setValue,
        getValues,
        isLoading,
      })}
    </form>
  );
};

export default CreateEventForm;
