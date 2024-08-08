import DashboardHeader from "@/layout/DashboardHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChevronLefttIcon from "@/svgs/ChevronLefttIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import eventImg from "@/assets/images/events/event-1.png";
import eventOrganizer from "@/assets/images/events/organizer-1.png";
import eventBanner from "@/assets/images/events/event-banner.png";
import { Button } from "@/components/ui/button";
import DeleteIcon from "@/svgs/DeleteIcon";
import EditLineIcon from "@/svgs/EditLineIcon";
import FoldersIcon from "@/svgs/FoldersIcon";
import ComputerIcon from "@/svgs/ComputerIcon";
import FlashLightIcon from "@/svgs/FlashLightIcon";
import MapPinIcon from "@/svgs/MapPinIcon";
import DoorIcon from "@/svgs/DoorIcon";
import Info from "./elements/Info";
import Sidebar from "./elements/Sidebar";

const EventDetail = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const navigate = useNavigate();
  const onIconClick = () => {
    navigate(-1);
  };

  return (
    <>
      <DashboardHeader
        title="Event Details"
        description="Check your event details below"
        icon={<ChevronLefttIcon className="w-5 h-5 text-grey-100" />}
        onIconClick={onIconClick}
        toggleDrawer={toggleDrawer}
      ></DashboardHeader>
      <div className="px-4 md:px-8">
        <div className="flex items-center justify-between gap-3 py-4 mb-5 border-b border-grey-light">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border border-grey-light ">
              <AvatarImage src={eventImg} />
              <AvatarFallback>Event Profile</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-medium text-white ">
                Concert For Charity Goodlayers.com
              </h3>
              <p className="text-sm text-grey-100">
                Fri, May 16 2024, 12:00 PM{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2 p-2.5">
              <EditLineIcon /> Edit
            </Button>
            <Button variant="destructive" className="gap-2 p-2.5">
              <DeleteIcon /> Delete
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-0 mb-5 gap-y-6 md:gap-6 xl:flex-nowrap">
          <div className="w-full px-4 py-5 border xl:w-4/6 border-grey-light rounded-2xl">
            <div className="flex items-center gap-3 pb-5 mb-4 border-b border-grey-light">
              <div className="w-6 h-6">
                <FoldersIcon className="text-grey-100" />
              </div>
              <h3 className="text-base font-medium text-white ">
                Concert For Charity
              </h3>
            </div>
            <Avatar className="w-full h-40 mb-4 rounded-lg">
              <AvatarImage src={eventBanner} />
              <AvatarFallback>Event banner</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-52 min-w-max">
                <p className="text-xs text-grey-100 mb-1.5">Event ID</p>
                <div className="flex items-center gap-2">
                  <ComputerIcon className="text-grey-100" />
                  <p className="text-sm text-white">E-32348</p>
                </div>
              </div>
              <div className="w-52 min-w-max">
                <p className="text-xs text-grey-100 mb-1.5">Event Type</p>
                <div className="flex items-center gap-2">
                  <FlashLightIcon className="text-grey-100" />
                  <p className="text-sm text-white">Concert</p>
                </div>
              </div>
              <div className="">
                <p className="text-xs text-grey-100 mb-1.5">Event Venue</p>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="text-grey-100" />
                  <p className="text-sm text-white">
                    The Great Hall, Avant Gardner
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-52 min-w-max">
                <p className="text-xs text-grey-100 mb-1.5">Organizer</p>
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6 border border-grey-light">
                    <AvatarImage src={eventOrganizer} />
                    <AvatarFallback>Event organizer</AvatarFallback>
                  </Avatar>
                  <p className="text-sm text-white">Goodlayers.com</p>
                </div>
              </div>
              <div className="w-52 min-w-max">
                <p className="text-xs text-grey-100 mb-1.5">Doors Open</p>
                <div className="flex items-center gap-2">
                  <DoorIcon className="text-grey-100" />
                  <p className="text-sm text-white">Concert</p>
                </div>
              </div>
              <div className="">
                <p className="text-xs text-grey-100 mb-1.5">Genre</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-white">
                    Electronic / Rock / Hiphop / Punk
                  </p>
                </div>
              </div>
            </div>
            <Info />
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};
export default EventDetail;
