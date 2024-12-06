import pinkRoundQuestionMark from "@/assets/images/events/pinkRoundQuestionMark.svg";
import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { ticketPrivacyOptions, ticketTypeOptions } from "../config/options";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useMemo, useState } from "react";
import TicketList from "./TicketList";
import {
  useAddTicketTierMutation,
  useUpdateTicketTierMutation,
} from "@/store/event/eventAPI";
import { useDispatch, useSelector } from "react-redux";
import { setEventInfo } from "@/store/event/slice";
import { openInputPicker } from "../config/helpers";
import Loading from "@/components/Loading";
import { useTranslation } from "react-i18next";

const TicketTier = ({ errors, register, setValue, getValues }) => {
  const { t } = useTranslation("events");
  const event = useSelector(state => state.event);
  const dispatch = useDispatch();
  const [activeTicketTier, setActiveTicketTier] = useState("list");
  const [selectedTicket, setSelectedTicket] = useState();

  useEffect(() => {
    if (getValues("_tickettiers")?.length < 1) setActiveTicketTier("form");
  }, [getValues("_tickettiers")]);

  const deleteTicket = ticket => {
    const confirm = window.confirm(t("areYouSureToDeleteTicket"));
    if (!confirm) return;
    dispatch(
      setEventInfo({
        ...event,
        data: {
          ...event.data,
          currency: getValues("currency"),
          _tickettiers: event.data._tickettiers.filter(
            t => t._id !== ticket._id,
          ),
        },
      }),
    );
    setValue(
      "_tickettiers",
      getValues("_tickettiers").filter(t => t._id !== ticket._id),
    );
  };
  const editTicket = ticket => {
    setSelectedTicket(ticket);
    setActiveTicketTier("form");
  };

  return (
    <div className="w-full bg-grey-200  px-2 md:px-4 py-5 shadow-[#0A0D1408] rounded-xl">
      {activeTicketTier === "form" ? (
        <TicketTierForm
          selectedTicket={selectedTicket}
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          setActiveTicketTier={setActiveTicketTier}
        />
      ) : activeTicketTier === "list" ? (
        <TicketList
          tickets={getValues("_tickettiers") || []}
          setActiveTicketTier={setActiveTicketTier}
          onDelete={deleteTicket}
          onEdit={editTicket}
        />
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <img
              src={pinkRoundQuestionMark}
              alt=""
              className="w-12 h-12 object-cover"
            />
            <div className="flex flex-col">
              <h6 className="text-base text-white font-medium tracking-tight">
                Ticket Tiers
              </h6>
              <p className="text-grey-100 text-sm">
                Add various ticket levels or categories for the event
              </p>
            </div>
          </div>
          <Button
            className="w-40 bg-pink text-grey-dark"
            onClick={() => setActiveTicketTier("form")}
          >
            Add Ticket
          </Button>
        </div>
      )}
    </div>
  );
};

const TicketTierForm = ({
  selectedTicket,
  setValue,
  getValues,
  setActiveTicketTier,
}) => {
  const { t } = useTranslation("events");
  const { data: eventData } = useSelector(state => state.event);
  const [addTicketTier] = useAddTicketTierMutation();
  const [updateTicketTier] = useUpdateTicketTierMutation();
  const [ticket, setTicket] = useState({
    name: "",
    description: "",
    total_ticket_quantity: "",
    privacy: "public",
    redemption_code: "",
    pricingType: "free",
    price: "",
    start_availability: "",
    end_availability: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTicket(selectedTicket);
  }, [selectedTicket]);

  const changeHandler = e => {
    const { name, value } = e.target;

    setTicket({
      ...ticket,
      [name]: value,
    });
  };

  const validateTicket = () => {
    return (
      ticket.name &&
      ticket.description &&
      ticket.total_ticket_quantity &&
      ticket.privacy &&
      ticket.pricingType &&
      ticket.price &&
      ticket.start_availability &&
      ticket.end_availability
    );
  };

  const submitHandler = async () => {
    setIsSubmitted(true);

    if (!validateTicket()) return;
    setIsLoading(true);
    const isUpdate = !!selectedTicket;

    const response = await (isUpdate
      ? updateTicketTier({
          _tickettier: ticket._id,
          body: { currency: getValues("currency"), ...ticket },
        })
      : addTicketTier({
          _event: eventData._id,
          currency: getValues("currency"),
          ...ticket,
        }));
    if (response.data?.success) {
      if (isUpdate) {
        const index = getValues("_tickettiers").findIndex(
          t => t._id === ticket._id,
        );

        getValues("_tickettiers")[index] = response.data.data;
        setValue("_tickettiers", getValues("_tickettiers"));
      } else
        setValue("_tickettiers", [
          ...getValues("_tickettiers"),
          response.data.data,
        ]);
      setActiveTicketTier("list");
    }
    setIsLoading(false);
  };

  const onSelectPrivacy = privacy => {
    setTicket({
      ...ticket,
      privacy: privacy.value,
    });
  };

  const onSelectType = type => {
    setTicket({
      ...ticket,
      pricingType: type.value,
    });
  };

  const privacyOptions = useMemo(() => {
    return ticketPrivacyOptions.map(option => ({
      ...option,
      label: t(option.value),
    }));
  }, [ticketPrivacyOptions, t]);

  const ticketTypes = useMemo(() => {
    return ticketTypeOptions.map(option => ({
      ...option,
      label: t(option.value),
    }));
  }, [ticketTypeOptions, t]);

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col gap-6">
      <TextField
        label={t("name")}
        className="w-full"
        placeholder={t("addName")}
        name="name"
        value={ticket?.name}
        required={true}
        onChange={changeHandler}
        errorMessage={
          isSubmitted && !ticket?.name && `${t("name")} ${t("isRequired")}`
        }
      />
      <TextField
        label={t("description")}
        type="textarea"
        required={true}
        value={ticket?.description}
        className="w-full"
        placeholder={t("writeADescriptionForYourTickets")}
        name="description"
        onChange={changeHandler}
        errorMessage={
          isSubmitted &&
          !ticket?.description &&
          `${t("description")} ${t("isRequired")}`
        }
      />
      <div className="flex flex-col md:flex-row gap-3 w-full">
        <TextField
          label={t("quantity")}
          type="number"
          min="1"
          required={true}
          value={ticket?.total_ticket_quantity}
          className="w-full"
          placeholder={t("addQuantity")}
          name="total_ticket_quantity"
          onChange={changeHandler}
          errorMessage={
            isSubmitted &&
            !ticket?.total_ticket_quantity &&
            `${t("quantity")} ${t("isRequired")}`
          }
        />
        <SelectField
          name="privacy"
          label={t("privacy")}
          value={ticket?.privacy}
          options={privacyOptions}
          required={true}
          onChange={onSelectPrivacy}
          errorMessage={
            isSubmitted &&
            !ticket?.privacy &&
            `${t("privacy")} ${t("isRequired")}`
          }
        />
      </div>
      <TextField
        label={t("redemptionCode")}
        required={false}
        className="w-full"
        placeholder={t("addRedemptionCode")}
        name="redemption_code"
        onChange={changeHandler}
      />

      <SelectField
        name="pricingType"
        className="w-full"
        options={ticketTypes}
        label={t("pricingType")}
        value={ticket?.pricingType}
        required={true}
        onChange={onSelectType}
        errorMessage={
          isSubmitted &&
          !ticket?.pricingType &&
          `${t("pricingType")} ${t("isRequired")}`
        }
      />

      <TextField
        name="price"
        label={t("price")}
        type="number"
        value={ticket?.price}
        min={1}
        className="w-full"
        required={true}
        placeholder={t("addPrice")}
        onChange={changeHandler}
        errorMessage={
          isSubmitted && !ticket?.price && `${t("price")} ${t("isRequired")}`
        }
      />
      <div className="w-full flex flex-col md:flex-row gap-3">
        <TextField
          label={t("startAvailability")}
          required={true}
          Icon={Calendar}
          value={
            ticket?.start_availability
              ? new Date(ticket.start_availability).toISOString().slice(0, 16)
              : ""
          }
          type="datetime-local"
          placeholder={t("chooseDateAndTime")}
          name="start_availability"
          onChange={changeHandler}
          id="start_availability"
          onIconClick={() => openInputPicker("start_availability")}
          errorMessage={
            isSubmitted &&
            !ticket?.start_availability &&
            `${t("startAvailability")} ${t("isRequired")}`
          }
        />
        <TextField
          label={t("endAvailability")}
          required={true}
          Icon={Calendar}
          type="datetime-local"
          id="end_availability"
          onIconClick={() => openInputPicker("end_availability")}
          value={
            ticket?.end_availability
              ? new Date(ticket?.end_availability).toISOString().slice(0, 16)
              : ""
          }
          placeholder={t("chooseDateAndTime")}
          name="end_availability"
          onChange={changeHandler}
          errorMessage={
            isSubmitted &&
            !ticket?.end_availability &&
            `${t("endAvailability")} ${t("isRequired")}`
          }
        />
      </div>
      <div className="flex gap-3  items-center w-full mt-6">
        <Button variant="outline" className="w-40 bg-transparent" type="button">
          {t("cancel")}
        </Button>
        <Button
          className="w-40 bg-pink text-grey-dark"
          type="button"
          onClick={submitHandler}
        >
          {t("save")}
        </Button>
      </div>
    </div>
  );
};

export default TicketTier;