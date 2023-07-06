import React from "react";
import StoreRow from "./StoreRow";
import Modal from "../Modal/Modal";
import StoreModal from "./StoreModal";

/**
 * The StoreTable component displays a table of stores.
 * It also consists of a modal for displaying detailed store information.
 */
export default function StoreTable({
  stores,
  filterText,
  handleButtonClick,
  handleCloseModal,
  showModal,
  storeInModal,
}) {
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
      <div>
        <div className="container-table">
          {/* Table */}
          <table className="table">
            {/* Table Header */}
            <thead>
              <tr>
                <th>Store Id</th>
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
        {/* Store Details Modal */}
        <Modal
          title="Store Details"
          onClose={handleCloseModal}
          show={showModal}
          storeInModal={storeInModal}
        >
          <StoreModal storeInModal={storeInModal} />
        </Modal>
      </div>
    );
  } else {
    // If stores or filterText is missing, render an empty div
    return <div></div>;
  }
}
