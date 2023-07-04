import React from "react";
import StoreRow from "./StoreRow";

/**
 * The StoreTable component displays a table of stores.
 * It receives the stores array, filterText, and handleButtonClick function as props.
 */
export default function StoreTable({ stores, filterText, handleButtonClick }) {
  const rows = [];

  // Check if stores and filterText are provided
  if (stores && filterText) {
    // Iterate over the stores array and create a StoreRow component for each store
    stores.forEach((store) => {
      rows.push(
        <StoreRow
          store={store}
          key={store.name}
          handleButtonClick={handleButtonClick}
        />
      );
    });

    return (
      <div className="container-table">
        {/* Table */}
        <table className="table">
          {/* Table Header */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Locality</th>
              <th>Region</th>
              <th>Postal Code</th>
              <th></th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  } else {
    // If stores or filterText is missing, render an empty div
    return <div></div>;
  }
}
