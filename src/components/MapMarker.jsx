import { OverlayView, OverlayViewF } from "@react-google-maps/api";
import icon from "@/assets/images/map-pin.svg";

const MapMarker = ({ position, label }) => {
  return (
    <OverlayViewF
      position={position}
      mapPaneName={OverlayView.MARKER_LAYER}
      getPixelPositionOffset={() => ({ x: -15, y: -15 })}
    >
      <div className="absolute flex flex-col items-center justify-center -translate-x-[50%] -translate-y-[50%]">
        <img src={icon} className="w-6 h-6" alt="marker-icon" />
        <div className="flex items-center h-5 px-2 mt-2 overflow-hidden text-white rounded-full bg-pink whitespace-nowrap max-w-[100%]">
          {label}
        </div>
      </div>
    </OverlayViewF>
  );
};

export default MapMarker;
