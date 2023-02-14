const { Router } = require('express');
const router = Router();
const {processUserPost} = require("../../middleware/users-middleware")

router.post("/create", processUserPost );


module.exports = router;