const router = require("express").Router();
const tenantRoutes = require("./tenant");
const ticketRoutes = require("./ticket");
const unitRoutes = require("./unit");

// Book routes
router.use("/tenants", tenantRoutes);
router.use("/tickets", ticketRoutes);
router.use("/units", unitRoutes);
module.exports = router;
