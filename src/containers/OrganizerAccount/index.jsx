import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DashboardHeader from "@/layout/DashboardHeader";
import { ChevronLeft, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/FileUpload";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import Profile from "./elements/Profile";
import UploadIcon from "@/svgs/UploadIcon";
import { useNavigate } from "react-router-dom";
import { Autocomplete } from "@react-google-maps/api";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCallback } from "react";
import InputWithIcon from "@/components/InputWithIcon";
import SearchIcon from "@/svgs/SearchIcon";

const schema = z.object({
  eventId: z.string().nonempty({ message: "Venue ID is required" }),
  organizationName: z.string().nonempty({ message: "Venue name is required" }),
  website: z.string().nonempty({ message: "Venue capacity is required" }),
  organizationOwner: z
    .string()
    .email({ message: "Invalid email" })
    .nonempty({ message: "Venue email is required" }),
  addressLine1: z.string().nonempty({ message: "Address Line 1 is required" }),
  addressLine2: z.string().optional(),
  zipCode: z.string().nonempty({ message: "Zip code is required" }),
  region: z.string().nonempty({ message: "Region is required" }),
  city: z.string().nonempty({ message: "City is required" }),
  country: z.string().nonempty({ message: "Country is required" }),
  description: z.string().nonempty({ message: "Phone number is required" }),
  bio: z.string().nonempty({ message: "Venue description is required" }),
  venueStatus: z.boolean().default(false),
  coords: z
    .object({
      lat: z.string().nullable(),
      lng: z.string().nullable(),
    })
    .nullable(),
});

const OrganizerAccount = () => {
  const navigate = useNavigate();
  const onIconClick = () => {
    navigate(-1);
  };

  const {
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      organizationName: "",
      website: "",
      organizationOwner: "",
      addressLine1: "",
      addressLine2: "",
      zipCode: "",
      region: "",
      country: "",
      city: "",
      description: "",
      bio: "",
      coords: null,
    },
  });

  const handlePlaceChanged = useCallback(
    autocomplete => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        console.log("No details available for input: '" + place.name + "'");
        return;
      }

      const addressComponents = place.address_components;
      const getAddressComponent = type => {
        const component = addressComponents.find(component =>
          component.types.includes(type),
        );
        return component ? component.long_name : "";
      };

      setValue(
        "addressLine1",
        getAddressComponent("street_number")
          ? `${getAddressComponent("street_number")} ${getAddressComponent("route")}`
          : getAddressComponent("route"),
      );
      setValue("organizationName", place?.formatted_address);
      setValue("addressLine2", getAddressComponent("sublocality_level_1"));
      setValue("zipCode", getAddressComponent("postal_code"));
      setValue("region", getAddressComponent("administrative_area_level_1"));
      setValue("country", getAddressComponent("country"));
      setValue("city", getAddressComponent("locality"));
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setValue("coords", { lat, lng });
    },
    [setValue],
  );
  return (
    <>
      <DashboardHeader
        title="Add Orgranizer Profile"
        description="Let attendees know who is hosting events"
        icon={<ChevronLeft className="w-5 h-5 text-grey-100" />}
        onIconClick={onIconClick}
      >
        {/* <Button variant="outline"> Cancel </Button> */}
        <Button> Save </Button>
      </DashboardHeader>
      <div className="px-4 py-8 space-y-6 md:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <div className="grid gap-1">
            <Label className="flex justify-between text-white">
              <span>
                Organizer Name <span className="text-primary">*</span>
              </span>
            </Label>
            <Input
              className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
              placeholder="Sonik"
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-white">
              Website <span className="text-primary"></span>
            </Label>
            <Input
              className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
              placeholder="https://www.sonic.com/home"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <div className="grid gap-1">
            <Label className="flex justify-between text-white">
              <span>
                Organization Name <span className="text-primary">*</span>
              </span>
            </Label>
            <Input
              className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
              placeholder="Sonik"
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-white">
              Search Address <span className="text-primary"></span>
            </Label>
            <Autocomplete
              onLoad={autocomplete => {
                autocomplete.addListener("place_changed", () =>
                  handlePlaceChanged(autocomplete),
                );
              }}
              options={{
                types: ["address"],
                componentRestrictions: { country: "us" },
              }}
            >
              <InputWithIcon
                icon={<SearchIcon />}
                className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                placeholder="Search here"
              />
            </Autocomplete>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <div className="grid gap-1">
            <Label className="flex justify-between text-white">
              <span>
                Address Line 1<span className="text-primary">*</span>
              </span>
            </Label>
            <Controller
              name="addressLine1"
              control={control}
              render={({ field }) => (
                <Input
                  className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                  placeholder="Address Line 1"
                  readOnly
                  {...field}
                />
              )}
            />
            {errors.addressLine1 && (
              <p className="text-red-500">{errors.addressLine1.message}</p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="flex justify-between text-white">
              <span>
                Address Line 2<span className="text-primary">*</span>
              </span>
            </Label>
            <Controller
              name="addressLine2"
              control={control}
              render={({ field }) => (
                <Input
                  className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                  placeholder="Address Line 2"
                  readOnly
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <div className="grid gap-1">
            <Label className="flex justify-between text-white">
              <span>
                City<span className="text-primary">*</span>
              </span>
            </Label>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Input
                  className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                  placeholder="City name"
                  readOnly
                  {...field}
                />
              )}
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-white">
              Zip code <span className="text-primary">*</span>
            </Label>
            <Controller
              name="zipCode"
              control={control}
              render={({ field }) => (
                <Input
                  className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                  placeholder="Enter zip code"
                  readOnly
                  {...field}
                />
              )}
            />
            {errors.zipCode && (
              <p className="text-red-500">{errors.zipCode.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <div className="grid gap-1">
            <Label className="text-white">
              Region <span className="text-primary">*</span>
            </Label>
            <Controller
              name="region"
              control={control}
              render={({ field }) => (
                <Input
                  className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                  placeholder="Enter region"
                  readOnly
                  {...field}
                />
              )}
            />
            {errors.region && (
              <p className="text-red-500">{errors.region.message}</p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="flex justify-between text-white">
              <span>
                Country<span className="text-primary">*</span>
              </span>
            </Label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Input
                  className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                  placeholder="Enter country"
                  readOnly
                  {...field}
                />
              )}
            />
            {errors.country && (
              <p className="text-red-500">{errors.country.message}</p>
            )}
          </div>
        </div>
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
        <div>
          <div className="pb-4 ">
            <h3 className="font-medium text-white">Organizer Bio</h3>
            <p className="text-sm text-grey-100">
              Describe who you are, the types of events you host, or your
              mission. The bio is displayed on your organizer profile.
            </p>
          </div>
          <Textarea
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            className="bg-transparent border-grey-light"
          />
        </div>
        <div>
          <div className="pb-4 ">
            <h3 className="font-medium text-white">
              Description for event pages
            </h3>
            <p className="text-sm text-grey-100">
              Write a short description for this oraanizer to show on all vour
              event pades.
            </p>
          </div>
          <Textarea
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            className="bg-transparent border-grey-light"
          />
        </div>
        <div>
          <div className="flex justify-between pt-4 pb-4 border-b border-grey-light">
            <div>
              <h3 className="font-medium text-white">
                Social media and marketing
              </h3>
              <p className="text-sm text-grey-100">
                Let attendees know how to connect with you
              </p>
            </div>
            {/* <Button className="flex gap-2">
              <PlusIcon className="w-4 h-4" /> Add Social Link
            </Button> */}
          </div>
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 ">
            <div className="grid gap-1">
              <Label className="flex justify-between text-white">
                <span>
                  Facebook ID <span className="text-primary">*</span>
                </span>
              </Label>
              <Input
                className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                placeholder="Sonik"
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-white">
                Twiiter ID <span className="text-primary"></span>
              </Label>
              <Input
                className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                placeholder="https://www.sonic.com/home"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <Switch id="asdfasf" />
            <div className="grid space-y-1">
              <h3 className="text-sm font-medium text-white ">
                Social media and marketing
              </h3>
              <p className="text-xs text-grey-100">
                Let attendees know how to connect with you
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrganizerAccount;
