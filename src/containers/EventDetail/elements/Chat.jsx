import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import userImg from "@/assets/images/events/user-1.png";
import { cn } from "@/lib/utils";

const Chat = ({ className }) => {
  return (
    <div
      className={cn(
        "flex justify-between gap-3 mb-4 border-grey-light pb-3",
        className,
      )}
    >
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src={userImg} />
          <AvatarFallback>User Image</AvatarFallback>
        </Avatar>
        <div>
          <h5 className="mb-1 text-xs text-grey-100">James Brown</h5>
          <p className="text-sm text-white">
            Hey Olivia, I’ve finished with the requirements doc! I made some
            notes in the gdoc as well for Phoenix to look over.
          </p>
        </div>
      </div>
      <p className="text-xs text-grey-100 min-w-fit">Feb 12</p>
    </div>
  );
};

export default Chat;
