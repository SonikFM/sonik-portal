import { supportedTypes } from "@/contants/uploads";
import { toast } from "react-toastify";
import axios from "axios";

export const getPresignedUrl = async (file, fileType) => {
  if (!supportedTypes.includes(file.type))
    return toast.error("Invalid file type. Please upload a valid image file.");

  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/uploads/generate-presigned-url?fileName=${file.name}&fileType=${file.type}&imageType=${fileType}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return null;
  }
};

export const uploadFileWithPreSignedUrl = async (file, presignedUrl) => {
  const response = await axios.put(presignedUrl, file, {
    headers: {
      "Content-Type": file.type,
    },
  });
  return response;
};

export const uploadFile = async (file, fileType) => {
  try {
    const { url, key } = await getPresignedUrl(file, fileType);
    const response = await uploadFileWithPreSignedUrl(file, url);
    return { response, key };
  } catch (error) {
    toast.error("Failed to upload image. Please try again.");
  }
};
