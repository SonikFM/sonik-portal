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
    label: "Basics",
    component: <BasicInfo />,
    checked: false,
    validationSchema: basicsSchema,
  },
  {
    id: 2,
    label: "Timeline",
    component: <Timeline />,
    checked: false,
    validationSchema: timelineSchema,
  },
  {
    id: 3,
    label: "Lineup",
    component: <Lineup />,
    checked: false,
    validationSchema: lineupSchema,
  },
  {
    id: 4,
    label: "Image",
    component: <Image />,
    checked: false,
    validationSchema: imageSchema,
  },
  {
    id: 5,
    label: "Tickets",
    component: <Tickets />,
    checked: false,
    validationSchema: ticketsSchema,
  },
  {
    id: 6,
    label: "Settings",
    component: <Settings />,
    checked: false,
    validationSchema: settingsSchema,
  },
];

export const getComponentFilteredSteps = checked =>
  steps.map(step => ({
    id: step.id,
    label: step.label,
    checked: !!checked,
  }));

export default steps;
