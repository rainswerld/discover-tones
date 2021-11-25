import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { spotifyConnect, spotifyPlaylists } from './api/spotify.js'
import Dropdown from './Components/Dropdown.js';
import Search from './Components/Search.js'
import { Input } from 'semantic-ui-react'

const App = () => {

  const [token, setToken] = useState('');
  const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: [] });

  const [searchInput, setSearchInput] = useState('')

  const searchArtists = (searchValue) => {
    console.log(searchValue)
    setSearchInput(searchValue)
  }

  useEffect(() => {
    spotifyConnect(process.env.REACT_APP_SPOTIFY_ID, process.env.REACT_APP_SPOTIFY_SECRET)
    .then(tokenResponse => {
      setToken(tokenResponse.data.access_token);

      spotifyPlaylists(tokenResponse)
      .then(genreResponse => {
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items,
        });
      });
    });
  }, [genres.selectedGenre]);

  return (
    <div>
      <form>
        <Dropdown label="Genre: " options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} />
        <Input icon='search' placeholder='Search...' onChange={(e) => searchArtists(e.target.value)}/>
      </form>
    </div>
  );
};

export default App;
