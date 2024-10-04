import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultBasicsValues } from "./config/defaultFormValues";

const CreateEventForm = ({ children, currentStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // This will allow us to track real-time changes
    getValues,
    setValue,
  } = useForm({
    resolver: zodResolver(currentStep.validationSchema),
    defaultValues: defaultBasicsValues,
  });

  // Track all form fields in real-time
  const title = watch(); // Watch the title input in real-time
  console.log("Real-time form values:", title); // Log real-time form values

  const onSubmit = data => {
    console.log("Form Submitted:", data); // Log the form values on submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.cloneElement(children, { register, errors, setValue, getValues })}
    </form>
  );
};

export default CreateEventForm;
