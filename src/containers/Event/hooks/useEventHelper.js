import {
  useCreateDraftEventMutation,
  useUpdateEventMutation,
} from "@/store/event/eventAPI";
import { useSelector } from "react-redux";

const useEventHelper = () => {
  const { data: eventData, currentStep } = useSelector(state => state.event);
  const [createDraftEvent, { isSuccess, isLoading }] =
    useCreateDraftEventMutation();
  const [updateEvent] = useUpdateEventMutation();

  const {
    title,
    privacy,
    type,
    description,
    venue,
    presented_by,
    artists,
    timezone,
    announcement,
    event_start,
    event_end,
    door_open,
    images,
  } = eventData;

  const getInitialState = () => {
    switch (currentStep) {
      case 1:
        return {
          title,
          privacy,
          type,
          description,
          venue,
          presented_by,
        };
      case 2:
        return {
          timezone,
          announcement,
          event_start,
          event_end,
        };

      case 3:
        return {
          door_open,
          artists:
            artists.length < 1
              ? [{ spotify_id: "", start_time: "00:00" }]
              : artists,
        };

      case 4:
        return {
          images: {
            primaryImage: images.primaryImage,
          },
        };

      default:
        break;
    }
  };

  const submitEvent = data => {
    data.artists = [];
    if (currentStep === 1) {
      //   data.artists =
      //     data.artists?.map(artist => ({
      //       spotify_id: artist.id,
      //       name: artist.name,
      //       photo: artist.images[0]?.url,
      //       description: artist.genres.join(", "),
      //       genre: artist.genres,
      //       spotify_url: artist.external_urls.spotify,
      //     })) || [];

      createDraftEvent(data);
    } else if (currentStep === 2) {
      updateEvent({ _event: eventData._id, body: data });
    } else if (currentStep === 3) {
      updateEvent({ _event: eventData._id, body: data });
    } else if (currentStep === 4) {
      // Upload Image
      console.log(data);
    }
  };

  return { getInitialState, submitEvent, isSuccess, isLoading };
};

export default useEventHelper;
