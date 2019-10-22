const router = require("express").Router();
const bookRoutes = require("./tenants");

// Book routes
router.use("/tenants", tenantRoutes);

module.exports = router;
