import { Button } from "@/components/ui/button";
import Ticket from "./Ticket";

const Tickets = () => {
  return (
    <div className="flex flex-col gap-2 px-6 py-4 bg-grey-200 rounded-2xl">
      <div className="mb-4">
        {[1, 2, 3].map(i => {
          return (
            <Ticket key={i} className={i === 3 ? "border-b" : "border-b"} />
          );
        })}
      </div>
      <div className="flex items-center justify-end gap-3">
        <Button variant="outline" className="bg-transparent">
          Total Payable Amount - $0
        </Button>
        <Button>Make Payment</Button>
      </div>
    </div>
  );
};

export default Tickets;
