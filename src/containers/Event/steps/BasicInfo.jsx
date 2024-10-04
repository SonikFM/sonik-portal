import React from "react";
import TextField from "@/components/TextField";

const BasicInfo = ({ register, errors }) => {
  return (
    <div>
      <TextField
        name="title"
        label="Title"
        required={true}
        placeholder="Add Title"
        register={register}
        error={errors?.title}
      />
    </div>
  );
};

export default BasicInfo;
