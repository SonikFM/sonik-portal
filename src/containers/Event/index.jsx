import { Select } from "@/components/Select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DashboardHeader from "@/layout/DashboardHeader";
import FoldersIcon from "@/svgs/FoldersIcon";
import InformationIcon from "@/svgs/InformationIcon";
import { useCallback, useEffect, useRef, useState } from "react";
import FlashLightIcon from "@/svgs/FlashLightIcon";
import TimerIcon from "@/svgs/TimerIcon";
import InputWithIcon from "@/components/InputWithIcon";
import CalendarIcon from "@/svgs/CalendarIcon";
import { AppDatePicker } from "@/components/AppDatePicker";
import ArtistTime from "./elements/ArtistTime";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileUpload from "@/components/FileUpload";
import { Textarea } from "@/components/ui/textarea";
import Ticket from "./elements/Ticket";
import { Switch } from "@/components/ui/switch";
import DollarIcon from "@/svgs/DollarIcon";
import Guest from "./elements/Guest";
import { useNavigate } from "react-router-dom";
import { Autocomplete, GoogleMap } from "@react-google-maps/api";
import { Controller, useForm } from "react-hook-form";
import SearchIcon from "@/svgs/SearchIcon";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { mapOptions } from "@/contants/mapOptions";
import MapMarker from "@/components/MapMarker";
import { useDispatch, useSelector } from "react-redux";
import { searchArtists } from "@/store/global/actions";
import axios from "axios";
import ArtistSearch from "./elements/ArtistSearch";
import TabMenu from "@/components/TabMenu";
import BasicInfo from "./elements/BasicInfo";
import Timeline from "./elements/Timeline";
import Lineup from "./elements/Lineup";

// Define schema with zod
const schema = z.object({
  eventId: z.string().nonempty({ message: "Venue ID is required" }),
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
  city: z.string().nonempty({ message: "City is required" }),
  country: z.string().nonempty({ message: "Country is required" }),
  phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
  venueDescription: z
    .string()
    .nonempty({ message: "Venue description is required" }),
  venueStatus: z.boolean().default(false),
  coords: z
    .object({
      lat: z.string().nullable(),
      lng: z.string().nullable(),
    })
    .nullable(),
});

const DEBOUNCE_DELAY = 500;

const tabs = [
  {
    id: "1",
    label: "Basics",
    desc: "Start by entering the basic details of your event",
    component: <BasicInfo />,
    checked: false,
  },
  {
    id: "2",
    label: "Timeline",
    desc: "Set the event schedule, sales start time, and performance order.",
    component: <Timeline />,
    checked: false,
  },
  {
    id: "3",
    label: "Lineup",
    desc: "Set the schedule and performance order for your event, from start to finish",
    component: <Lineup />,
    checked: false,
  },
  {
    id: "4",
    label: "Image",
    desc: "Upload an image for your event.",
    component: () => <div>Option 1</div>,
    checked: false,
  },
  {
    id: "5",
    label: "Tickets",
    desc: "Create ticket types, set prices, and limit the number of tickets each person can purchase.",
    component: () => <div>Option 1</div>,
    checked: false,
  },
  {
    id: "6",
    label: "Settings",
    desc: "Assign contact details and grant reporting access",
    component: () => <div>Option 1</div>,
    checked: false,
  },
];

const CreateEvent = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [artistQuery, setArtistQuery] = useState("");
  const dispatch = useDispatch();
  const cancelTokenSourceRef = useRef(null);
  const spotify = useSelector(state => state?.app?.spotify);
  console.log({ spotify });
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    const handleDebounce = async () => {
      if (cancelTokenSourceRef.current) {
        cancelTokenSourceRef.current.cancel(
          "Operation canceled due to new request.",
        );
      }
      if (artistQuery) {
        cancelTokenSourceRef.current = axios.CancelToken.source();
        dispatch(
          searchArtists({
            artistQuery,
            cancelToken: cancelTokenSourceRef.current.token,
          }),
        );
      }
    };

    const debounceTimer = setTimeout(handleDebounce, DEBOUNCE_DELAY);

    return () => clearTimeout(debounceTimer);
  }, [artistQuery, dispatch]);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const navigate = useNavigate();
  const onIconClick = () => {
    navigate(-1);
  };

  const {
    control,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      eventId: "",
      venueName: "",
      venueCapacity: "",
      venueEmail: "",
      addressLine1: "",
      addressLine2: "",
      zipCode: "",
      region: "",
      country: "",
      city: "",
      phoneNumber: "",
      venueDescription: "",
      venueStatus: false,
      coords: null,
    },
  });

  const coords = watch("coords");
  const venueName = watch("venueName");

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
      console.log({ city: getAddressComponent("locality") });
      setValue("city", getAddressComponent("locality"));
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setValue("coords", { lat, lng });
    },
    [setValue],
  );

  const mapContainerStyle = {
    height: "100%",
    width: "100%",
  };

  const [selectedArtists, setSelectedArtists] = useState([]);
  const handleArtistSelect = artist => {
    if (selectedArtists.find(a => a.id === artist.id)) {
      setSelectedArtists(selectedArtists.filter(a => a.id !== artist.id));
    } else {
      setSelectedArtists([...selectedArtists, artist]);
    }
  };

  return (
    <>
      <DashboardHeader
        title="Create an Event"
        description="Add your event deatails below"
        icon={<FoldersIcon className="w-5 h-5 text-grey-100" />}
        onIconClick={onIconClick}
        toggleDrawer={toggleDrawer}
      ></DashboardHeader>
      <div className="max-w-[1100px]">
        <div className="flex p-4 md:p-8 justify-between">
          <TabMenu
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            title="SELECT MENU"
          />
          <div className="w-full max-w-[680px]">
            <div className="pb-4 mb-6 border-b border-grey-light">
              <h3 className="font-medium text-white">{activeTab.label}</h3>
              <p className="text-grey-100">{activeTab.desc}</p>
            </div>
            {activeTab.component}
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateEvent;
