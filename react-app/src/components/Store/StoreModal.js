/**
 * The StoreModal component displays the details of a store.
 * It receives the storeInModal object as a prop.
 */

import React from "react";

export default function StoreModal({ storeInModal }) {
  return (
    <div>
      {/* Store Name */}
      <p>Store Name: {storeInModal.name}</p>

      {/* Store Address */}
      <p>
        Address: {storeInModal.address}, {storeInModal.locality},{" "}
        {storeInModal.region}
      </p>

      {/* Store Postal Code */}
      <p>Postal Code: {storeInModal.postalcode}</p>
    </div>
  );
}
