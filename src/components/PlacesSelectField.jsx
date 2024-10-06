import SearchIcon from "@/svgs/SearchIcon";
import InputWithIcon from "./InputWithIcon";
import { Autocomplete } from "@react-google-maps/api";
import { Label } from "./ui/label";
import { useCallback } from "react";
import InformationIcon from "@/svgs/InformationIcon";

const PlacesSelectField = ({
  className,
  Icon,
  label,
  placeholder,
  options,
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

      setValue("venue.google_place_id", place.place_id);
      setValue(
        "venue.formatted_address",
        getAddressComponent("street_number")
          ? `${getAddressComponent("street_number")} ${getAddressComponent("route")}`
          : getAddressComponent("route"),
      );
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setValue("venue.location", { type: "Point", coordinates: [lng, lat] });
      setValue(
        "venue.region",
        getAddressComponent("administrative_area_level_1"),
      );
      setValue("venue.country", getAddressComponent("country"));
      setValue("venue.city", getAddressComponent("locality"));
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
      {errorMessage && (
        <span className="flex gap-1 text-xs text-error-dark">
          <InformationIcon />
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default PlacesSelectField;
