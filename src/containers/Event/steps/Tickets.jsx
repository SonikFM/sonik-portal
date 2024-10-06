import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { Checkbox } from "@/components/ui/checkbox";
import { Currency } from "lucide-react";
import { useState } from "react";
import TicketTierAndArtist from "../elements/TicketTierAndArtist";
import { currencies } from "../config/options";
import { Button } from "@/components/ui/button";

const ageCharacterLimit = 50;
const Tickets = ({ register, errors, getValues, setValue }) => {
  const [ageLimit, setAgeLimit] = useState("");
  const changeHandler = event => {
    const { value } = event.target;
    if (value.length <= ageCharacterLimit) setAgeLimit(value);
  };

  const disableNextStep = () => {
    return (
      !getValues("age_limit") ||
      !getValues("currency") ||
      !getValues("ticket_limit_per_user")
    );
  };

  return (
    <div className="space-y-5 w-full">
      <div className="flex gap-5">
        <TextField
          label="Age Limit"
          name="age_limit"
          required={true}
          value={getValues("age_limit") || ageLimit}
          className="w-full"
          characterLimit={ageCharacterLimit}
          placeholder="This event is for 18+"
          onChange={changeHandler}
          {...register("age_limit", true)}
          errorMessage={errors.age_limit?.message}
        />
        <div className="flex w-full gap-2 mt-7">
          <Checkbox
            className="border-[#F5F7FA] peer-checked:border-primary"
            name="re_entry_allowed"
            onClick={() =>
              setValue("re_entry_allowed", !getValues("re_entry_allowed"))
            }
          />
          <div className="flex flex-col">
            <span className="text-white text-sm">Re-entry allowed</span>
            <span className="text-grey-100 text-xs">
              Allow multiple entries
            </span>
          </div>
        </div>
      </div>
      <SelectField
        label="Currency"
        value={getValues("currency") || currencies[0].value}
        options={currencies}
        Icon={Currency}
        name="currency"
        {...register("currency", true)}
        errorMessage={errors.currency?.message}
        setValue={setValue}
        getValues={getValues}
      />
      <TextField
        label="Ticket Limit per person"
        type="number"
        min={1}
        className="w-full"
        placeholder="Ticket Limit per person"
        name="ticket_limit_per_user"
        {...register("ticket_limit_per_user", true)}
        errorMessage={errors.ticket_limit_per_user?.message}
      />
      {/* <TicketTierAndArtist
        setValue={setValue}
        getValues={getValues}
        errors={errors}
      /> */}

      <div className="flex justify-end gap-3 py-8 mb-4 border-t mt-14 border-grey-light">
        <Button variant="outline" className="w-40">
          Cancel
        </Button>
        <Button className="w-40" disabled={disableNextStep}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Tickets;
