/**
 * The StoreRow component represents a row in the StoreTable.
 * It displays the details of a store and provides a button to show more information.
 * It receives the store object and handleButtonClick function as props.
 */

import React from "react";

export default function StoreRow({ store, handleButtonClick }) {
  return (
    <tr>
      {/* Store ID */}
      <td>{store.id}</td>

      {/* Store Name */}
      <td>{store.name}</td>

      {/* Store Address */}
      <td>{store.address}</td>

      {/* Store Locality */}
      <td>{store.locality}</td>

      {/* Store Region */}
      <td>{store.region}</td>

      {/* Store Postal Code */}
      <td>{store.postalcode}</td>

      {/* Show More Button */}
      <td>
        <button
          className="show-more-btn"
          onClick={() => handleButtonClick(store)}
        >
          Show More
        </button>
      </td>
    </tr>
  );
}
