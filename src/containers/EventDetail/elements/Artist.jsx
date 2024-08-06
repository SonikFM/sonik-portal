import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import artistImg from "@/assets/images/events/artist-1.png";
import ClockIcon from "@/svgs/ClockIcon";

const Artist = () => {
  return (
    <div className="p-2 pt-4 border rounded-lg border-grey-light">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className="text-sm text-white">Emma Wright</h4>
          <p className="text-xs text-grey-100">Musician</p>
        </div>
        <Avatar className="w-8 h-8">
          <AvatarImage src={artistImg} />
          <AvatarFallback>Emma Profile</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex justify-between gap-2 p-2 rounded-md bg-success-light/10">
        <div className="flex items-center gap-1 5">
          <ClockIcon className="text-success" />
          <p className="text-xs font-medium text-white">Timing</p>
        </div>
        <p className="text-xs font-medium text-white">12:00 PM - 01:00PM</p>
      </div>
    </div>
  );
};

export default Artist;
