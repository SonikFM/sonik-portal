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
          artists,
        };
      case 2:
        return {
          timezone,
          announcement,
          event_start,
          event_end,
        };

      default:
        break;
    }
  };

  const submitEvent = data => {
    data.artists = [];
    if (currentStep === 1) {
      data.artists =
        data.artists?.map(artist => ({
          spotify_id: artist.id,
          name: artist.name,
          photo: artist.images[0]?.url,
          description: artist.genres.join(", "),
          genre: artist.genres,
          spotify_url: artist.external_urls.spotify,
        })) || [];
      createDraftEvent(data);
    } else if (currentStep === 2) {
      updateEvent({ _event: eventData._id, body: data });
    }
  };

  return { getInitialState, submitEvent, isSuccess, isLoading };
};

export default useEventHelper;
