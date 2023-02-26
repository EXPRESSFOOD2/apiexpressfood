const { Router } = require('express');
const router = Router();
const { paymentsControllerPost } = require("../../controllers/Payments/payments-controller")
const { paymentsSuccessProcess } = require("../../controllers/Payments/payments-success-controler")
const { paymentsMiddleware } = require("../../middleware/payments-middleware")


router.post("/create", paymentsMiddleware,  async(req, res)=>{
    const product = req.body
    try {
        const result  = await paymentsControllerPost(product)
        return res.status(200).send(result.body.init_point)
    } catch (error) {
        return res.status(400).send(error.message)
    }
    }
);

router.get("/success", async(req, res)=>{
    const successResponse = req.query;
    //! Probar Modificar
    let redirectUrl = await paymentsSuccessProcess(successResponse) //!AQUI SE INVOCA EL CONTROLADOR DE LA LOGICA CON DB PASANDOLE VARIABLEE PRODUCT
    //! Console.log

    res.status(200).redirect(redirectUrl)
        
    }
 );
router.get("/fail", async(req, res)=>{
    const failureResponse = req.query
    
    res.status(400).redirect(redirectUrl)
    }
 );



module.exports = router;