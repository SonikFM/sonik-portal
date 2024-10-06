import { useCreateDraftEventMutation } from "@/store/event/eventAPI";
import { useSelector } from "react-redux";

const useEventHelper = () => {
  const { data: eventData } = useSelector(state => state.event);
  const [createDraftEvent, { isSuccess, isLoading }] =
    useCreateDraftEventMutation();

  const getInitialState = currentStep => {
    const { title, privacy, type, description, venue, presented_by, artists } =
      eventData;

    if (currentStep.id === 1) {
      return {
        title,
        privacy,
        type,
        description,
        venue,
        presented_by,
        artists,
      };
    }
  };

  const submitEvent = data => {
    data.artists = [];
    // data.artists = data.artists?.map(artist => ({
    //   spotify_id: artist.id,
    //   name: artist.name,
    //   photo: artist.images[0]?.url,
    //   description: artist.genres.join(", "),
    //   genre: artist.genres,
    //   spotify_url: artist.external_urls.spotify,
    // }));
    createDraftEvent(data);
  };

  return { getInitialState, submitEvent, isSuccess, isLoading };
};

export default useEventHelper;
