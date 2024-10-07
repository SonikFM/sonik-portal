import { getPresignedUrl, uploadFile } from "@/helper/uploads";
import {
  useCreateDraftEventMutation,
  useFinalizeEventMutation,
  useUpdateEventMutation,
} from "@/store/event/eventAPI";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useEventHelper = ({ activeStep }) => {
  const { data: eventData } = useSelector(state => state.event);
  const [createDraftEvent, { isSuccess, isLoading }] =
    useCreateDraftEventMutation();
  const [updateEvent] = useUpdateEventMutation();
  const [finalizeEvent] = useFinalizeEventMutation();
  const navigate = useNavigate();

  const {
    _id,
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
    _tickettiers,
    internal_notes,
  } = eventData;

  const getInitialState = () => {
    switch (activeStep) {
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
          _tickettiers,
        };
      case 6:
        return {
          internal_notes,
        };

      default:
        break;
    }
  };

  const submitEvent = async data => {
    data.artists = [];
    if (activeStep === 1) {
      // Create or Update Event
      // If _id is present, then it is an update event => Basic information is saved in redux on successful draft creation
      _id
        ? updateEvent({ _event: eventData._id, body: data, activeStep })
        : createDraftEvent(data);
    } else if (activeStep === 2) {
      updateEvent({ _event: eventData._id, body: data, activeStep });
    } else if (activeStep === 3) {
      updateEvent({ _event: eventData._id, body: data, activeStep });
    } else if (activeStep === 4) {
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
          activeStep,
        });
      }
    } else if (activeStep === 5) {
      const payload = {
        ...data,
        _tickettiers: _tickettiers.map(t => t._id),
      };
      updateEvent({ _event: eventData._id, body: payload, activeStep });
    } else {
      await finalizeEvent({ _event: eventData._id, body: data });
      navigate("/");
    }
  };

  return { getInitialState, submitEvent, isSuccess, isLoading };
};

export default useEventHelper;
