const express = require("express");
const { Sequelize } = require("sequelize");
const sequelize = require("../db.js");

const router = express.Router();

/**
 * Route: GET /api/stores/:AccountId
 * Description: Fetches active stores for a given account ID.
 * Params:
 *   - AccountId: Account ID to fetch stores for.
 */
router.get("/api/stores/:AccountId", async (req, res) => {
  try {
    const result = await sequelize.query("GetStoresByAccountId :AccountId;", {
      replacements: { AccountId: req.params.AccountId },
    });

    // Filter active stores with non-empty names
    const filteredStores = result[0].filter(
      (item) =>
        item.Store_IsActive === 1 &&
        item.Store_Name !== null &&
        item.Store_Name !== ""
    );

    if (filteredStores.length === 0) {
      return res.status(200).send({ message: "No stores found" });
    }

    // Map the filtered stores to the desired format
    const stores = filteredStores.map((item) => ({
      id: item.Store_ID,
      name: item.Store_Name,
      is_active: item.Store_IsActive,
      address: item.Store_AddressLine1,
      locality: item.Store_Locality,
      region: item.Store_Region,
      postalcode: item.Store_PostCode,
    }));

    res.status(200).send(stores);
  } catch (error) {
    if (error instanceof Sequelize.AccessDeniedError) {
      // Handle access denied error
      res.status(500).send({ message: "Error connecting to database" });
    } else {
      // Log and handle other errors
      console.error(error);
      res.status(500).send({ message: "Internal server error" });
    }
  }
});

module.exports = router;
