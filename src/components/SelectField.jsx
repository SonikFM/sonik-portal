import { forwardRef } from "react";
import { Label } from "./ui/label";
import { Select } from "./Select";
import InformationIcon from "@/svgs/InformationIcon";

const SelectField = forwardRef(
  (
    {
      className,
      Icon,
      name,
      label,
      placeholder,
      options,
      errorMessage,
      required,
      value,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full flex flex-col gap-3">
        <Label className="text-white text-sm">
          {label} {required && <span className="text-primary"> *</span>}
        </Label>
        <Select
          className="text-white bg-transparent  border-grey-light placeholder:text-grey-100"
          placeholder={placeholder}
          options={options}
          Icon={Icon}
          name={name}
          valueLabel={value}
          {...props}
          ref={ref}
        />
        {errorMessage && (
          <span className="flex gap-1 text-xs text-error-dark">
            <InformationIcon />
            {errorMessage}
          </span>
        )}
      </div>
    );
  },
);

SelectField.displayName = "SelectField";

export default SelectField;
