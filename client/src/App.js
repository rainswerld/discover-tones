import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { spotifyConnect, spotifyPlaylists } from './api/spotify.js';
import Dropdown from './Components/Dropdown.js';
import SearchBar from './Components/SearchBar.js'

const App = () => {
  const [token, setToken] = useState('');
  const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: [] });
  // const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    spotifyConnect(process.env.REACT_APP_SPOTIFY_ID, process.env.REACT_APP_SPOTIFY_SECRET).then(tokenResponse => {
      setToken(tokenResponse.data.access_token);

      spotifyPlaylists(tokenResponse).then(genreResponse => {
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items,
        });
      });
    });
  }, [genres.selectedGenre]);

  const searchHandler = () => {

  }

  const getSearchTerm = () => {

  }

  return (
    <div>
    <SearchBar />
      <form>
        <Dropdown label="Genre: " options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} />
      </form>
    </div>
  );
};

export default App;
