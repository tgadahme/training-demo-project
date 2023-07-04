/**
 * This file contains the StoreContainer component, which serves as a container for managing stores and displaying store-related information.
 * It includes the StoreFilter component for filtering stores and the StoreModal component for displaying detailed store information in a modal.
 */

import React, { useState } from "react";
import Modal from "../Modal/Modal";
import StoreFilter from "./StoreFilter";
import StoreModal from "./StoreModal";

export default function StoreContainer() {
  // State variables
  const [stores, setStores] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [storeInModal, setStoreInModal] = useState("");

  // Handle modal close event
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Filterable Store Table */}
      <StoreFilter
        stores={stores}
        setStores={setStores}
        setShowModal={setShowModal}
        setStoreInModal={setStoreInModal}
      />

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
}
