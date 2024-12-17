import { Label } from "@/components/ui/label";
import Loading from "@/components/Loading";
import { useTranslation } from "react-i18next";
import Upload from "../elements/Upload";

const ImageUploader = ({ getValues, isLoading, ...props }) => {
  const { t } = useTranslation("events");

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col gap-3 mt-3 md:mt-0">
      <Label className="text-[#f6f6f6] text-sm">
        {t("uploadImage")} <span className="text-primary">*</span>
      </Label>
      <Upload getValues={getValues} {...props} />
    </div>
  );
};

export default ImageUploader;
