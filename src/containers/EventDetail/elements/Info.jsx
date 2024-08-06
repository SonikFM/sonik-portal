import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import FileListIcon from "@/svgs/FileListIcon";
import TicketIcon from "@/svgs/TicketIcon";
import UsersIcon from "@/svgs/UsersIcon";
import { useState } from "react";
import Description from "./Description";
import Artists from "./Artists";
import Tickets from "./Tickets";

const Info = () => {
  const [active, setActive] = useState("description");
  return (
    <div>
      <Tabs defaultValue={active} className="w-full" onValueChange={setActive}>
        <TabsList className="flex justify-start w-full h-auto gap-6 p-0 bg-transparent border-b rounded-none border-grey-light">
          <TabsTrigger
            className="  gap-1.5 h border-b-2 rounded-none data-[state=active]:border-b-primary data-[state=active] border-b-transparent -mb-[1px] px-0 py-3.5 "
            value="description"
          >
            <FileListIcon
              className={cn(
                active === "description" ? "text-primary" : "text-grey-100",
              )}
            />
            Description
          </TabsTrigger>
          <TabsTrigger
            className=" gap-1.5 h border-b-2 rounded-none data-[state=active]:border-b-primary data-[state=active] border-b-transparent -mb-[1px] px-0 py-3.5 "
            value="artists"
          >
            <UsersIcon
              className={cn(
                active === "artists" ? "text-primary" : "text-grey-100",
              )}
            />
            Artist List
          </TabsTrigger>
          <TabsTrigger
            className=" gap-1.5 h border-b-2 rounded-none data-[state=active]:border-b-primary data-[state=active] border-b-transparent -mb-[1px] px-0 py-3.5 "
            value="tickets"
          >
            <TicketIcon
              className={cn(
                active === "tickets" ? "text-primary" : "text-grey-100",
              )}
            />
            Tickets
          </TabsTrigger>
        </TabsList>
        <TabsContent className="mt-4" value="description">
          <Description />
        </TabsContent>
        <TabsContent className="mt-4" value="artists">
          <Artists />
        </TabsContent>
        <TabsContent className="mt-4" value="tickets">
          <Tickets />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Info;
