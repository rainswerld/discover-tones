import React, { useState, useEffect } from 'react';
import { Credentials } from './spotify/creds.js';
import axios from 'axios';
import Dropdown from './Components/Dropdown.js';

const App = () => {
  const spotify = Credentials();
  const [token, setToken] = useState('');
  const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: [] });

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret),
      },
      data: 'grant_type=client_credentials',
      method: 'POST',
    }).then(tokenResponse => {
      setToken(tokenResponse.data.access_token);

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + tokenResponse.data.access_token,
        },
      }).then(genreResponse => {
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items,
        });
      });
    });
  }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

  return (
    <div>
      <form>
        <Dropdown label="Genre: " options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} />
      </form>
    </div>
  );
};

export default App;
