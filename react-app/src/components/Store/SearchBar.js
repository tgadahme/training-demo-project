/**
 * The SearchBar component represents a search bar form for filtering data.
 * It receives the filterText, onFilterTextChange, and handleSearchSubmit as props.
 */

import React from "react";

export default function SearchBar({
  filterText,
  onFilterTextChange,
  handleSearchSubmit,
}) {
  return (
    <form className="form">
      {/* Input field for entering the filter text */}
      <input
        type="text"
        className="form-input"
        value={filterText}
        placeholder="Enter Account Id..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />

      {/* Button for triggering the search */}
      <button className="form-button" onClick={handleSearchSubmit}>
        Search
      </button>
    </form>
  );
}
