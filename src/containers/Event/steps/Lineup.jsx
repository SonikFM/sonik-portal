import TextField from "@/components/TextField";
import TicketTierAndArtist from "../elements/TicketTierAndArtist";
import { Calendar } from "lucide-react";
import { openInputPicker } from "../config/helpers";
import Loading from "@/components/Loading";
import { useTranslation } from "react-i18next";

const Lineup = ({
  register,
  errors,
  getValues,
  setValue,
  isLoading,
  ...props
}) => {
  const { t } = useTranslation("events");

  const changeHandler = e => setValue("door_open", e.target.value);

  if (isLoading) return <Loading />;

  return (
    <div className="space-y-5 w-full">
      <TicketTierAndArtist
        errors={errors}
        getValues={getValues}
        setValue={setValue}
        {...props}
      />
      <TextField
        label={t("doorOpen")}
        required={true}
        type="datetime-local"
        placeholder={t("chooseDateAndTime")}
        Icon={Calendar}
        id="door_open"
        name="door_open"
        value={
          getValues("door_open")
            ? new Date(getValues("door_open")).toISOString().slice(0, 16)
            : ""
        }
        onChange={changeHandler}
        errorMessage={errors.door_open?.message}
        onIconClick={() => openInputPicker("door_open")}
      />
    </div>
  );
};

export default Lineup;
