"use client";
import SearchVenue from "./SearchVenue";
import { useState } from "react";

const SearchBar = () => {
  const [venue, setVenue] = useState('');

  const handleSearch = () => { }

  return (
    <form className="" onSubmit={handleSearch}>
      <div className="">
        <SearchVenue
          venue={venue}
          setVenue={setVenue}
        />
      </div>
    </form>
  )
}

export default SearchBar