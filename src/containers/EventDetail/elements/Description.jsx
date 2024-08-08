import { MapPinIcon } from "lucide-react";
import { GoogleMap } from "@react-google-maps/api";
import { mapOptions } from "@/contants/mapOptions";
import MapMarker from "@/components/MapMarker";

const Description = () => {
  const mapContainerStyle = {
    height: "100%",
    width: "100%",
  };

  const coords = {
    lat: 40.712776, // Example latitude
    lng: -74.005974, // Example longitude
  };
  return (
    <div>
      <p className="mb-4 text-sm text-grey-100">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="flex items-center justify-start gap-3 mb-4">
        <div className="flex items-center justify-center w-12 h-12 border rounded-full border-grey-light">
          <MapPinIcon className="text-grey-100" />
        </div>
        <p className="text-sm text-grey-100">
          Venue Location:{" "}
          <strong className="text-white">
            1087 Queen Street West · Toronto, Ontario
          </strong>
        </p>
      </div>
      {coords && (
        <div className="flex flex-col w-full h-56 gap-1 overflow-hidden rounded-2xl">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={coords}
            zoom={10}
            options={mapOptions}
          >
            <MapMarker
              position={coords}
              label={" 1087 Queen Street West · Toronto, Ontario"}
            />
          </GoogleMap>
        </div>
      )}
    </div>
  );
};

export default Description;
