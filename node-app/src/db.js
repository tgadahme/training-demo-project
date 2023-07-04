const { Sequelize } = require("sequelize");
require("dotenv").config();

// Create a new Sequelize instance
const sequelize = new Sequelize({
  // Database configuration from environment variables
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "mssql",
  logging: false,
  dialectOptions: {
    authentication: {
      type: "default",
      options: {
        userName: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
      },
    },
    options: {
      port: 5200,
    },
  },
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Export the Sequelize instance
module.exports = sequelize;
