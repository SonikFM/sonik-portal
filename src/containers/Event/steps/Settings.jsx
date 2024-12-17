import Loading from "@/components/Loading";
import TextField from "@/components/TextField";
import { useTranslation } from "react-i18next";

const characterLimit = 100;

const Settings = ({ setValue, getValues, isLoading }) => {
  const { t } = useTranslation("events");

  const changeHandler = event => {
    const { value } = event.target;
    if (value.length <= characterLimit) setValue("internal_notes", value);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="space-y-5 w-full">
      <TextField
        label={t("internalNotes")}
        required={false}
        name="internal_notes"
        placeholder={t("leaveYourNotes")}
        characterLimit={characterLimit}
        value={getValues("internal_notes")}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Settings;
