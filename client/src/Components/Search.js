import React, { useState } from 'react'

const Search = () => {

  return (
    <form method='get'>
      <label htmlFor='artist-search'>
        <span className='visually-hidden'>Search for artist</span>
      </label>
      <input
        type='text'
        id='artist-search'
        placeholder='Search for artist'
        name='s'/>
      <button type='submit'>Search</button>
    </form>
  )
}

export default Search;
