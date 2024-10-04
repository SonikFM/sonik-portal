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
  artists: z.array(z.record(z.any())).nonempty(),
});
