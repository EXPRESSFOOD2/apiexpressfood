const { Router } = require('express');
const router = Router();
const {processUserPost} = require("../../middleware/users-middleware")

router.post("/", processUserPost );


module.exports = router;