import { MapPinIcon } from "lucide-react";
import eventMap from "@/assets/images/events/event-map.png";

const Description = () => {
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
      <img
        src={eventMap}
        alt="event map"
        className="object-cover w-full mb-6"
      />
    </div>
  );
};

export default Description;
