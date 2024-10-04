const defaultFormValues = {
  title: "", // Event title
  type: "concert", // Default to 'concert'
  description: "", // Event description (optional)
  privacy: "public", // Default to 'public'
  venue: {
    _venue: null, // Venue ObjectId reference (will be selected by the user)
    google_place_id: "", // Google Place ID (optional)
    formatted_address: "", // Address string (optional)
    location: {
      type: "Point",
      coordinates: [0, 0], // Default coordinates (will be updated based on the selected venue)
    },
    city: "", // City name
    region: "", // Region name
    country: "", // Country name
  },
  artists: [], // Empty array to start
  presented_by: "", // Presenter of the event (optional)
  // Timeline
  timezone: "COT", // Default to 'COT'
  announcement: null, // Date when the event will be announced (optional)
  event_start: "", // Event start date/time (required)
  event_end: "", // Event end date/time (required)
  door_open: "", // Door open date/time (optional)
  lineup: [], // Empty array to start
  // Image
  images: {
    primaryImage: "", // Primary image URL (optional)
    additionalImages: [], // Additional images (optional)
  },
  // Tickets
  age_limit: 18, // Default age limit
  re_entry_allowed: false, // Re-entry allowed flag (default to false)
  currency: "COL", // Default currency (COL)
  ticket_limit_per_user: 0, // No ticket limit by default
  // Settings
  internal_notes: "", // Internal notes (optional)
};

export default defaultFormValues;
