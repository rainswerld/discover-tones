import React, { useState, useEffect } from 'react';

const SearchBar = props => {
  const [query, setQuery] = useState('')

  return(
    <div className='searchbar'>
      <label>Search</label>
      <input type='text' onChange={e => setQuery(e.target.value)} query={query} />
    </div>
  )
}

export default SearchBar
