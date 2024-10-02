import { forwardRef } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { twMerge } from "tailwind-merge";
import InformationIcon from "@/svgs/InformationIcon";
import { Textarea } from "./ui/textarea";

const TextField = forwardRef(
  (
    {
      className,
      type,
      label,
      Icon,
      required,
      placeholder,
      hasError,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const InputField = type !== "textarea" ? Input : Textarea;
    return (
      <div className="w-full flex flex-col gap-3">
        <Label className="text-[#f6f6f6]">
          {label} {required && <span className="text-primary"> *</span>}
        </Label>

        <div className="w-full relative">
          <InputField
            className={twMerge(
              "text-grey-50 bg-transparent border-grey-light placeholder:text-grey-100 rounded-lg",
              Icon && "px-10",
            )}
            type={type}
            placeholder={placeholder}
            {...props}
            ref={ref}
          />
          {Icon && (
            <Icon className="absolute top-1/2 -translate-y-1/2 left-3 w-4 text-grey" />
          )}
        </div>
        {hasError && (
          <span className="flex gap-1 text-xs text-error-dark">
            <InformationIcon />
            {errorMessage}
          </span>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";

export default TextField;
