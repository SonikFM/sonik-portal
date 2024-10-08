import { uploadFile } from "@/helper/uploads";
import {
  useCreateDraftEventMutation,
  useFinalizeEventMutation,
  useUpdateEventMutation,
} from "@/store/event/eventAPI";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useEventHelper = ({ activeStep }) => {
  const { data: eventData } = useSelector(state => state.event);
  const [createDraftEvent] = useCreateDraftEventMutation();
  const [updateEvent] = useUpdateEventMutation();
  const [finalizeEvent] = useFinalizeEventMutation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
          artists: artists.length < 1 ? [] : artists,
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
    const eventId = eventData._id;
    if (isLoading) return;
    setIsLoading(true);
    try {
      const handleUpdateEvent = async body => {
        await updateEvent({ _event: eventId, body, activeStep });
      };

      if (activeStep === 1) {
        if (eventId) {
          await handleUpdateEvent(data);
        } else {
          await createDraftEvent({ body: data, activeStep });
        }
      } else if (activeStep === 2 || activeStep === 3) {
        await handleUpdateEvent(data);
      } else if (activeStep === 4) {
        const { response, key } = await uploadFile(
          data.images.primaryImage,
          "events",
        );
        if (response.status === 200) {
          await handleUpdateEvent({ images: { primaryImage: key } });
        }
      } else if (activeStep === 5) {
        const payload = {
          ...data,
          _tickettiers: _tickettiers.map(t => t._id),
        };
        await handleUpdateEvent(payload);
      } else {
        await finalizeEvent({ _event: eventId, body: data });
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return { getInitialState, submitEvent, isLoading, setIsLoading };
};

export default useEventHelper;
