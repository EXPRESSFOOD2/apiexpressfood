const { Router } = require('express');
const router = Router();
const { processUserLogin } = require("../../middleware/users_middleware")

router.get("/", processUserLogin );


module.exports = router;