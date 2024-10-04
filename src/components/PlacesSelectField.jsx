import SearchIcon from "@/svgs/SearchIcon";
import InputWithIcon from "./InputWithIcon";
import { Autocomplete } from "@react-google-maps/api";
import { Label } from "./ui/label";
import { useCallback } from "react";

const PlacesSelectField = ({
  className,
  Icon,
  label,
  placeholder,
  options,
  hasError,
  errorMessage,
  required,
  setValue,
  ...props
}) => {
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
      setValue("venueName", place?.formatted_address);
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
    <div className="w-full flex flex-col gap-3">
      <Label className="flex justify-between text-white">
        <span>
          Venue<span className="text-primary">*</span>
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
          name="venue"
          className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
          placeholder={placeholder}
          {...props}
        />
      </Autocomplete>
    </div>
  );
};

export default PlacesSelectField;
