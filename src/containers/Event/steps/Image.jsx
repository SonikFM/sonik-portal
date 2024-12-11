import { useDropzone } from "react-dropzone";
import { Label } from "@/components/ui/label";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import uploadCloud from "@/assets/images/events/uploadCloud.png";
import { twMerge } from "tailwind-merge";
import Loading from "@/components/Loading";
import { useTranslation } from "react-i18next";

const Image = ({ getValues, isLoading, ...props }) => {
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

const Upload = ({ getValues, setValue }) => {
  const { t } = useTranslation("events");
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(getValues("images.primaryImage"));
  }, []);

  const onDrop = useCallback(acceptedFiles => {
    setImage(acceptedFiles[0]);
    setValue("images.primaryImage", acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      {...getRootProps()}
      className=" border border-dashed border-[#525866] rounded-lg  text-center h-[300px] md:h-[400px] sm:h-[680px] flex flex-col justify-center"
    >
      <input {...getInputProps()} />
      {image ? (
        <img
          src={typeof image !== "string" ? URL.createObjectURL(image) : image}
          alt=""
          className={twMerge(
            "w-full h-full object-cover rounded-lg",
            isDragActive && "opacity-50",
          )}
        />
      ) : isDragActive ? (
        <div className="flex items-center justify-center">
          <h6 className="text-grey-50 text-sm font-medium">
            {t("chooseAFile")}
          </h6>
        </div>
      ) : (
        <div className="flex flex-col gap-3 items-center">
          <img src={uploadCloud} alt="" className="w-6 h-6" />
          <div className="flex flex-col gap-2">
            <h6 className="text-grey-50 text-sm font-medium">
              {t("chooseAFile")}
            </h6>
            <p className="text-grey-100 text-xs">{t("imageNeedsToBe")}</p>
          </div>

          <Button variant="outline" className="w-40 flex gap-3 font-medium">
            <Plus className="w-3.5" /> {t("browseFiles")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Image;
