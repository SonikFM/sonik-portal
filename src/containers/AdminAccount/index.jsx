import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DashboardHeader from "@/layout/DashboardHeader";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/FileUpload";
import Profile from "./elements/Profile";
import UploadIcon from "@/svgs/UploadIcon";
import { useNavigate } from "react-router-dom";

const AdminAccount = () => {
  const navigate = useNavigate();
  const onIconClick = () => {
    navigate(-1);
  };
  return (
    <>
      <DashboardHeader
        title="Admin Account"
        description="For create an account full-fill the required informations"
        icon={<ChevronLeft className="w-5 h-5 text-grey-100" />}
        onIconClick={onIconClick}
        hasNotifications={false}
        hasSearch={false}
      >
        <Button variant="outline"> Cancel </Button>
        <Button> Create Account </Button>
      </DashboardHeader>
      <div className="px-4 py-8 space-y-6 md:px-8">
        <Profile />
        <div>
          <FileUpload className="h-20">
            <div className="flex items-center justify-between w-full h-full">
              <div className="flex w-full gap-4 shrink">
                <div className="flex items-center justify-center w-10 h-10 border rounded-full border-grey-light shrink-0 bg-grey-light">
                  <UploadIcon className="text-grey-100" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-medium text-white">
                    Choose a file or drag & drop it here.
                  </h3>
                  <p className="text-xs text-grey-100 mt-1.5">
                    JPEG file only and image size no longer than 10 MB
                  </p>
                </div>
              </div>
              <Button
                size="xs"
                variant="outline"
                className="text-grey-100 bg-grey-dark"
              >
                Browse File
              </Button>
            </div>
          </FileUpload>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <div className="grid gap-1">
            <Label className="flex justify-between text-white">
              <span>
                First Name <span className="text-primary">*</span>
              </span>
            </Label>
            <Input
              className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
              placeholder="James Brown"
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-white">
              Last Name <span className="text-primary">*</span>
            </Label>
            <Input
              className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
              placeholder="James Brown"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <div className="grid gap-1">
            <Label className="flex justify-between text-white">
              <span>
                Email Address <span className="text-primary">*</span>
              </span>
            </Label>
            <Input
              className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
              placeholder="someone@mail.com"
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-white">
              Admin ID <span className="text-primary">*</span>
            </Label>
            <Input
              className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
              placeholder="E-1234567"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminAccount;
