const { Router } = require('express');
const router = Router();
const { processOrderGet, processOrderGetById } = require("../../middleware/order_middleware")

router.post("/", processOrderGet );
router.post("/:id", processOrderGetById );

module.exports = router;
