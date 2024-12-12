import React from "react";
import { useState } from "react";

import { Entry } from "../utils/diary";

const DiarySearch = () => {
  const [input, setInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Entry[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setHasSearched(true);
    if (input.trim()) {
      const result = Entry.searchEntry(input);
      setSearchResults(result);
    }
  };

  return (
    <section>
      <h2>Search Form</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        {hasSearched && searchResults.length === 0 && <p>No entry was found</p>}
        {searchResults.length > 0 &&
          searchResults.map((entry) => (
            <div>
              <h3>{entry.category}</h3>
              <h4>{entry.date}</h4>
              <h5>{entry.title}</h5>
              <p>{entry.body}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default DiarySearch;
