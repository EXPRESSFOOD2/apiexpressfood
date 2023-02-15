const { Router } = require('express');
const router = Router();
const { processMenuGet, processMenuGetById } = require("../../middleware/menu_middleware")

router.get("/", processMenuGet);
router.get("/:id", processMenuGetById);

module.exports = router;