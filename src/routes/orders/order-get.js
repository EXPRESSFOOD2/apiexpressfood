const { Router } = require('express');
const router = Router();
const { processOrderGet, processOrderGetById , getAllOrderInProgress} = require("../../middleware/order_middleware")

router.get("/", processOrderGet );
router.get("/:id", processOrderGetById );
router.get('/', getAllOrderInProgress)

module.exports = router;
