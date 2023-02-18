const { Router } = require('express');
const router = Router();
const { processActivateAccount } = require("../../middleware/users_middleware")

router.get("/:token", processActivateAccount );


module.exports = router;