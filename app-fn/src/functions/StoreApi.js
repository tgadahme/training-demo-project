const { app } = require("@azure/functions");
const { Sequelize } = require("sequelize");
const sequelize = require("../db");

app.http("StoreApi", {
  methods: ["GET"],
  route: "stores/{AccountId}",
  authLevel: "anonymous",
  handler: async (request, context) => {
    try {
      const AccountId = request.params.AccountId;

      // Check if AccountId is an integer
      if (!AccountId.match(/^\d+$/)) {
        return {
          body: JSON.stringify({ message: "Please enter a valid Account Id" }),
        };
      }

      const result = await sequelize.query("GetStoresByAccountId :AccountId;", {
        replacements: { AccountId },
      });

      // Filter active stores with non-empty names
      const filteredStores = result[0].filter(
        (item) =>
          item.Store_IsActive === 1 &&
          item.Store_Name !== null &&
          item.Store_Name !== ""
      );

      if (filteredStores.length === 0) {
        return { body: JSON.stringify({ message: "No stores found" }) };
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

      return { body: JSON.stringify(stores) };
    } catch (error) {
      if (error instanceof Sequelize.AccessDeniedError) {
        // Handle access denied error
        return {
          status: 500,
          body: JSON.stringify({ message: "Error connecting to database" }),
        };
      } else {
        // Log and handle other errors
        console.error(error);
        return {
          status: 500,
          body: JSON.stringify({ message: "Internal server error" }),
        };
      }
    }
  },
});
