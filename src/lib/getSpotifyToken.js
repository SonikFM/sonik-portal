import axios from "axios";

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_SECRET;
const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

const getSpotifyToken = async () => {
  const response = await axios.post(SPOTIFY_TOKEN_URL, null, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
    },
    params: {
      grant_type: "client_credentials",
    },
  });
  return response.data.access_token;
};

export default getSpotifyToken;
