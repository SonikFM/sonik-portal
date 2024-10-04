import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";

const CreateEventForm = ({ children, currentStep }) => {
  const { basics } = useSelector(state => state.event);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    resolver: zodResolver(currentStep.validationSchema),
    defaultValues: basics,
  });

  const onSubmit = data => {
    console.log("Form Submitted:", data);
  };

  const onError = errors => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {React.cloneElement(children, { register, errors, setValue, getValues })}
      <button
        className="bg-white"
        type="submit"
        onClick={handleSubmit(onSubmit)}
      >
        dkdk
      </button>
    </form>
  );
};

export default CreateEventForm;
