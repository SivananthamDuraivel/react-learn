import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <form className='search' onSubmit={(e)=>e.preventDefault()}>
        <input 
            type="text"
            placeholder='search task'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}

export default Search
