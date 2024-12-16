import { Button } from "@/components/ui/button";
import uploadCloud from "@/assets/images/events/uploadCloud.png";
import { Plus } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";

const ImageDropzone = ({
  setCropActive,
  setValue,
  image,
  crop,
  onSelectFile,
}) => {
  const { t } = useTranslation("events");

  const onDrop = useCallback(acceptedFiles => {
    onSelectFile(acceptedFiles[0]);
    setValue("images.primaryImage", acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div
        {...getRootProps()}
        className=" border border-dashed border-[#525866] rounded-lg min-h-[300px] text-center  flex flex-col justify-center"
      >
        <input {...getInputProps()} />
        {image ? (
          <img
            src={image}
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
          <div className="flex flex-col justify-center gap-3 items-center min-h-[300px] md:min-h-[400px] sm:min-h-[680px]">
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
      {image && (
        <div className="w-full gap-2 justify-end flex absolute bottom-2 right-2">
          <Button
            variant="secondary"
            size="xs"
            type="button"
            onClick={setCropActive}
            disabled={crop}
          >
            {t("crop")}
          </Button>
        </div>
      )}
    </>
  );
};

export default ImageDropzone;
