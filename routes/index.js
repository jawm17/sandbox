const path = require("path");
const router = require("express").Router();
const itemRouter = require("./Items.js");

// API Routes
router.use("/item", itemRouter);

// If no API routes are hit, send the React app
router.use("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;