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
        return res.status(400).send(error)
    }
    }
);

router.get("/success", async(req, res)=>{
    const product = req.query //! MUESTRA DATOS DEL PAGO EN LAS PROPIEDADES payment_id y status
    paymentsSuccessProcess(product) //!AQUI SE INVOCA EL CONTROLADOR DE LA LOGICA CON DB PASANDOLE VARIABLEE PRODUCT
console.log(product);
    res.status(200).send(product)
        
    }
 );
router.get("/fail", async(req, res)=>{
    const product = req.query

console.log(product);
    
        
    }
 );



module.exports = router;