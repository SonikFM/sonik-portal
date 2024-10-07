import pinkRoundQuestionMark from "@/assets/images/events/pinkRoundQuestionMark.svg";
import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { ticketPrivacyOptions, ticketTypeOptions } from "../config/options";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import TicketList from "./TicketList";
import {
  useAddTicketTierMutation,
  useUpdateTicketTierMutation,
} from "@/store/event/eventAPI";
import { useDispatch, useSelector } from "react-redux";
import { setEventInfo } from "@/store/event/slice";

const TicketTier = ({ errors, register, setValue, getValues }) => {
  const event = useSelector(state => state.event);
  const dispatch = useDispatch();
  const [activeTicketTier, setActiveTicketTier] = useState("list");
  const [selectedTicket, setSelectedTicket] = useState();

  const deleteTicket = ticket => {
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
    <div className="w-full bg-grey-200  px-4 py-5 shadow-[#0A0D1408] rounded-xl">
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
  const { data: eventData } = useSelector(state => state.event);
  const [addTicketTier] = useAddTicketTierMutation();
  const [updateTicketTier] = useUpdateTicketTierMutation();
  const [ticket, setTicket] = useState({
    name: "",
    description: "",
    total_ticket_quantity: "",
    privacy: "free",
    redemption_code: "",
    pricingType: "free",
    price: "",
    start_availability: "",
    end_availability: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setTicket(selectedTicket);
  }, [selectedTicket]);
  console.log(ticket);
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
    if (response.data.success) {
      if (isUpdate) {
        const index = getValues("_tickettiers").findIndex(
          t => t._id === ticket._id,
        );
        getValues("_tickettiers")[index] = response.data.data;
      } else
        setValue("_tickettiers", [
          ...getValues("_tickettiers"),
          response.data.data._id,
        ]);
      setActiveTicketTier("list");
    }
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

  return (
    <div className="flex flex-col gap-6">
      <TextField
        label="Name"
        className="w-full"
        placeholder="Add name"
        name="name"
        value={ticket.name}
        required={true}
        onChange={changeHandler}
        errorMessage={isSubmitted && !ticket.name && "Name is required"}
      />
      <TextField
        label="Description"
        type="textarea"
        required={true}
        value={ticket.description}
        className="w-full"
        placeholder="Write a description for your Tickets"
        name="description"
        onChange={changeHandler}
        errorMessage={
          isSubmitted && !ticket.description && "Description is required"
        }
      />
      <div className="flex gap-3 w-full">
        <TextField
          label="Quantity"
          type="number"
          min="1"
          required={true}
          value={ticket.total_ticket_quantity}
          className="w-full"
          placeholder="Add quantity"
          name="total_ticket_quantity"
          onChange={changeHandler}
          errorMessage={
            isSubmitted &&
            !ticket.total_ticket_quantity &&
            "Quantity is required"
          }
        />
        <SelectField
          name="privacy"
          label="Privacy"
          value={ticket.privacy}
          options={ticketPrivacyOptions}
          required={true}
          onChange={onSelectPrivacy}
          errorMessage={isSubmitted && !ticket.privacy && "Privacy is required"}
        />
      </div>
      <TextField
        label="Redemption Code"
        required={false}
        className="w-full"
        placeholder="Redemption code"
        name="redemption_code"
        onChange={changeHandler}
      />

      <SelectField
        name="pricingType"
        className="w-full"
        options={ticketTypeOptions}
        label="Pricing Type"
        value={ticket.pricingType}
        required={true}
        onChange={onSelectType}
        errorMessage={
          isSubmitted && !ticket.pricingType && "Privacy is required"
        }
      />

      <TextField
        name="price"
        label="Price"
        type="number"
        value={ticket.price}
        min={1}
        className="w-full"
        required={true}
        placeholder="Add price"
        onChange={changeHandler}
        errorMessage={isSubmitted && !ticket.price && "Price is required"}
      />
      <div className="w-full flex gap-3">
        <TextField
          label="Start Availablity"
          required={true}
          Icon={Calendar}
          value={
            ticket.start_availability
              ? new Date(ticket.start_availability).toISOString().slice(0, 16)
              : ""
          }
          type="datetime-local"
          placeholder="Choose date and time"
          name="start_availability"
          onChange={changeHandler}
          errorMessage={
            isSubmitted &&
            !ticket.start_availability &&
            "Start availability is required"
          }
        />
        <TextField
          label="End Availablity"
          required={true}
          Icon={Calendar}
          type="datetime-local"
          value={
            ticket.end_availability
              ? new Date(ticket.end_availability).toISOString().slice(0, 16)
              : ""
          }
          placeholder="Choose date and time"
          name="end_availability"
          onChange={changeHandler}
          errorMessage={
            isSubmitted &&
            !ticket.end_availability &&
            "End availability is required"
          }
        />
      </div>
      <div className="flex gap-3  items-center w-full mt-6">
        <Button variant="outline" className="w-40 bg-transparent" type="button">
          Cancel
        </Button>
        <Button
          className="w-40 bg-pink text-grey-dark"
          type="button"
          onClick={submitHandler}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default TicketTier;
