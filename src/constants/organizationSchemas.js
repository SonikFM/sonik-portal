import { object, string } from "yup";

export const createOrg = object()
  .shape({
    _created_by: string().optional(),
    creator_description: string().optional(),
    name: string().optional(),
    description: string().optional(),
    website: string().optional(),
    facebookID: string().optional(),
    instagramID: string().optional(),
    twitterID: string().optional(),
    status: string().optional().oneOf(["true", "false"], "Invalid Status!"),
    query: string().optional(),
    address_line_one: string().optional(),
    address_line_two: string().optional(),
    locality: string().optional(),
    administrative_area: string().optional(),
    postal_code: string().optional(),
    country: string().optional(),
    caption: string().optional(),
    geocode: object().shape({
      latitude: string().optional(),
      longitude: string().optional(),
    }),
  })
  .strict()
  .noUnknown();

export const createOrgInit = {
  name: "",
  website: "",
  _created_by: "",
  address_line_one: "",
  address_line_two: "",
  postal_code: "",
  administrative_area: "",
  country: "",
  locality: "",
  description: "",
  bio: "",
  geocode: null,
};

export const updateOrg = object()
  .shape({
    _created_by: string().optional(),
    creator_description: string().optional(),
    name: string().optional(),
    description: string().optional(),
    website: string().optional(),
    facebookID: string().optional(),
    instagramID: string().optional(),
    twitterID: string().optional(),
    status: string().optional().oneOf(["true", "false"], "Invalid Status!"),
    query: string().optional(),
    address_line_one: string().optional(),
    address_line_two: string().optional(),
    locality: string().optional(),
    administrative_area: string().optional(),
    postal_code: string().optional(),
    country: string().optional(),
    caption: string().optional(),
  })
  .strict()
  .noUnknown();
