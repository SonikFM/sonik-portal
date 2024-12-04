import BasicInfo from "./BasicInfo";
import Timeline from "./Timeline";
import Lineup from "./Lineup";
import Image from "./Image";
import Tickets from "./Tickets";
import Settings from "./Settings";
import {
  basicsSchema,
  imageSchema,
  lineupSchema,
  settingsSchema,
  ticketsSchema,
  timelineSchema,
} from "../config/schemas";

const steps = [
  {
    id: 1,
    label: "basics",
    component: <BasicInfo />,
    checked: false,
    validationSchema: basicsSchema,
  },
  {
    id: 2,
    label: "timeline",
    component: <Timeline />,
    checked: false,
    validationSchema: timelineSchema,
  },
  {
    id: 3,
    label: "lineup",
    component: <Lineup />,
    checked: false,
    validationSchema: lineupSchema,
  },
  {
    id: 4,
    label: "image",
    component: <Image />,
    checked: false,
    validationSchema: imageSchema,
  },
  {
    id: 5,
    label: "tickets",
    component: <Tickets />,
    checked: false,
    validationSchema: ticketsSchema,
  },
  {
    id: 6,
    label: "settings",
    component: <Settings />,
    checked: false,
    validationSchema: settingsSchema,
  },
];
export const componentFilteredSteps = steps.map(step => ({
  id: step.id,
  label: step.label,
  checked: false,
}));

export default steps;
