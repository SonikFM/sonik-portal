import TextField from "@/components/TextField";
import TicketTierAndArtist from "./TicketTierAndArtist";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Lineup = () => {
  return (
    <div className="space-y-5 w-full">
      <TicketTierAndArtist />
      <TextField
        label="Door Open"
        required={true}
        type="datetime-local"
        placeholder="Choose date and time"
        Icon={Calendar}
      />
      <div className="flex justify-end gap-3 py-8 mb-4 border-t mt-14 border-grey-light">
        <Button variant="outline" className="w-40">
          Cancel
        </Button>
        <Button className="w-40" disabled={true}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Lineup;
