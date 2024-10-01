import { forwardRef } from "react";
import { Label } from "./ui/label";
import { Select } from "./Select";

const SelectField = forwardRef(
  ({ className, label, options, required, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-2">
        <Label className="text-white">
          {label} {required && <span className="text-primary"> *</span>}
        </Label>
        <Select
          className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
          placeholder="Choose the type of event"
          options={options}
        />
      </div>
    );
  },
);

SelectField.displayName = "SelectField";

export default SelectField;
