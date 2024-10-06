import { supportedTypes } from "@/contants/uploads";
import { toast } from "react-toastify";

const { default: axios } = require("axios");

export const getPresignedUrl = async (file, fileType) => {
  if (!supportedTypes.includes(file.type))
    return toast.error("Invalid file type. Please upload a valid image file.");

  const response = await axios.post(
    `${process.env.VITE_BASE_URL}/uploads/generate-presigned-url?fileName=${file.name}&fileType=${file.type}&imageType=${fileType}`,
    {
      withCredentials: true,
    },
  );
  return response.data;
};

export const uploadFile = async (file, presignedUrl) => {
  const response = await axios.put(presignedUrl, file, {
    headers: {
      "Content-Type": file.type,
    },
  });
  return response;
};
