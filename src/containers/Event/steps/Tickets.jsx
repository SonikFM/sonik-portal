import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { Checkbox } from "@/components/ui/checkbox";
import { Currency } from "lucide-react";
import { useState } from "react";
import TicketTierAndArtist from "../elements/TicketTierAndArtist";

const ageCharacterLimit = 50;
const Tickets = ({ register }) => {
  const [ageLimit, setAgeLimit] = useState("");
  const changeHandler = event => {
    const { value } = event.target;
    if (value.length <= ageCharacterLimit) setAgeLimit(value);
  };
  return (
    <div className="space-y-5 w-full">
      <div className="flex gap-5">
        <TextField
          label="Age Limit"
          name="age-limit"
          required={true}
          value={ageLimit}
          className="w-full"
          characterLimit={ageCharacterLimit}
          placeholder="This event is for 18+"
          onChange={changeHandler}
          register={register}
        />
        <div className="flex w-full gap-2 mt-7">
          <Checkbox
            className="border-[#F5F7FA] peer-checked:border-primary"
            name="multiple-entries"
            register={register}
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
        value="Col"
        options={[
          {
            value: "Col",
            label: "Col",
          },
          {
            value: "USD",
            label: "USD",
          },
          {
            value: "EUR",
            label: "EUR",
          },
        ]}
        Icon={Currency}
        register={register}
        name="currency"
      />
      <TextField
        label="Ticket Limit per person"
        type="number"
        min={1}
        className="w-full"
        placeholder="Ticket Limit per person"
        register={register}
        name="ticket-limit"
      />
      <TicketTierAndArtist />
    </div>
  );
};

export default Tickets;
