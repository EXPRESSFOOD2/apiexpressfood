// const request = require('request')
const mercadopago = require('mercadopago');



const paymentsControllerPost =async (product) =>{


    
mercadopago.configure({public_key:process.env.MERCADOPAGO_PUBLIC_KEY, access_token:process.env.MERCADOPAGO_ACCESS_TOKEN})
        
    let preference = {
        items:[{
            id:123,
            tittle:product.tittle,
            currency_id: 'ARS',
            picture_url: product.image,
            description: product.description,
            category_id: 'art',
            quantity:1,
unit_price: product.price}
    ],
    back_urls:{
        success: "https://https://spacefood.up.railway.app/",
        failure: '',
        pending:'',
    },
    auto_return: 'approved',
    binary_mode: true
    }
try {
    const result =  await mercadopago.preferences.create(preference)
   return result
} catch (error) {
    return error.message
}
   
}



module.exports = {paymentsControllerPost}