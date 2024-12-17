import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useEventHelper from "./hooks/useEventHelper";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const EventForm = ({ children, activeStep }) => {
  const { t } = useTranslation("events");
  const location = useLocation();
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
  const { isSubmitDisabled } = useEventHelper({
    activeStep: activeStep.id,
    getValues,
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
      <div className="flex justify-center md:justify-end gap-3 md:py-12 mb-4">
        <Button variant="outline" className="w-full md:w-40" type="button">
          {t("cancel")}
        </Button>
        <Button
          className="w-full md:w-40 bg-[#CDD0D5] md:bg-primary"
          disabled={isSubmitDisabled()}
        >
          {t(location.pathname.includes("edit-event") ? "update" : "continue")}
        </Button>
      </div>
    </form>
  );
};

export default EventForm;
