import { useEffect, useRef, useState } from "react";
import useImageCrop from "@/hooks/useImageCrop";
import ImageCropper from "./ImageCropper";
import ImageDropzone from "./ImageDropzone";
import { blobToBase64 } from "@/helper/images";

const Upload = ({ getValues, setValue }) => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [cropActive, setCropActive] = useState(false);

  const {
    image,
    setImage,
    onSelectFile,
    crop,
    onCropChange,
    onCropComplete,
    completedCrop,
    cropImage,
    cancelCrop,
  } = useImageCrop({
    setCropActive,
    imgRef,
    previewCanvasRef,
  });

  useEffect(() => {
    getImageURL(getValues("images.primaryImage"));
    setImage(getValues("images.primaryImage"));
  }, []);

  useEffect(() => {
    setValue("images.primaryImage", image);
  }, [image]);

  const getImageURL = async image => {
    if (typeof image === "string") {
      const response = await fetch(image);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const base64 = await blobToBase64(blob);
      return setImage(base64);
    }
    setImage(URL.createObjectURL(image));
  };

  return (
    <div className="relative">
      <canvas
        ref={previewCanvasRef}
        style={{
          objectFit: "contain",
          width: completedCrop?.width,
          height: completedCrop?.height,
          display: "none",
        }}
      />
      {cropActive ? (
        <ImageCropper
          crop={crop}
          setCropActive={setCropActive}
          image={image}
          onCropChange={onCropChange}
          onCropComplete={onCropComplete}
          completedCrop={completedCrop}
          cropImage={cropImage}
          cancelCrop={cancelCrop}
          ref={imgRef}
        />
      ) : (
        <ImageDropzone
          setCropActive={setCropActive}
          setValue={setValue}
          image={image}
          crop={crop}
          onSelectFile={onSelectFile}
        />
      )}
    </div>
  );
};

export default Upload;
