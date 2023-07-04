const express = require("express");
const cors = require("cors");
const app = express();

require("./db.js");
const storeRouter = require("./routers/store.js");

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(storeRouter);

app.get("/", storeRouter);

module.exports = app;
