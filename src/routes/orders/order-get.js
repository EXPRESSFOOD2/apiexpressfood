const { Router } = require('express');
const router = Router();
const { processOrderGet, processOrderGetById , getAllOrderInProgress} = require("../../middleware/order_middleware")

router.post("/", processOrderGet );
router.post("/:id", processOrderGetById );
router.get('/', getAllOrderInProgress)

module.exports = router;