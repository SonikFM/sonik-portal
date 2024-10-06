import { getPresignedUrl, uploadFile } from "@/helper/uploads";
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
    ticket_tiers,
    currency,
    age_limit,
    re_entry_allowed,
    ticket_limit_per_user,
    tickets,
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
      case 5:
        return {
          ticket_tiers: ticket_tiers,
          currency,
          age_limit,
          re_entry_allowed,
          ticket_limit_per_user,
          tickets,
        };

      default:
        break;
    }
  };

  const submitEvent = async data => {
    data.artists = [];
    if (currentStep === 1) {
      createDraftEvent(data);
    } else if (currentStep === 2) {
      updateEvent({ _event: eventData._id, body: data });
    } else if (currentStep === 3) {
      updateEvent({ _event: eventData._id, body: data });
    } else if (currentStep === 4) {
      // Upload Image
      const { url, key } = await getPresignedUrl(
        data.images.primaryImage,
        "events",
      );

      const response = await uploadFile(data.images.primaryImage, url);
      if (response.status === 200) {
        updateEvent({
          _event: eventData._id,
          body: { images: { primaryImage: key } },
        });
      }
    }
  };

  return { getInitialState, submitEvent, isSuccess, isLoading };
};

export default useEventHelper;
