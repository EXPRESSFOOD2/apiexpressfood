const { Router } = require('express');
const router = Router();
const { paymentsControllerPost } = require("../../controllers/Payments/payments-controller")
const { paymentsMiddleware } = require("../../middleware/payments-middleware")


router.post("/", paymentsMiddleware,  async(req, res)=>{
    const product = req.body

    try {

        const result  = await paymentsControllerPost(product)
   
        return res.status(200).send(result.body.init_point)
    } catch (error) {
 
        return res.status(400).send(error)
    }
  
    
        
    }
 );



module.exports = router;