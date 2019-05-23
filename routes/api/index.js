const router = require("express").Router();
const urlRoutes = require("./urlRoutes");
const fileRoutes = require("./fileRoutes");

// Book routes
router.use("/url", urlRoutes);
router.use("/files", fileRoutes);

module.exports = router;
