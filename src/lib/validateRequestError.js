// import { toast } from "react-toastify";

export const validateRequestError = (error, callback) => {
  if (error?.code === "ERR_NETWORK") {
    // toast.error("Network Error! Please Try again ");
    return callback("");
  }
  return callback(error?.response?.data);
};
