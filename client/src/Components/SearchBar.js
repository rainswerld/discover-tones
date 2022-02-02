import React, { useState, useEffect } from 'react';
import { artistSearch } from '../api/spotify.js'

const SearchBar = props => {
  const [query, setQuery] = useState('')
  const [searchData, setSearchData] = useState('')

  const onArtistSearch = event => {
    event.preventDefault()
    console.log('this is query: ' + query)
    artistSearch(query)
    .then(res => JSON.stringify(res))
    .then(jsonData => setSearchData(jsonData))
    // .then(jsonData => console.log(jsonData))
    .catch(error => {console.log(error)})
  }

  return(
    <div className='searchbar'>
      <form onSubmit={onArtistSearch}>
        <label>Artist Search:
          <input type='text' name='aristSearch' onChange={e => setQuery(e.target.value)} />
        </label>
        <input type='submit' value='submit' />
      </form>
      <div>
        {searchData.data}
      </div>
    </div>
  )
}

export default SearchBar
