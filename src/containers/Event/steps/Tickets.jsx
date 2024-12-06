import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { Checkbox } from "@/components/ui/checkbox";
import { Currency } from "lucide-react";
import { useState } from "react";
import { currencies } from "../config/options";
import { Button } from "@/components/ui/button";
import TicketTier from "../elements/TicketTier";
import Loading from "@/components/Loading";
import { useTranslation } from "react-i18next";

const ageCharacterLimit = 50;
const Tickets = ({ register, errors, getValues, setValue, isLoading }) => {
  const { t } = useTranslation("events");
  const [ageLimit, setAgeLimit] = useState(18);
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

  if (isLoading) return <Loading />;

  return (
    <div className="space-y-5 w-full">
      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <TextField
          label={t("ageLimit")}
          name="age_limit"
          required={true}
          type="number"
          value={
            getValues("age_limit")
              ? getValues("age_limit")
              : ageLimit.toString()
          }
          className="w-full"
          characterLimit={ageCharacterLimit}
          placeholder={t("thisEventIsFor")}
          onChange={changeHandler}
          {...register("age_limit", true)}
          errorMessage={errors.age_limit?.message}
        />
        <div className="flex w-full gap-2 ml-3 md:ml-0 mt-2 md:mt-7">
          <Checkbox
            className="border-[#F5F7FA] peer-checked:border-primary"
            name="re_entry_allowed"
            onClick={() =>
              setValue("re_entry_allowed", !getValues("re_entry_allowed"))
            }
          />
          <div className="flex flex-col">
            <span className="text-white text-sm">{t("reentryAllowed")}</span>
            <span className="text-grey-100 text-xs">
              {t("allowMultipleEntries")}
            </span>
          </div>
        </div>
      </div>
      <SelectField
        label={t("currency")}
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
        label={t("ticketLimitPerPerson")}
        type="number"
        min={1}
        defaultValue={1}
        className="w-full"
        placeholder={t("ticketLimitPerPerson")}
        name="ticket_limit_per_user"
        {...register("ticket_limit_per_user", true)}
        errorMessage={errors.ticket_limit_per_user?.message}
      />
      <TicketTier
        setValue={setValue}
        getValues={getValues}
        errors={errors}
        register={register}
      />
      <div className="flex justify-center md:justify-end gap-3 md:py-8 mb-4 md:border-t mt-3 md:mt-14 border-grey-light">
        <Button variant="outline" className="w-full md:w-40">
          {t("cancel")}
        </Button>
        <Button
          className="w-full md:w-40 bg-[#CDD0D5] md:bg-primary"
          disabled={disableNextStep()}
        >
          {t("continue")}
        </Button>
      </div>
    </div>
  );
};

export default Tickets;
