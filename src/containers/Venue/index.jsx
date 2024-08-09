import { useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Autocomplete } from "@react-google-maps/api";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DashboardHeader from "@/layout/DashboardHeader";
import InputWithIcon from "@/components/InputWithIcon";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import BuildingIcon from "@/svgs/BuildingIcon";
import SearchIcon from "@/svgs/SearchIcon";

// Define schema with zod
const schema = z.object({
  venueId: z.string().nonempty({ message: "Venue ID is required" }),
  venueName: z.string().nonempty({ message: "Venue name is required" }),
  venueCapacity: z.string().nonempty({ message: "Venue capacity is required" }),
  venueEmail: z
    .string()
    .email({ message: "Invalid email" })
    .nonempty({ message: "Venue email is required" }),
  addressLine1: z.string().nonempty({ message: "Address Line 1 is required" }),
  addressLine2: z.string().optional(),
  zipCode: z.string().nonempty({ message: "Zip code is required" }),
  region: z.string().nonempty({ message: "Region is required" }),
  country: z.string().nonempty({ message: "Country is required" }),
  phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
  venueDescription: z
    .string()
    .nonempty({ message: "Venue description is required" }),
  venueStatus: z.boolean().default(false),
});

const CreateVenue = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      venueId: "",
      venueName: "",
      venueCapacity: "",
      venueEmail: "",
      addressLine1: "",
      addressLine2: "",
      zipCode: "",
      region: "",
      country: "",
      phoneNumber: "",
      venueDescription: "",
      venueStatus: false,
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
      setValue("addressLine2", getAddressComponent("sublocality_level_1"));
      setValue("zipCode", getAddressComponent("postal_code"));
      setValue("region", getAddressComponent("administrative_area_level_1"));
      setValue("country", getAddressComponent("country"));
    },
    [setValue],
  );

  const onSubmit = data => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <DashboardHeader
        title="Create a Venue"
        description="Add your venue details below"
        icon={<BuildingIcon className="w-5 h-5 text-grey-100" />}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-8 md:px-8">
        <div className="pb-4 mb-6 border-b border-grey-light">
          <h3 className="font-medium text-white">Basic</h3>
          <p className="text-grey-100">
            Get started by filling in the basics about your venue.
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex flex-wrap gap-6 lg:flex-nowrap ">
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="flex justify-between text-white">
                <span>
                  Venue ID <span className="text-primary">*</span>
                </span>
              </Label>
              <Controller
                name="venueId"
                control={control}
                render={({ field }) => (
                  <Input
                    className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                    placeholder="Enter a unique Id..."
                    {...field}
                  />
                )}
              />
              {errors.venueId && (
                <p className="text-red-500">{errors.venueId.message}</p>
              )}
            </div>
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="text-white">
                Venue name <span className="text-primary">*</span>
              </Label>
              <Controller
                name="venueName"
                control={control}
                render={({ field }) => (
                  <Input
                    className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                    placeholder="Enter place name"
                    {...field}
                  />
                )}
              />
              {errors.venueName && (
                <p className="text-red-500">{errors.venueName.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-6 lg:flex-nowrap ">
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="flex justify-between text-white">
                <span>
                  Venue Capacity <span className="text-primary">*</span>
                </span>
              </Label>
              <Controller
                name="venueCapacity"
                control={control}
                render={({ field }) => (
                  <Input
                    className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                    placeholder="100"
                    {...field}
                  />
                )}
              />
              {errors.venueCapacity && (
                <p className="text-red-500">{errors.venueCapacity.message}</p>
              )}
            </div>
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="text-white">
                Venue Email <span className="text-primary">*</span>
              </Label>
              <Controller
                name="venueEmail"
                control={control}
                render={({ field }) => (
                  <Input
                    className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                    placeholder="example@mail.com"
                    {...field}
                  />
                )}
              />
              {errors.venueEmail && (
                <p className="text-red-500">{errors.venueEmail.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-6 lg:flex-nowrap ">
            <div className="flex flex-col w-full gap-1">
              <Label className="flex justify-between text-white">
                <span>
                  Search Address<span className="text-primary">*</span>
                </span>
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
                  placeholder="Search Address"
                />
              </Autocomplete>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 lg:flex-nowrap ">
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
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
                    {...field}
                  />
                )}
              />
              {errors.addressLine1 && (
                <p className="text-red-500">{errors.addressLine1.message}</p>
              )}
            </div>
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
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
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-6 lg:flex-nowrap ">
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
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
                    {...field}
                  />
                )}
              />
              {errors.zipCode && (
                <p className="text-red-500">{errors.zipCode.message}</p>
              )}
            </div>
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
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
                    {...field}
                  />
                )}
              />
              {errors.region && (
                <p className="text-red-500">{errors.region.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-6 lg:flex-nowrap ">
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
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
                    {...field}
                  />
                )}
              />
              {errors.country && (
                <p className="text-red-500">{errors.country.message}</p>
              )}
            </div>
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="text-white">
                Phone number <span className="text-primary">*</span>
              </Label>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <Input
                    className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                    placeholder="+12-234-5678-9"
                    {...field}
                  />
                )}
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-6 lg:flex-nowrap ">
            <div className="flex flex-col w-full gap-1">
              <Label className="flex justify-between text-white">
                <span>
                  Venue description
                  <span className="ml-1 text-primary">*</span>
                </span>
                <span className="text-xs font-medium text-grey-100">
                  50/250
                </span>
              </Label>
              <Controller
                name="venueDescription"
                control={control}
                render={({ field }) => (
                  <Textarea
                    placeholder="Type your message here."
                    className="bg-transparent border-grey-light"
                    {...field}
                  />
                )}
              />
              {errors.venueDescription && (
                <p className="text-red-500">
                  {errors.venueDescription.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-6 ">
            <div className="flex flex-col w-full gap-1">
              <div className="flex justify-between w-full px-4 py-4 mt-2 lg:w-1/2 bg-grey-200 rounded-2xl h-fit">
                <div>
                  <Label className="text-white">Venue Status</Label>
                  <p className="text-xs text-grey-100">
                    Enable so that the venue will be accessible
                  </p>
                </div>
                <Controller
                  name="venueStatus"
                  control={control}
                  render={({ field }) => <Switch id="take-seat" {...field} />}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 py-8 mb-4 border-t mt-14 border-grey-light">
          <Button variant="outline" className="w-40">
            Cancel
          </Button>
          <Button type="submit" className="w-40">
            Done
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreateVenue;
