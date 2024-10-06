import pinkRoundQuestionMark from "@/assets/images/events/pinkRoundQuestionMark.svg";
import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { ticketPrivacyOptions } from "../config/options";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import TicketList from "./TicketList";

const TicketTier = ({ errors, register, setValue, getValues }) => {
  const [activeTicketTier, setActiveTicketTier] = useState("list");
  return (
    <div className="w-full bg-grey-200  px-4 py-5 shadow-[#0A0D1408] rounded-xl">
      {activeTicketTier === "form" ? (
        <TicketTierForm
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          setActiveTicketTier={setActiveTicketTier}
        />
      ) : activeTicketTier === "list" ? (
        <TicketList
          tickets={getValues("tickets") || [{}, {}]}
          setActiveTicketTier={setActiveTicketTier}
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
  register,
  errors,
  setValue,
  getValues,
  setActiveTicketTier,
}) => {
  const [ticket, setTicket] = useState({
    name: "",
    description: "",
    quantity: "",
    privacy: "",
    redemption_code: "",
    pricingType: "",
    price: "",
    start_availability: "",
    end_availability: "",
  });

  const changeHandler = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setTicket({
      ...ticket,
      [name]: value,
    });
  };

  const onSelectPrivacy = privacy => {
    setTicket({
      ...ticket,
      privacy: privacy.value,
    });
  };

  const createTicket = async () => {
    // createTicket("list");
  };

  return (
    <div className="flex flex-col gap-6">
      <TextField
        label="Name"
        className="w-full"
        placeholder="Add name"
        name="name"
        required={true}
        onChange={changeHandler}
      />
      <TextField
        label="Description"
        type="textarea"
        required={true}
        className="w-full"
        placeholder="Write a description for your Tickets"
        name="description"
        onChange={changeHandler}
      />
      <div className="flex gap-3 w-full">
        <TextField
          label="Quantity"
          required={true}
          className="w-full"
          placeholder="Add quantity"
          name="quantity"
          onChange={changeHandler}
        />
        <SelectField
          name="privacy"
          label="Privacy"
          value={ticket.privacy}
          options={ticketPrivacyOptions}
          required={true}
          onChange={onSelectPrivacy}
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
      <TextField
        label="Pricing Type"
        required={true}
        className="w-full"
        placeholder="Add price"
        name="pricingType"
        onChange={changeHandler}
      />
      <TextField
        name="price"
        label="price"
        className="w-full"
        required={true}
        placeholder="Add price"
        onChange={changeHandler}
      />
      <div className="w-full flex gap-3">
        <TextField
          label="Start Availablity"
          required={true}
          Icon={Calendar}
          type="datetime-local"
          placeholder="Choose date and time"
          name="start_availability"
          onChange={changeHandler}
        />
        <TextField
          label="End Availablity"
          required={true}
          Icon={Calendar}
          type="datetime-local"
          placeholder="Choose date and time"
          name="end_availability"
          onChange={changeHandler}
        />
      </div>
      <div className="flex gap-3  items-center w-full mt-6">
        <Button variant="outline" className="w-40 bg-transparent">
          Cancel
        </Button>
        <Button className="w-40 bg-pink text-grey-dark" type={createTicket}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default TicketTier;
