const app = require("./app.js");
require("dotenv").config();

const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
