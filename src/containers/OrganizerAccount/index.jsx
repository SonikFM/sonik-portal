import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DashboardHeader from "@/layout/DashboardHeader";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import FileUpload from "@/components/FileUpload";
import { Textarea } from "@/components/ui/textarea";
import Profile from "./elements/Profile";
import UploadIcon from "@/svgs/UploadIcon";
import { useNavigate, useParams } from "react-router-dom";
import { Autocomplete } from "@react-google-maps/api";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useRef, useState } from "react";
import InputWithIcon from "@/components/InputWithIcon";
import SearchIcon from "@/svgs/SearchIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  createOrganization,
  fetchOrganization,
  updateOrganization,
} from "@/store/organization/actions";
import { Select } from "@/components/Select";
import { updateState } from "@/store/organization/slice";
import { createOrg, createOrgInit } from "@/constants/organizationSchemas";
import https from "@/lib/https";

const statusOptions = [
  {
    key: true,
    value: "active",
    label: "Active",
  },
  {
    key: false,
    value: "in-active",
    label: "In-active",
  },
];

const OrganizerAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValuesRef = useRef();
  const { id } = useParams();

  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(statusOptions[0]);
  const { user } = useSelector(state => state.app);
  const {
    isLoading,
    error,
    data,
    status: apiStatus,
  } = useSelector(state => state.organization);

  useEffect(() => {
    dispatch(updateState({ key: "data", value: {} }));
    initialValuesRef.current = null;
  }, []);

  useEffect(() => {
    if (!isLoading && (apiStatus === "created" || apiStatus === "updated")) {
      dispatch(updateState({ key: "status", value: "idle" }));
      navigate("/organization");
    }
  }, [apiStatus, isLoading]);

  useEffect(() => {
    if (id) {
      dispatch(fetchOrganization(id));
    }
  }, [id]);

  const onIconClick = () => {
    navigate(-1);
  };

  const fillUpFields = values => {
    setValue("name", values?.name || "");
    setValue("website", values?.website || "");
    setValue("_created_by", values?._created_by?._id || user?._id || "");
    setValue("address_line_one", values?.address?.address_line_one || "");
    setValue("address_line_two", values?.address?.address_line_two || "");
    setValue("postal_code", values?.address?.postal_code || "");
    setValue("administrative_area", values?.address?.administrative_area || "");
    setValue("country", values?.address?.country || "");
    setValue("locality", values?.address?.locality || "");
    setValue("description", values.description || "");
    setValue("query", values?.address?.query || "");
    setValue("bio", values?._created_by?.bio || "");
    setValue("description", values?.description || "");
    const st = (statusOptions || []).find(i => i.key === values?.status);
    setStatus(st || statusOptions[1]);

    initialValuesRef.current = {
      name: values.name || "",
      website: values.website || "",
      _created_by: values._created_by?._id || user?._id || "",
      postal_code: values?.address?.postal_code || "",
      administrative_area: values?.address?.administrative_area || "",
      country: values?.address?.country || "",
      locality: values?.address?.locality || "",
      description: values.description || "",
      bio: values._created_by?.bio || "",
      address_line_one: values?.address?.address_line_one,
      address_line_two: values?.address?.address_line_two,
      status: st,
    };
  };

  useEffect(() => {
    if (!isLoading && data) {
      fillUpFields(data);
    }
  }, [data, isLoading, error]);

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(createOrg),
    defaultValues: createOrgInit,
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

      setValue("query", place?.formatted_address);

      setValue(
        "address_line_one",
        getAddressComponent("street_number")
          ? `${getAddressComponent("street_number")} ${getAddressComponent("route")}`
          : getAddressComponent("route"),
      );
      setValue("query", place?.formatted_address);
      setValue("address_line_two", getAddressComponent("sublocality_level_1"));
      setValue("postal_code", getAddressComponent("postal_code"));
      setValue(
        "administrative_area",
        getAddressComponent("administrative_area_level_1"),
      );
      setValue("country", getAddressComponent("country"));
      setValue("locality", getAddressComponent("locality"));
      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();
      setValue("geocode", { latitude, longitude });
    },
    [setValue],
  );

  const handleFileUpload = async file => {
    try {
      const response = await https.get(
        "/api/v1/uploads/generate-presigned-url",
        {
          params: {
            fileName: file.name,
            fileType: file.type,
            imageType: "organizations",
          },
        },
      );
      const { url } = response.data;

      await https.put(url, file, {
        headers: {
          "Content-Type": file.type,
        },
      });

      return url.split("?")[0]; // URL without query parameters
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  const onSubmit = async form => {
    const formData = {
      _created_by: form._created_by || user?._id || "",
      address: {
        query: form.query || "",
        address_line_one: form.address_line_one || "",
        address_line_two: form.address_line_two || "",
        locality: form.locality || "",
        administrative_area: form.administrative_area || "",
        postal_code: form.postal_code || "",
        country: form.country || "",
      },
      geocode: form.geocode || { latitude: 0, longitude: 0 },
      image: {
        url: "",
        caption: "Tech Innovators Logo",
      },
      name: form.name || "",
      description: form.description || "",
      website: form.website || "",
      facebookID: form.facebookID || "",
      instagramID: form.instagramID || "",
      twitterID: form.twitterID || "",
      status: status.key || false,
    };
    if (file) {
      formData.append("image", file);
    }
    if (data?._id) {
      dispatch(updateOrganization({ id, payload: formData }))
        .unwrap()
        .then(err => console.log({ mesage: "success", err }))
        .catch(err => console.log({ mesage: "error", err }));
      handleFileUpload(file);
    } else {
      dispatch(createOrganization(formData))
        .unwrap()
        .then(err => console.log({ mesage: "success", err }))
        .catch(err => console.log({ mesage: "error", err }));
      handleFileUpload(file);
    }
  };

  const currentValues = watch();

  // Function to compare current values with initial values
  const isFormChanged = () => {
    const initialValues = initialValuesRef.current;
    if (!initialValues) return false;

    return (
      initialValues.name !== currentValues.name ||
      initialValues.website !== currentValues.website ||
      initialValues._created_by !== currentValues._created_by ||
      initialValues.address_line_one !== currentValues.address_line_one ||
      initialValues.postal_code !== currentValues.postal_code ||
      initialValues.administrative_area !== currentValues.administrative_area ||
      initialValues.country !== currentValues.country ||
      initialValues.locality !== currentValues.locality ||
      initialValues.description !== currentValues.description ||
      initialValues.status?.key !== status?.key ||
      initialValues.bio !== currentValues.bio ||
      initialValues.facebookID !== currentValues.facebookID ||
      initialValues.twitterID !== currentValues.twitterID ||
      initialValues.instagramID !== currentValues.instagramID
    );
  };

  console.log({
    isLoading,
    status,
    data,
    current: initialValuesRef?.current,
    currentValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DashboardHeader
        title="Add Orgranizer Profile"
        description="Let attendees know who is hosting events"
        icon={<ChevronLeft className="w-5 h-5 text-grey-100" />}
        onIconClick={onIconClick}
      >
        {/* <Button variant="outline"> Cancel </Button> */}
        <Button type="submit" disabled={!isFormChanged() || isLoading}>
          {isLoading
            ? data?._id
              ? "Updating"
              : "Loading"
            : data?._id
              ? "Update"
              : "Save"}
        </Button>
      </DashboardHeader>
      <div className="px-4 py-8 space-y-6 md:px-8">
        {data?._id && (
          <div className="grid grid-cols-1 ">
            <div className="grid gap-1">
              <Label className="flex justify-between text-white">
                <span>
                  Organization ID <span className="text-primary">*</span>
                </span>
              </Label>
              <Input
                className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                placeholder="Organization ID"
                readOnly
                value={data?._id}
              />
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <div className="grid gap-1">
            <Label className="flex justify-between text-white">
              <span>
                Organization Owner <span className="text-primary">*</span>
              </span>
            </Label>
            <Controller
              name="_created_by"
              control={control}
              render={({ field }) => (
                <Input
                  className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                  placeholder="66bec62763496d5ee89d7fbd"
                  readOnly
                  {...field}
                />
              )}
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-white">
              Website <span className="text-primary"></span>
            </Label>
            <Controller
              name="website"
              control={control}
              render={({ field }) => (
                <Input
                  className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                  placeholder="https://www.sonic.com/home"
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
                Organization Name <span className="text-primary">*</span>
              </span>
            </Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                  placeholder="Sonik"
                  {...field}
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
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
              }}
            >
              <InputWithIcon
                icon={<SearchIcon />}
                className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                placeholder="Search here"
                {...control.register("query")}
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
              name="address_line_one"
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
            {errors.address_line_one && (
              <p className="text-red-500">{errors.address_line_one.message}</p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="flex justify-between text-white">
              <span>
                Address Line 2<span className="text-primary">*</span>
              </span>
            </Label>
            <Controller
              name="address_line_two"
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
              name="locality"
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
              name="postal_code"
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
            {errors.postal_code && (
              <p className="text-red-500">{errors.postal_code.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <div className="grid gap-1">
            <Label className="text-white">
              Region <span className="text-primary">*</span>
            </Label>
            <Controller
              name="administrative_area"
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
            {errors.administrative_area && (
              <p className="text-red-500">
                {errors.administrative_area.message}
              </p>
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
        <Profile url={file?.preview || data?.image?.url} />
        <div>
          <FileUpload
            className="h-20"
            onChange={(e, file) => {
              e.preventDefault();
              setFile(file);
            }}
          >
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
                type="button"
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
          <Controller
            name="bio"
            control={control}
            render={({ field }) => (
              <Textarea
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                className="bg-transparent border-grey-light"
                {...field}
              />
            )}
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
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Textarea
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                className="bg-transparent border-grey-light"
                {...field}
              />
            )}
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
              <Controller
                name="facebookID"
                control={control}
                render={({ field }) => (
                  <Input
                    className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                    placeholder="https://www.sonic.com/home"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-white">
                Instagram ID <span className="text-primary"></span>
              </Label>
              <Controller
                name="instagramID"
                control={control}
                render={({ field }) => (
                  <Input
                    className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                    placeholder="https://www.sonic.com/home"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 ">
            <div className="grid gap-1">
              <Label className="flex justify-between text-white">
                <span>
                  Twitter ID <span className="text-primary">*</span>
                </span>
              </Label>
              <Controller
                name="twitterID"
                control={control}
                render={({ field }) => (
                  <Input
                    className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                    placeholder="https://www.sonic.com/home"
                    {...field}
                  />
                )}
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-white">
                Organization Status <span className="text-primary"></span>
              </Label>
              <Select
                className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
                placeholder="In-active"
                options={statusOptions}
                onChange={setStatus}
                value={status}
              />
            </div>
          </div>
          {/* <div className="flex items-center gap-4 mt-6">
            <Switch id="asdfasf" />
            <div className="grid space-y-1">
              <h3 className="text-sm font-medium text-white ">
                Social media and marketing
              </h3>
              <p className="text-xs text-grey-100">
                Let attendees know how to connect with you
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </form>
  );
};
export default OrganizerAccount;
