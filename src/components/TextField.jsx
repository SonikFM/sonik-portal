import { forwardRef, useMemo } from "react";
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
      value,
      errorMessage,
      characterLimit,
      onIconClick,
      ...props
    },
    ref,
  ) => {
    const InputField = type !== "textarea" ? Input : Textarea;
    const [hasError, error] = useMemo(() => {
      const characterLimitExceeded =
        characterLimit && value?.length === characterLimit;
      if (errorMessage || characterLimitExceeded)
        return [
          true,
          characterLimitExceeded
            ? "You’ve reached the character limit"
            : errorMessage,
        ];
      return [false, ""];
    }, [value, characterLimit, errorMessage]);

    return (
      <div className="w-full flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <Label
            className={twMerge(
              "text-[#f6f6f6] text-sm",
              hasError && "text-error-dark",
            )}
          >
            {label} {required && <span className="text-primary"> *</span>}
          </Label>
          {characterLimit && (
            <div className="flex items-center gap-1">
              <span
                className={twMerge(
                  "text-grey-100 text-xs flex gap-1 items-center",
                  hasError && "text-error-dark",
                )}
              >
                {value?.length || 0}/{characterLimit}
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
            value={value}
            {...props}
            ref={ref}
          />
          {Icon && (
            <Icon
              className="absolute top-1/2 cursor-pointer -translate-y-1/2 left-3 w-4 text-grey"
              onClick={onIconClick}
            />
          )}
        </div>
        {hasError && (
          <span className="flex gap-1 text-xs text-error-dark">
            <InformationIcon />
            {error}
          </span>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";

export default TextField;
