const { Order } = require("../db");
const {
  ordersPostController,
} = require("..//controllers/order/order-post_controller");


const FAKE_CARTS = [
  {
    products: [
      { id: 2, quantity: 1 },
      { id: 5, quantity: 1 },
      { id: 1, quantity: 1 },
      { id: 7, quantity: 1 },
      { id: 10, quantity: 1 },
    ]
  },
  {
    products: [
      { id: 3, quantity: 1 },
      { id: 1, quantity: 1 },
      { id: 10, quantity: 1 },
    
    ]
  },
  {
    products: [
      { id: 3, quantity: 2 },
   
    ]
  },
  {
    products: [
      { id: 3, quantity: 2 },
      { id: 5, quantity: 2 },
      { id: 1, quantity: 2 },
      { id: 7, quantity: 1 },
      { id: 10, quantity: 1 },
      { id: 12, quantity: 2 },
      { id: 15, quantity: 1 },
    ]
  },
  {
    products: [
      { id: 6, quantity: 2 },
      { id: 7, quantity: 2 },
      { id: 8, quantity: 2 },
   ]
  },
  {
    products: [
      { id: 3, quantity: 1 },
      { id: 6, quantity: 2 },
      { id: 9, quantity: 1 },
      { id: 7, quantity: 2 },
      { id: 2, quantity: 1 },
    ]
  },
  {
    products: [
      { id: 3, quantity: 1 },
      { id: 6, quantity: 1 },
      { id: 10, quantity: 1 },
      { id: 4, quantity: 1 },
      { id: 5, quantity: 1 },
    ]
  },
  {
    products: [
      { id: 3, quantity: 2 },
      { id: 5, quantity: 2 },
    
    ]
  },
  {
    products: [
    ,
      { id: 7, quantity: 2 },
      { id: 10, quantity: 2 },
    ]
  },
  {
    products: [
     
      { id: 1, quantity: 2 },
  
    ]
  },
  {
    products: [

      { id: 5, quantity: 2 },
      { id: 1, quantity: 2 },
    
    ]
  },
  {
    products: [

      { id: 7, quantity: 2 },
      { id: 10, quantity: 2 },
    ]
  },
  {
    products: [

      { id: 10, quantity: 2 },
    ]
  },
  {
    products: [
      { id: 1, quantity: 1 },
      { id: 5, quantity: 2 },
      { id: 17, quantity: 2 },
    
    ]
  },
  {
    products: [
      { id: 3, quantity: 2 },
      { id: 5, quantity: 2 },
      { id: 1, quantity: 2 },
      { id: 7, quantity: 2 },
      { id: 10, quantity: 2 },
    ]
  },
  {
    products: [
      { id: 3, quantity: 2 },
      { id: 5, quantity: 2 },
  
   
    ]
  },
  {
    products: [
      { id: 3, quantity: 2 },
      { id: 5, quantity: 2 },
      { id: 10, quantity: 2 },
   
    ]
  },
  {
    products: [
      
        { id: 3, quantity: 2 },
      { id: 1, quantity: 2 },
      { id: 7, quantity: 2 },
      { id: 10, quantity: 2 },
    ]
  },
  {
    products: [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 2 },
      { id: 3, quantity: 2 },
      { id: 4, quantity: 2 },
      { id: 5, quantity: 2 },
    ]
  },
  {
    products: [
      { id: 17, quantity: 2 },

    ]
  },
];
const FAKE_USERS = [
 {client_data:{email:"gibsonavilan@gmail.com" }},
 {client_data:{email:"davidvergaraok@gmail.com" }},
 {client_data:{email:"alpharus2k@gmail.com" }},
 {client_data:{email:"jhamilfernandez@gmail.com" }},
 {client_data:{email:"gibsonavilan@gmail.com" }},
 {client_data:{email:"davidvergaraok@gmail.com" }},
 {client_data:{email:"alpharus2k@gmail.com" }},
 {client_data:{email:"jhamilfernandez@gmail.com" }},
 {client_data:{email:"gibsonavilan@gmail.com" }},
 {client_data:{email:"davidvergaraok@gmail.com" }},
 {client_data:{email:"alpharus2k@gmail.com" }},
 {client_data:{email:"jhamilfernandez@gmail.com" }},
 {client_data:{email:"gibsonavilan@gmail.com" }},
 {client_data:{email:"davidvergaraok@gmail.com" }},
 {client_data:{email:"alpharus2k@gmail.com" }},
 {client_data:{email:"jhamilfernandez@gmail.com" }},
 {client_data:{email:"gibsonavilan@gmail.com" }},
 {client_data:{email:"davidvergaraok@gmail.com" }},
 {client_data:{email:"alpharus2k@gmail.com" }},
 {client_data:{email:"jhamilfernandez@gmail.com" }},
 
];

FAKE_ORDERS = [
    {total: 50, client_data:{"email":"davidvergaraok@gmail.com" }, status: "Unpaid", payment_data: {"code":"6","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"gibsonavilan@gmail.com" }, status: "In Progress", payment_data: {"code":"7","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"jhamilfernandez@gmail.com" }, status: "In Progress", payment_data: {"code":"8","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"alpharus2k@gmail.com" }, status: "Canceled", payment_data: {"code":"9","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"gibsonavilan@gmail.com" }, status: "Canceled", payment_data: {"code":"10","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"jhamilfernandez@gmail.com" }, status: "Ready", payment_data: {"code":"11","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"alpharus2k@gmail.com" }, status: "Ready", payment_data: {"code":"12","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"davidvergaraok@gmail.com" }, status: "Finished", payment_data: {"code":"13","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"gibsonavilan@gmail.com" }, status: "Finished", payment_data: {"code":"14","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"jhamilfernandez@gmail.com" }, status: "Canceled", payment_data: {"code":"15","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"alpharus2k@gmail.com" }, status: "Ready", payment_data: {"code":"16","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"davidvergaraok@gmail.com" }, status: "In Progress", payment_data: {"code":"17","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"gibsonavilan@gmail.com" }, status: "In Progress", payment_data: {"code":"18","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"jhamilfernandez@gmail.com" }, status: "Ready", payment_data: {"code":"18","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"alpharus2k@gmail.com" }, status: "Ready", payment_data: {"code":"19","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"davidvergaraok@gmail.com" }, status: "Unpaid", payment_data: {"code":"20","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"jhamilfernandez@gmail.com" }, status: "Unpaid", payment_data: {"code":"21","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"alpharus2k@gmail.com" }, status: "Unpaid", payment_data: {"code":"22","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"gibsonavilan@gmail.com" }, status: "Unpaid", payment_data: {"code":"23","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
    {total: 50, client_data:{"email":"davidvergaraok@gmail.com" }, status: "Unpaid", payment_data: {"code":"24","collection_id":"1311877064","collection_status":"approved","payment_id":"1311877064","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"7983400210","preference_id":"463377658-32ea1da8-426c-42d5-8b6f-bd2cdc5838b0","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"} },
]

module.exports = async function () {


  setTimeout( async() => {

    await Order.bulkCreate(FAKE_ORDERS)

  }, 5000);
};
