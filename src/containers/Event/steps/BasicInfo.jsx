import Loading from "@/components/Loading";
import PlacesSelectField from "@/components/PlacesSelectField";
import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const BasicInfo = ({ register, setValue, getValues, errors, isLoading }) => {
  const { t } = useTranslation("events");
  const allowNextStep = () => {
    return (
      !getValues("title") ||
      !getValues("description") ||
      !getValues("venue") ||
      !getValues("presented_by")
    );
  };

  const getDefaultAddress = () => {
    const venue = getValues("venue");
    return venue?.formatted_address
      ? `${venue.formatted_address}, ${venue.city ? venue.city + ", " : ""}${venue.region ? venue.region + ", " : ""}${venue.country}`
      : "";
  };

  if (isLoading) return <Loading />;

  return (
    <div className="space-y-5 w-full mt-6 md:mt-0">
      <TextField
        label={t("title")}
        required={true}
        placeholder={t("addTitle")}
        name="title"
        {...register("title", true)}
        errorMessage={errors.title?.message}
      />
      <SelectField
        label={t("type")}
        placeholder={t("chooseTypeOfEvent")}
        required={true}
        value={t(getValues("type"))}
        options={[
          { value: "concert", label: t("concert") },
          { value: "dj", label: t("dj") },
          { value: "party", label: t("party") },
        ]}
        name="type"
        setValue={setValue}
        getValues={getValues}
      />
      <TextField
        label={t("description")}
        type="textarea"
        placeholder={t("addDescription")}
        name="description"
        {...register("description", true)}
        errorMessage={errors.description?.message}
      />
      <SelectField
        label={t("privacy")}
        required={true}
        placeholder={t("selectType")}
        value={t(getValues("privacy"))}
        options={[
          { value: "public", label: t("public") },
          { value: "hidden", label: t("hidden") },
          { value: "private", label: t("private") },
        ]}
        getValues={getValues}
        name="privacy"
        setValue={setValue}
      />

      <PlacesSelectField
        label={t("venue")}
        setValue={setValue}
        placeholder={t("searchForAVenue")}
        defaultValue={getDefaultAddress()}
        {...register("venue", true)}
        errorMessage={errors.venue?.formatted_address?.message}
      />

      <TextField
        label={t("presentedBy")}
        required={true}
        placeholder={t("presenter")}
        name="presented_by"
        register={register}
        {...register("presented_by", true)}
      />

      <div className="flex justify-center md:justify-end gap-3 md:py-8 mb-4 md:border-t mt-3 md:mt-14 border-grey-light">
        <Button variant="outline" className="w-full md:w-40">
          {t("cancel")}
        </Button>
        <Button
          className="w-full md:w-40 bg-[#CDD0D5] md:bg-primary"
          disabled={allowNextStep()}
        >
          {t("continue")}
        </Button>
      </div>
    </div>
  );
};

export default BasicInfo;
