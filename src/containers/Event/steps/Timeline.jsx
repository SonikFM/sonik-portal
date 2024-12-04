import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { timezones } from "../config/options";
import { openInputPicker } from "../config/helpers";
import Loading from "@/components/Loading";
import { useTranslation } from "react-i18next";

const Timeline = ({ errors, getValues, setValue, isLoading }) => {
  const { t } = useTranslation("events");
  const disableNextStep = () => {
    return (
      !getValues("timezone") ||
      !getValues("announcement") ||
      !getValues("event_start") ||
      !getValues("event_end")
    );
  };

  const datesChangeHandler = event => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="space-y-5 w-full">
      <SelectField
        label={t("timezone")}
        value={getValues("timezone") || timezones[0].value}
        required={true}
        options={timezones}
        getValues={getValues}
        name="timezone"
        setValue={setValue}
        errorMessage={errors.timezone?.message}
        onChange={e => setValue("timezone", e.target.value)}
      />
      <TextField
        label={t("announcement")}
        required={true}
        type="datetime-local"
        placeholder={t("chooseDateAndTime")}
        Icon={Calendar}
        id="announcement"
        onIconClick={() => openInputPicker("announcement")}
        name="announcement"
        onChange={datesChangeHandler}
        errorMessage={errors.announcement?.message}
        value={
          getValues("announcement")
            ? new Date(getValues("announcement")).toISOString().slice(0, 16)
            : ""
        }
      />
      <TextField
        label={t("startEvent")}
        required={true}
        type="datetime-local"
        placeholder={t("chooseDateAndTime")}
        Icon={Calendar}
        name="event_start"
        id="event_start"
        onIconClick={() => openInputPicker("event_start")}
        onChange={datesChangeHandler}
        errorMessage={errors.event_start?.message}
        value={
          getValues("event_start")
            ? new Date(getValues("event_start")).toISOString().slice(0, 16)
            : ""
        }
      />
      <TextField
        label={t("eventEnd")}
        required={true}
        type="datetime-local"
        placeholder={t("chooseDateAndTime")}
        Icon={Calendar}
        id="event_end"
        name="event_end"
        value={
          getValues("event_end")
            ? new Date(getValues("event_end")).toISOString().slice(0, 16)
            : ""
        }
        onChange={datesChangeHandler}
        onIconClick={() => openInputPicker("event_end")}
        errorMessage={errors.event_end?.message}
      />

      <div className="flex justify-center md:justify-end gap-3 md:py-8 mb-4 md:border-t mt-3 md:mt-14 border-grey-light">
        <Button variant="outline" className="w-full md:w-40">
          {t("cancel")}
        </Button>
        <Button
          className="w-full md:w-40 bg-[#CDD0D5] md:bg-primary"
          disabled={disableNextStep}
        >
          {t("continue")}
        </Button>
      </div>
    </div>
  );
};

export default Timeline;
