import { forwardRef } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { twMerge } from "tailwind-merge";
import InformationIcon from "@/svgs/InformationIcon";
import { Textarea } from "./ui/textarea";

const TextField = ({
  className,
  name,
  type = "text",
  label,
  Icon,
  required,
  placeholder,
  error,
  errorMessage,
  characterLimit,
  register,
  ...props
}) => {
  const InputField = type !== "textarea" ? Input : Textarea;

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <Label
          className={twMerge("text-[#f6f6f6]", error && "text-error-dark")}
        >
          {label} {required && <span className="text-primary"> *</span>}
        </Label>
        {characterLimit && (
          <div className="flex items-center gap-1">
            <span
              className={twMerge(
                "text-grey-100 text-xs flex gap-1 items-center",
                error && "text-error-dark",
              )}
            >
              {props?.value?.length || 0}/{characterLimit}
              <InformationIcon className="w-5 " />
            </span>
          </div>
        )}
      </div>

      <div className="w-full relative">
        <InputField
          className={twMerge(
            "text-grey-50 bg-transparent border-grey-light placeholder:text-grey-100 rounded-lg",
            Icon && "px-10",
          )}
          type={type}
          placeholder={placeholder}
          register={register} // Register the input
          {...register(name, { required })} // Register the input
          {...props} // Spread additional props
        />
        {Icon && (
          <Icon className="absolute top-1/2 -translate-y-1/2 left-3 w-4 text-grey" />
        )}
      </div>
      {error && (
        <span className="flex gap-1 text-xs text-error-dark">
          <InformationIcon />
          {errorMessage || "This field is required"}
        </span>
      )}
    </div>
  );
};

export default TextField;
