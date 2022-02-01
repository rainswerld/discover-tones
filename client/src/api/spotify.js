import axios from 'axios';

let authToken = ''

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
  authToken = token.data.access_token
  return axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token.data.access_token,
    },
  });
};

export const artistSearch = (query) => {
  return axios({
    url: `https://api.spotify.com/v1/search?q=${query}&type=artist`,
    method: 'GET',
    data: {
      q: query,
      type: 'artst'
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + authToken
    }
  })
}
