/**
 * This file contains the StoreContainer component, which is responsible for filtering and displaying stores.
 * It provides a search functionality based on an account ID, fetches data from an API,
 * and renders the search bar, error messages, and the store table with filtered results.
 */

import React, { useState } from "react";
import validator from "validator";
import SearchBar from "./SearchBar";
import StoreTable from "./StoreTable";

export default function StoreContainer() {
  // State variables
  const [stores, setStores] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [storeInModal, setStoreInModal] = useState("");
  const [filterText, setFilterText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle button click event
  const handleButtonClick = (store) => {
    setShowModal(true);
    setStoreInModal(store);
  };

  // Handle search form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setStores(null);
    if (validator.isInt(filterText)) {
      fetchData(filterText);
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a valid Account Id");
    }
  };

  // Fetch data from API
  const fetchData = async (filterText) => {
    try {
      if (filterText !== "") {
        const response = await fetch(
          `https://hme-dev-lab-demo.azurewebsites.net/api/stores/${filterText}`
        );
        const data = await response.json();
        if (data && data.message) {
          setErrorMessage(data.message);
        } else {
          setStores(data);
          setErrorMessage("");
        }
      }
    } catch (error) {
      setErrorMessage("Error fetching data");
    }
  };

  // Handle modal close event
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Search bar component */}
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        handleSearchSubmit={handleSearchSubmit}
      />

      {/* Display error message if any */}
      {errorMessage ? (
        <div className="error-message">{errorMessage}</div>
      ) : (
        // Display store table if stores exist
        stores &&
        stores.length > 0 && (
          <div>
            <div className="store-count">{stores.length} store(s) found</div>
            <StoreTable
              stores={stores}
              filterText={filterText}
              handleButtonClick={handleButtonClick}
              handleCloseModal={handleCloseModal}
              showModal={showModal}
              storeInModal={storeInModal}
            />
          </div>
        )
      )}
    </div>
  );
}
