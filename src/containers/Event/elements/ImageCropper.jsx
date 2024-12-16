import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import ReactCrop from "react-image-crop";

import { forwardRef } from "react";

const ImageCropper = forwardRef(
  (
    { image, crop, onCropChange, onCropComplete, cropImage, cancelCrop },
    ref,
  ) => {
    const { t } = useTranslation("events");

    return (
      <>
        <div className="border border-dashed border-[#525866] rounded-lg overflow-hidden  text-center flex flex-col justify-center">
          <ReactCrop
            crop={crop}
            onChange={onCropChange}
            onComplete={onCropComplete}
          >
            <img src={image} alt="" ref={ref} />
          </ReactCrop>
        </div>

        <div className="w-full gap-2 justify-end flex absolute bottom-2 right-2">
          <Button
            variant="secondary"
            size="xs"
            type="button"
            onClick={cancelCrop}
            disabled={!crop}
          >
            {t("cancel")}
          </Button>
          <Button size="xs" type="button" onClick={cropImage} disabled={!crop}>
            {t("crop")}
          </Button>
        </div>
      </>
    );
  },
);

ImageCropper.displayName = "ImageCropper";

export default ImageCropper;
