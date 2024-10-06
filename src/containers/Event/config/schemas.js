import { z } from "zod";

// Define schema with zod
export const basicsSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  type: z.string().min(1, { message: "Type is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  privacy: z.string().min(1, { message: "Privacy is required" }),
  venue: z.object({
    google_place_id: z.string().min(1),
    formatted_address: z.string().min(1, { message: "Venue is required" }),
    location: z.object({
      type: z.string().min(1),
      coordinates: z.array(z.number()),
    }),
    city: z.string().nullable(),
    region: z.string().nullable(),
    country: z.string().nullable(),
  }),
  presented_by: z.string().min(1, { message: "Presenter is required" }),
  artists: z.array(z.record(z.any())),
});

export const timelineSchema = z.object({
  timezone: z.string().min(1, { message: "Timezone is required" }),
  announcement: z.string().min(1, { message: "Announcement is required" }),
  event_start: z.string().min(1, { message: "Event start is required" }),
  event_end: z.string().min(1, { message: "Event end is required" }),
});

export const lineupSchema = z.object({
  _artists: z.array(z.record(z.any())),
  door_open: z.string().min(1, { message: "Door open is required" }),
});
