import axios from 'axios';

export const spotifyConnect = (spotifyId, spotifySecret) => {
  return axios({
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(spotifyId + ':' + spotifySecret),
    },
    data: 'grant_type=client_credentials',
    method: 'POST',
  });
};

export const spotifyPlaylists = token => {
  return axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token.data.access_token,
    },
  });
};
