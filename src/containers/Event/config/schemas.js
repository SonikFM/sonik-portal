import { z } from "zod";

// Define schema with zod
export const basicsSchema = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  type: z.string().nonempty({ message: "Type is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  privacy: z.string().nonempty({ message: "Privacy is required" }),
  venue: z.object({
    _venue: z.string().nullable(),
    google_place_id: z.string().nonempty(),
    formatted_address: z.string().nonempty({ message: "Venue is required" }),
    location: z.object({
      type: z.string().nonempty(),
      coordinates: z.array(z.number()).nonempty(),
    }),
    city: z.string().nullable(),
    region: z.string().nullable(),
    country: z.string().nullable(),
  }),
  presented_by: z.string().nonempty({ message: "Presenter is required" }),
  _artists: z.array(z.string()).nonempty(),
});
