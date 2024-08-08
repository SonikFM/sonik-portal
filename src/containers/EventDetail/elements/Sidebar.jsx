import { Button } from "@/components/ui/button";
import MessagesIcon from "@/svgs/MessagesIcon";
import PhoneIcon from "@/svgs/PhoneIcon";
import ChatBoard from "./ChatBoard";
import { useRef, useState } from "react";
import { PaperclipIcon, SendHorizonalIcon, XIcon } from "lucide-react";
import { formatFileSize } from "@/lib/utils";
import Emojies from "./Emojies";
import { Textarea } from "@/components/ui/textarea";

const Sidebar = () => {
  const attachmentRef = useRef(null);
  const [attachments, setAttachments] = useState([]);
  const [value, setValue] = useState("");

  const removeFileHandler = index => {
    setAttachments(prevAttachments =>
      prevAttachments.filter((_, i) => i !== index),
    );
  };

  const handleAttachmentChange = event => {
    const files = Array.from(event.target.files);
    setAttachments([...attachments, ...files]);
  };

  const handleClikAttachment = () => {
    if (attachmentRef?.current) {
      attachmentRef.current.click();
    }
  };

  const handleSend = () => {
    setValue("");
    setAttachments([]);
  };

  return (
    <form
      className="w-full p-4 border xl:w-4/12 border-grey-light rounded-2xl"
      onSubmit={handleSend}
    >
      <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-grey-light">
        <div className="flex items-center gap-1 ">
          <MessagesIcon className="text-grey-100" />
          <p className="text-base font-medium text-white">Message Board</p>
        </div>
        <Button variant="outline" className="gap-2 px-2.5">
          <PhoneIcon className="w-5 h-5 " />
          <span>Call</span>
        </Button>
      </div>
      <ChatBoard />
      <Textarea value={value} onChange={e => setValue(e.target.value)} />
      {attachments?.length ? (
        <div className="flex flex-wrap mt-4 gap-x-4 gap-y-2">
          {attachments.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-3 py-1 pl-3 pr-2 mb-1 text-white border rounded rounded-lg bg-primary/10 border-grey-light"
            >
              {file.name} {formatFileSize(file.size)}
              <div className="text-grey-100 hover:text-white">
                <XIcon
                  className="w-4 h-4 cursor-pointer "
                  onClick={() => removeFileHandler(index)}
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}
      <div className="flex items-center justify-end gap-4 mt-4">
        <Emojies onChange={e => setValue(prev => prev + e.emoji)} />
        <input
          ref={attachmentRef}
          type="file"
          className="hidden"
          id="file-input"
          multiple
          onChange={handleAttachmentChange}
        />
        <PaperclipIcon
          className="w-5 h-5 cursor-pointer text-grey-100 hover:text-white"
          onClick={handleClikAttachment}
        />
        <Button className="gap-2" type="submit">
          <SendHorizonalIcon className="w-4 h-4" /> Send
        </Button>
      </div>
    </form>
  );
};

export default Sidebar;
