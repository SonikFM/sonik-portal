import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import EmojiPicker from "emoji-picker-react";
import { SmileIcon } from "lucide-react";

const Emojies = ({ onChange }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="w-5 h-5 p-0 bg-transparent cursor-pointer text-grey-100 hover:text-white hover:bg-transparent"
        >
          <SmileIcon className="" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-80">
        <EmojiPicker
          className="!w-auto !border-0"
          onEmojiClick={onChange}
          disableAutoFocus={true}
          native
        />
      </PopoverContent>
    </Popover>
  );
};
export default Emojies;
