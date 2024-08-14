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
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileUpload from "@/components/FileUpload";
import { Textarea } from "@/components/ui/textarea";
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
import { useDispatch } from "react-redux";
import { searchArtists } from "@/store/global/actions";
import axios from "axios";
import ArtistSearch from "./elements/ArtistSearch";
import ArtistStartTimeList from "./elements/ArtistStartTimeList";
import TicketList from "./elements/TicketList";

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
  artistTimings: z
    .array({
      name: z.string().optional(),
      time: z.string().optional(),
    })
    .nonempty(),
  coords: z
    .object({
      lat: z.string().nullable(),
      lng: z.string().nullable(),
    })
    .nullable(),
});

const DEBOUNCE_DELAY = 500;

const CreateEvent = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [artistQuery, setArtistQuery] = useState("");
  const dispatch = useDispatch();
  const cancelTokenSourceRef = useRef(null);

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
      artistTimings: [],
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
  const [ticketList, setTicketList] = useState([
    {
      id: `21344${Math.floor(Math.random() * 100)}12341234`,
      name: `ticket-21344${Math.floor(Math.random() * 100)}12341234`,
      tickets: Math.floor(Math.random() * 100),
    },
    {
      id: `21344${Math.floor(Math.random() * 100)}12341234`,
      name: `ticket-21344${Math.floor(Math.random() * 100)}12341234`,
      tickets: Math.floor(Math.random() * 100),
    },
  ]);
  const handleArtistSelect = artist => {
    if (selectedArtists.find(a => a.id === artist.id)) {
      setSelectedArtists(selectedArtists.filter(a => a.id !== artist.id));
    } else {
      setSelectedArtists([...selectedArtists, artist]);
    }
  };

  const handleAddArtistStartTime = () => {
    setSelectedArtists([
      ...selectedArtists,
      {
        id: `21344${Math.floor(Math.random() * 100)}12341234`,
        name: "New Artist",
      },
    ]);
  };
  const handleAddTicket = () => {
    setTicketList([
      ...ticketList,
      {
        id: `21344${Math.floor(Math.random() * 100)}12341234`,
        name: "New Artist",
      },
    ]);
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
      <div className="p-4 md:p-8">
        <div className="pb-4 mb-6 border-b border-grey-light">
          <h3 className="font-medium text-white">Basic</h3>
          <p className="text-grey-100">
            Get started by filling in the basics about your event.
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex flex-wrap gap-6 md:flex-nowrap ">
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="flex justify-between text-white">
                <span>
                  Event ID <span className="text-primary">*</span>
                </span>
                <span className="text-xs font-medium text-grey-100">1/7</span>
              </Label>
              <Input
                className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                placeholder="Enter a unique Id..."
              />
              <span className="flex gap-1 text-xs text-grey-100">
                <InformationIcon />
                Must include a special character
              </span>
            </div>
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="text-white">
                Type <span className="text-primary">*</span>
              </Label>
              <Select
                className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                placeholder="Enter a unique Id..."
                icon={<FlashLightIcon className="text-grey-100" />}
                options={[
                  { value: "concert", label: "Concert" },
                  { value: "dj", label: "DJ" },
                  { value: "party", label: "Party" },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-6 md:flex-nowrap ">
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="flex justify-between text-white">
                <span>
                  Title<span className="text-primary">*</span>
                </span>
                <span className="text-xs font-medium text-grey-100">12/50</span>
              </Label>
              <Input
                className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                placeholder="Enter a unique Id..."
              />
              <span className="flex gap-1 text-xs text-grey-100">
                <InformationIcon />
                Must include a special character
              </span>
            </div>
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="text-white">
                Genre <span className="text-primary">*</span>
              </Label>
              <div className="flex flex-wrap gap-3">
                <div className="flex w-[calc(25%-12px)] gap-2">
                  <Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
                  <Label className="text-white">Rock</Label>
                </div>
                <div className="flex w-[calc(25%-12px)] gap-2">
                  <Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
                  <Label className="text-white">Rock</Label>
                </div>
                <div className="flex w-[calc(25%-12px)] gap-2">
                  <Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
                  <Label className="text-white">Rock</Label>
                </div>
                <div className="flex w-[calc(25%-12px)] gap-2">
                  <Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
                  <Label className="text-white">Rock</Label>
                </div>
                <div className="flex w-[calc(25%-12px)] gap-2">
                  <Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
                  <Label className="text-white">Rock</Label>
                </div>
                <div className="flex w-[calc(25%-12px)] gap-2">
                  <Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
                  <Label className="text-white">Rock</Label>
                </div>
                <div className="flex w-[calc(25%-12px)] gap-2">
                  <Checkbox className="w-5 h-5 border-grey-light checked:border-primary" />
                  <Label className="text-white">Rock</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-6 md:flex-nowrap ">
            <ArtistSearch
              artistQuery={artistQuery}
              setArtistQuery={setArtistQuery}
              handleArtistSelect={handleArtistSelect}
              selectedArtists={selectedArtists}
              setSelectedArtists={setSelectedArtists}
            />
            <div className="flex flex-wrap gap-6 lg:w-1/2">
              <div className="flex flex-col w-full gap-1">
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
                    className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                    placeholder="Venue name"
                  />
                </Autocomplete>
              </div>
              <div className="flex flex-col w-full gap-1">
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
              <div className="flex flex-col w-full gap-1">
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
              <div className="flex flex-col w-full gap-1">
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

              <div className="flex flex-col w-full gap-1">
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
              <div className="flex flex-col w-full gap-1 ">
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
              <div className="flex flex-col w-full gap-1 ">
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
              {coords && (
                <div className="flex flex-col w-full h-56 gap-1 overflow-hidden rounded-2xl">
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={coords}
                    zoom={10}
                    options={mapOptions}
                  >
                    <MapMarker position={coords} label={venueName} />
                  </GoogleMap>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="pb-4 mt-10 mb-6 border-b border-grey-light">
          <h3 className="font-medium text-white">Timeline</h3>
          <p className="text-grey-100">
            Set the timing of your event, when it’s on sale and the running
            order.
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex flex-wrap gap-6 md:flex-nowrap ">
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="flex justify-between text-white">
                <span>
                  Timezone <span className="text-primary">*</span>
                </span>
              </Label>
              <Select
                className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                placeholder="COT (Colombian Time) - UTC-5"
                icon={<TimerIcon className="text-grey-100" />}
              />
              <span className="flex gap-1 text-xs text-grey-100">
                <InformationIcon />
                Must include a special character
              </span>
            </div>
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="text-white">
                Announcement <span className="text-primary">*</span>
              </Label>
              <AppDatePicker
                icon={<CalendarIcon className="mr-3 text-grey-100" />}
                className="text-white bg-transparent border-grey-light rounded-[10px] placeholder:text-grey-100"
                placeholder="Fri, Apr 16,2024 12:00 PM"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-6 md:flex-nowrap ">
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="text-white">
                Event on sale <span className="text-primary">*</span>
              </Label>
              <AppDatePicker
                icon={<CalendarIcon className="mr-3 text-grey-100" />}
                className="text-white bg-transparent border-grey-light rounded-[10px] placeholder:text-grey-100"
                placeholder="Fri, Apr 16,2024 12:00 PM"
              />
            </div>
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="text-white">
                Event off sale <span className="text-primary">*</span>
              </Label>
              <AppDatePicker
                icon={<CalendarIcon className="mr-3 text-grey-100" />}
                className="text-white bg-transparent border-grey-light rounded-[10px] placeholder:text-grey-100"
                placeholder="Fri, Apr 16,2024 12:00 PM"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-6 md:flex-nowrap ">
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="text-white">
                Event start <span className="text-primary">*</span>
              </Label>
              <AppDatePicker
                icon={<CalendarIcon className="mr-3 text-grey-100" />}
                className="text-white bg-transparent border-grey-light rounded-[10px] placeholder:text-grey-100"
                placeholder="Fri, Apr 16,2024 12:00 PM"
              />
            </div>
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="text-white">
                Event end<span className="text-primary">*</span>
              </Label>
              <AppDatePicker
                icon={<CalendarIcon className="mr-3 text-grey-100" />}
                className="text-white bg-transparent border-grey-light rounded-[10px] placeholder:text-grey-100"
                placeholder="Fri, Apr 16,2024 12:00 PM"
              />
            </div>
          </div>
        </div>
        <div className="pb-4 mt-10 mb-6 border-b border-grey-light">
          <h3 className="font-medium text-white">Lineup</h3>
          <p className="text-grey-100">
            From open to close and every performance in-between, set the order
            and timing of your event
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex flex-wrap gap-6 xl:flex-nowrap ">
            <div className="flex flex-col w-full gap-1 xl:w-1/2">
              <Label className="flex justify-between text-white">
                <span>
                  Artist start time <span className="text-primary">*</span>
                </span>
              </Label>
              <ArtistStartTimeList
                list={selectedArtists}
                updateArtistStartTime={setSelectedArtists}
              />
              <Button
                variant="outline"
                className="gap-1 mt-3 bg-transparent w-36"
                onClick={handleAddArtistStartTime}
              >
                <PlusIcon /> Add a time
              </Button>
            </div>
            <div className="flex flex-col w-full gap-1 xl:w-1/2">
              <Label className="text-white">
                Announcement <span className="text-primary">*</span>
              </Label>

              <InputWithIcon
                icon={<TimerIcon className="text-grey-100" />}
                className="text-white bg-grey-200 border-grey-200 placeholder:text-grey-100 rounded-[10px] "
                placeholder="12:00 "
              />
            </div>
          </div>
        </div>
        <div className="pb-4 mt-10 mb-6 border-b border-grey-light">
          <h3 className="font-medium text-white">Image</h3>
          <p className="text-grey-100">Upload an image about your event.</p>
        </div>
        <div className="space-y-8">
          <Tabs defaultValue="a1" className="w-full ">
            <TabsList className="flex flex-wrap justify-start w-full h-auto p-1 rounded-md bg-grey-200 w-fit ml-o ">
              <TabsTrigger className="px-4 rounded-md" value="a1">
                Billboard
              </TabsTrigger>
              <TabsTrigger className="px-4 rounded-md" value="a2">
                Ticket
              </TabsTrigger>
              <TabsTrigger className="px-4 rounded-md" value="a3">
                Discover Feed
              </TabsTrigger>
              <TabsTrigger className="px-4 rounded-md" value="a4">
                Event Page
              </TabsTrigger>
              <TabsTrigger className="px-4 rounded-md" value="a5">
                Search results
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="a1"
              className="h-[448px] w-full bg-grey-200 rounded-lg mt-4"
            >
              <FileUpload />
            </TabsContent>
            <TabsContent
              value="a2"
              className="h-[448px] w-full bg-grey-200 rounded-lg mt-4"
            >
              <FileUpload />
            </TabsContent>
            <TabsContent
              value="a3"
              className="h-[448px] w-full bg-grey-200 rounded-lg mt-4"
            >
              <FileUpload />
            </TabsContent>
            <TabsContent
              value="a4"
              className="h-[448px] w-full bg-grey-200 rounded-lg mt-4"
            >
              <FileUpload />
            </TabsContent>
            <TabsContent
              value="a5"
              className="h-[448px] w-full bg-grey-200 rounded-lg mt-4"
            >
              <FileUpload />
            </TabsContent>
          </Tabs>
        </div>
        <div className="pb-4 mt-10 mb-6 border-b border-grey-light">
          <h3 className="font-medium text-white">Information</h3>
          <p className="text-grey-100">
            Tell your fans about your event and set an age limit
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col w-full gap-1">
            <Label className="flex justify-between text-white">
              <span>
                Description
                <span className="ml-1 text-primary">*</span>
              </span>
              <span className="text-xs font-medium text-grey-100">
                500/1500
              </span>
            </Label>
            <Textarea
              placeholder="Type your message here."
              className="bg-transparent border-grey-light"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <Label className="flex justify-between text-white">
              <span>
                FAQS
                <span className="ml-1 text-primary">*</span>
              </span>
              <span className="text-xs font-medium text-grey-100">
                500/1500
              </span>
            </Label>
            <Textarea
              placeholder="Type your message here."
              className="bg-transparent border-grey-light"
            />
          </div>
          <div className="flex flex-wrap gap-6 md:flex-nowrap ">
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="flex text-white">
                <span>
                  Age Limit <span className="text-primary">*</span>
                </span>
              </Label>
              <Input
                className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                placeholder="This is 21+ event"
              />
            </div>
            <div className="flex flex-col w-full gap-1 lg:w-1/2">
              <Label className="text-white">
                Presented by <span className="text-primary">*</span>
              </Label>
              <Input
                className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                placeholder="Avant Gradner"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-1">
            <Label className="flex justify-between text-white">
              <span>
                Purchase confirmation email
                <span className="ml-1 text-primary">*</span>
              </span>
              <span className="text-xs font-medium text-grey-100">
                500/1500
              </span>
            </Label>
            <Textarea
              placeholder="Type your message here."
              className="bg-transparent border-grey-light"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <Label className="flex justify-between text-white">
              <span>
                Days of event Email
                <span className="ml-1 text-primary">*</span>
              </span>
              <span className="text-xs font-medium text-grey-100">
                500/1500
              </span>
            </Label>
            <Textarea
              placeholder="Type your message here."
              className="bg-transparent border-grey-light"
            />
          </div>
        </div>
        <div className="pb-4 mt-10 mb-6 border-b border-grey-light">
          <h3 className="font-medium text-white">Tickets</h3>
          <p className="text-grey-100">
            Create ticket types, set the price and limit how many tickets people
            can buy.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 md:flex-nowrap ">
          <div className="flex justify-between w-full px-6 py-1 py-4 mt-2 lg:w-1/2 bg-grey-200 rounded-2xl h-fit">
            <div>
              <Label className="text-white">This is a seated event</Label>
              <p className="text-xs text-grey-100">
                Enable so that you can access seatmaps
              </p>
            </div>
            <Switch id="take-seat" />
          </div>
          <div className="flex flex-col w-full gap-1 lg:w-1/2">
            <Label className="text-white">
              Currency<span className="text-primary">*</span>
            </Label>
            <Select
              icon={<DollarIcon className="mr-1 text-grey-100" />}
              className="rounded-[10px]"
              placeholder="USD"
              options={[]}
            />
            <Label className="text-white mt-7">
              Ticket Limit Per Person<span className="text-primary">*</span>
            </Label>
            <Input
              className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
              placeholder="6"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-1 pb-4 mt-10 ">
          <Label className="text-white">
            Ticket Types<span className="text-primary">*</span>
          </Label>
          <TicketList list={ticketList} updateList={setTicketList} />
          {/* <div className="px-4 py-1 mt-2 bg-grey-200 rounded-2xl">
            <Ticket className="py-4 border-b border-grey-light " />
            <Ticket className="py-4 border-b border-grey-light " />
            <Ticket className="" />
          </div> */}
          <Button
            variant="outline"
            className="gap-1 mt-3 bg-transparent cursor-pointer w-36"
            onClick={handleAddTicket}
          >
            <PlusIcon />
            Add a Ticket type
          </Button>
        </div>
        <div className="pb-4 mt-10 mb-6 border-b border-grey-light">
          <h3 className="font-medium text-white">Settings</h3>
          <p className="text-grey-100">
            Assign contact details and reporting access.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 mb-6 md:flex-nowrap">
          <div className="flex flex-col w-full gap-1 lg:w-1/2">
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
          </div>
          <div className="flex flex-col w-full gap-1 lg:w-1/2">
            <Label className="flex text-white justify-betweeb">
              Guest Access<span className="text-primary">*</span>
            </Label>
            <div className="px-4 py-1 mt-2 bg-grey-200 rounded-2xl">
              <Guest className="py-4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <Label className="flex justify-between text-white">
            <span>
              Internal Notes
              <span className="ml-1 text-primary">*</span>
            </span>
            <span className="text-xs font-medium text-grey-100">500/1500</span>
          </Label>
          <Textarea
            placeholder="Type your message here."
            className="bg-transparent border-grey-light"
          />
        </div>
        <div className="flex justify-end gap-3 py-8 mb-4 border-t mt-14 border-grey-light">
          <Button variant="outline" className="w-40">
            Cancel
          </Button>
          <Button className="w-40">Continue</Button>
        </div>
      </div>
    </>
  );
};
export default CreateEvent;
