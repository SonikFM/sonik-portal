import Loading from "@/components/Loading";
import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const characterLimit = 100;

const Settings = ({ setValue, getValues, isLoading }) => {
  const { t } = useTranslation("events");
  const [notes, setNotes] = useState(getValues("internal_notes") || "");

  const changeHandler = event => {
    const { value } = event.target;
    if (value.length <= characterLimit) setNotes(value);
  };

  useEffect(() => {
    setValue("internal_notes", notes);
  }, [notes]);

  if (isLoading) return <Loading />;

  return (
    <div className="space-y-5 w-full">
      <TextField
        label={t("internalNotes")}
        required={false}
        name="internal_notes"
        placeholder={t("leaveYourNotes")}
        characterLimit={characterLimit}
        value={notes}
        onChange={changeHandler}
      />
      <div className="flex justify-center md:justify-end gap-3 md:py-8 mb-4 md:border-t mt-3 md:mt-14 border-grey-light">
        <Button variant="outline" className="w-full md:w-40">
          {t("cancel")}
        </Button>
        <Button className="w-full md:w-40 bg-[#CDD0D5] md:bg-primary">
          {t("continue")}
        </Button>
      </div>
    </div>
  );
};

export default Settings;
