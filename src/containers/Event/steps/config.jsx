import BasicInfo from "./BasicInfo";
import Timeline from "./Timeline";
import Lineup from "./Lineup";
import Image from "./Image";
import Tickets from "./Tickets";
import Settings from "./Settings";
import { basicsSchema, lineupSchema, timelineSchema } from "../config/schemas";

const steps = [
  {
    id: 1,
    label: "Basics",
    desc: "Start by entering the basic details of your event",
    component: <BasicInfo />,
    checked: false,
    validationSchema: basicsSchema,
  },
  {
    id: 2,
    label: "Timeline",
    desc: "Set the event schedule, sales start time, and performance order.",
    component: <Timeline />,
    checked: false,
    validationSchema: timelineSchema,
  },
  {
    id: 3,
    label: "Lineup",
    desc: "Set the schedule and performance order for your event, from start to finish",
    component: <Lineup />,
    checked: false,
    validationSchema: lineupSchema,
  },
  {
    id: 4,
    label: "Image",
    desc: "Upload an image for your event.",
    component: <Image />,
    checked: false,
  },
  {
    id: 5,
    label: "Tickets",
    desc: "Create ticket types, set prices, and limit the number of tickets each person can purchase.",
    component: <Tickets />,
    checked: false,
  },
  {
    id: 6,
    label: "Settings",
    desc: "Assign contact details and grant reporting access",
    component: <Settings />,
    checked: false,
  },
];

export const componentFilteredSteps = steps.map(step => ({
  id: step.id,
  label: step.label,
  checked: false,
}));

export default steps;
