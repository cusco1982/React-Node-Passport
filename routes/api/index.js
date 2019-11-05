const router = require("express").Router();
const tenantRoutes = require("./tenant");
const ticketRoutes = require("./ticket");
const unitRoutes = require("./unit");
const stripeRoutes = require("./checkout")
const imageRoutes = require("./image")

//  Routes
router.use("/tenants", tenantRoutes);
router.use("/tickets", ticketRoutes);
router.use("/units", unitRoutes);
router.use("/checkout", stripeRoutes);
router.use("/upload", imageRoutes)
module.exports = router;
