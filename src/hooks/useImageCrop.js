import { blobToBase64 } from "@/helper/images";
import { useRef, useState } from "react";
import { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const TO_RADIANS = Math.PI / 180;
const aspect = 16 / 9;
const rotate = 0;
const scale = 1;
const useImageCrop = ({ imgRef, previewCanvasRef, setCropActive }) => {
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState();
  const [imgSrc, setImgSrc] = useState();
  const [completedCrop, setCompletedCrop] = useState();

  const centerAspectCrop = (mediaWidth, mediaHeight, aspect) => {
    return centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 90,
        },
        aspect,
        mediaWidth,
        mediaHeight,
      ),
      mediaWidth,
      mediaHeight,
    );
  };

  const canvasPreview = async (image, canvas, crop, scale = 1, rotate = 0) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("No 2d context");
    }
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const pixelRatio = window.devicePixelRatio;
    canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
    canvas.height = Math.floor(crop.height * scaleY * pixelRatio);
    ctx.scale(pixelRatio, pixelRatio);
    ctx.imageSmoothingQuality = "high";
    const cropX = crop.x * scaleX;
    const cropY = crop.y * scaleY;
    const rotateRads = rotate * TO_RADIANS;
    const centerX = image.naturalWidth / 2;
    const centerY = image.naturalHeight / 2;
    ctx.save();
    ctx.translate(-cropX, -cropY);
    ctx.translate(centerX, centerY);
    ctx.rotate(rotateRads);
    ctx.scale(scale, scale);
    ctx.translate(-centerX, -centerY);

    ctx.drawImage(
      image,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight,
    );
    ctx.restore;
  };

  const onSelectFile = image => {
    image.crossOrigin = "anonymous";
    if (image) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || ""),
      );
      reader.readAsDataURL(image);
    }
  };

  const onImageLoad = event => {
    if (aspect) {
      const { width, height } = event.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  };

  const onCropComplete = crop => setCompletedCrop(crop);

  const onCropChange = (_, percentCrop) => setCrop(percentCrop);

  const cancelCrop = () => {
    setCropActive(false);
    setCompletedCrop(null);
    setCrop(null);
  };

  const cropImage = async () => {
    if (!completedCrop || !imgRef.current || !previewCanvasRef.current) {
      return;
    }

    const canvas = previewCanvasRef.current;
    const image = imgRef.current;
    canvasPreview(image, canvas, completedCrop, scale, rotate);

    canvas.toBlob(async blob => {
      if (!blob) {
        console.error("Canvas is empty");
        return;
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }

      blobUrlRef.current = URL.createObjectURL(blob);
      const base64 = await blobToBase64(blob);
      setImgSrc(base64);
      cancelCrop();
    }, "image/jpeg");
  };

  return {
    onSelectFile,
    centerAspectCrop,
    onImageLoad,
    image: imgSrc,
    setImage: setImgSrc,
    crop,
    onCropChange,
    onCropComplete,
    cropImage,
    completedCrop,
    cancelCrop,
  };
};

export default useImageCrop;
