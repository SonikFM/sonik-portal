import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Loading from "@/components/Loading";
import { useTranslation } from "react-i18next";
import Upload from "../elements/Upload";

const ImageUploader = ({ getValues, isLoading, ...props }) => {
  const { t } = useTranslation("events");
  const disableNextStep = () => {
    return !getValues("images.primaryImage");
  };

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col gap-3 mt-3 md:mt-0">
      <Label className="text-[#f6f6f6] text-sm">
        {t("uploadImage")} <span className="text-primary">*</span>
      </Label>
      <Upload getValues={getValues} {...props} />
      <div className="flex justify-center md:justify-end gap-3 md:py-8 mb-4">
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

export default ImageUploader;
