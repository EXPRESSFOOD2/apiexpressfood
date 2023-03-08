const { Order,OrdersMenu } = require("../db")
const FAKE_ORDERS = [
    { order_id: 1, total: 303.95, client_data: {email:"alpharus2k@gmail.com"}, code: "A000", status: "Entregada", payment_data: {code:1,collection_id:1313068717,collection_status:"approved",payment_id:1313068717,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8065965925,preference_id:"463377658-af36755d-4cbf-4519-8f35-7520f3062030",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-15T20:16:15.743Z" },
    { order_id: 2, total: 228.95, client_data: {email:"alpharus2k@gmail.com"}, code: "A001", status: "Entregada", payment_data: {code:2,collection_id:1313070499,collection_status:"approved",payment_id:1313070499,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066016831,preference_id:"463377658-43740c76-9a19-4afd-bcc7-c040c52a186c",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-15T21:16:15.743Z" },
    { order_id: 3, total: 523, client_data: {email:"alpharus2k@gmail.com"}, code: "A002", status: "En Progreso", payment_data: {code:3,collection_id:1313068827,collection_status:"approved",payment_id:1313068827,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066119156,preference_id:"463377658-c98d8880-c0b9-4054-ae66-a7b82d89a39d",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-15T22:16:15.743Z" },
    { order_id: 4, total: 589.8, client_data: {email:"alpharus2k@gmail.com"}, code: "A003", status: "Sin Pagar", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-16T20:16:15.743Z" },
    { order_id: 5, total: 589.8, client_data: {email:"alpharus2k@gmail.com"}, code: "A004", status: "Entregada", payment_data: {code:5,collection_id:1313070569,collection_status:"approved",payment_id:1313070569,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066089945,preference_id:"463377658-c1877309-6406-4f14-9f5e-0cb4db3b40d2",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-17T10:16:15.743Z" },
    { order_id: 6, total: 526.4, client_data: {email:"alpharus2k@gmail.com"}, code: "A005", status: "Lista", payment_data: {code:6,collection_id:1313068919,collection_status:"approved",payment_id:1313068919,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066191414,preference_id:"463377658-1176c567-1f44-4ec7-8c13-293c53935a1f",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-17T12:16:15.743Z" },
    { order_id: 7, total: 154.1, client_data: {email:"alpharus2k@gmail.com"}, code: "A006", status: "Entregada", payment_data: {code:7,collection_id:1313069007,collection_status:"approved",payment_id:1313069007,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066170291,preference_id:"463377658-f3992564-2e64-4606-aff9-00de79a31e87",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-17T13:16:15.743Z" },
    { order_id: 8, total: 303.95, client_data: {email:"alpharus2k@gmail.com"}, code: "A007", status: "Entregada", payment_data: {code:1,collection_id:1313068717,collection_status:"approved",payment_id:1313068717,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8065965925,preference_id:"463377658-af36755d-4cbf-4519-8f35-7520f3062030",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-17T14:16:15.743Z" },
    { order_id: 9, total: 228.95, client_data: {email:"alpharus2k@gmail.com"}, code: "A008", status: "Entregada", payment_data: {code:2,collection_id:1313070499,collection_status:"approved",payment_id:1313070499,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066016831,preference_id:"463377658-43740c76-9a19-4afd-bcc7-c040c52a186c",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-17T15:16:15.743Z" },
    { order_id: 10, total: 523, client_data: {email:"alpharus2k@gmail.com"}, code: "A009", status: "En Progreso", payment_data: {code:3,collection_id:1313068827,collection_status:"approved",payment_id:1313068827,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066119156,preference_id:"463377658-c98d8880-c0b9-4054-ae66-a7b82d89a39d",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-18T10:16:15.743Z" },
    { order_id: 11, total: 589.8, client_data: {email:"alpharus2k@gmail.com"}, code: "A010", status: "Sin Pagar", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-18T11:16:15.743Z" },
    { order_id: 12, total: 589.8, client_data: {email:"alpharus2k@gmail.com"}, code: "A011", status: "Cancelada", payment_data: {code:5,collection_id:1313070569,collection_status:"approved",payment_id:1313070569,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066089945,preference_id:"463377658-c1877309-6406-4f14-9f5e-0cb4db3b40d2",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-18T12:16:15.743Z" },
    { order_id: 13, total: 526.4, client_data: {email:"alpharus2k@gmail.com"}, code: "A012", status: "Lista", payment_data: {code:6,collection_id:1313068919,collection_status:"approved",payment_id:1313068919,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066191414,preference_id:"463377658-1176c567-1f44-4ec7-8c13-293c53935a1f",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-18T13:16:15.743Z" },
    { order_id: 14, total: 154.1, client_data: {email:"alpharus2k@gmail.com"}, code: "A013", status: "Entregada", payment_data: {code:7,collection_id:1313069007,collection_status:"approved",payment_id:1313069007,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066170291,preference_id:"463377658-f3992564-2e64-4606-aff9-00de79a31e87",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-18T14:16:15.743Z" },
    { order_id: 15, total: 303.95, client_data: {email:"alpharus2k@gmail.com"}, code: "A014", status: "Entregada", payment_data: {code:1,collection_id:1313068717,collection_status:"approved",payment_id:1313068717,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8065965925,preference_id:"463377658-af36755d-4cbf-4519-8f35-7520f3062030",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-18T15:16:15.743Z" },
    { order_id: 16, total: 228.95, client_data: {email:"alpharus2k@gmail.com"}, code: "A015", status: "Entregada", payment_data: {code:2,collection_id:1313070499,collection_status:"approved",payment_id:1313070499,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066016831,preference_id:"463377658-43740c76-9a19-4afd-bcc7-c040c52a186c",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-18T16:16:15.743Z" },
    { order_id: 17, total: 523, client_data: {email:"alpharus2k@gmail.com"}, code: "A016", status: "En Progreso", payment_data: {code:3,collection_id:1313068827,collection_status:"approved",payment_id:1313068827,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066119156,preference_id:"463377658-c98d8880-c0b9-4054-ae66-a7b82d89a39d",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-21T10:16:15.743Z" },
    { order_id: 18, total: 589.8, client_data: {email:"alpharus2k@gmail.com"}, code: "A017", status: "Sin Pagar", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-02-21T11:16:15.743Z" },
    { order_id: 19, total: 589.8, client_data: {email:"alpharus2k@gmail.com"}, code: "A018", status: "Entregada", payment_data: {code:5,collection_id:1313070569,collection_status:"approved",payment_id:1313070569,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066089945,preference_id:"463377658-c1877309-6406-4f14-9f5e-0cb4db3b40d2",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-03-01T10:16:15.743Z" },
    { order_id: 20, total: 526.4, client_data: {email:"alpharus2k@gmail.com"}, code: "A019", status: "Lista", payment_data: {code:6,collection_id:1313068919,collection_status:"approved",payment_id:1313068919,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066191414,preference_id:"463377658-1176c567-1f44-4ec7-8c13-293c53935a1f",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-03-01T11:16:15.743Z" },
    { order_id: 21, total: 154.1, client_data: {email:"alpharus2k@gmail.com"}, code: "A020", status: "Entregada", payment_data: {code:7,collection_id:1313069007,collection_status:"approved",payment_id:1313069007,status:"approved",external_reference:null,payment_type:"credit_card",merchant_order_id:8066170291,preference_id:"463377658-f3992564-2e64-4606-aff9-00de79a31e87",site_id:"MLA",processing_mode:"aggregator",merchant_account_id:null}, store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", createdAt: "2023-03-01T12:16:15.743Z" },
]

const FAKE_ORDERS_MENU = [
    {quantity: 3, unitPrice: 45, OrderId: 1, MenuItemId: 1 },
    {quantity: 2, unitPrice: 36, OrderId: 1, MenuItemId: 2 },
    {quantity: 1, unitPrice: 96.95, OrderId: 1, MenuItemId: 8 },
    {quantity: 2, unitPrice: 32.05, OrderId: 2, MenuItemId: 7 },
    {quantity: 3, unitPrice: 28.95, OrderId:  2, MenuItemId: 6 },
    { quantity: 3, unitPrice: 26, OrderId:  2, MenuItemId: 5 },
    { quantity: 4, unitPrice: 36, OrderId:  3, MenuItemId: 2 },
    { quantity: 3, unitPrice: 41.05, OrderId:  3, MenuItemId: 9 },
    { quantity: 2, unitPrice: 79.45, OrderId:  3, MenuItemId: 10 },
    { quantity: 1, unitPrice: 96.95, OrderId:  3, MenuItemId: 8 },
    { quantity: 4, unitPrice: 114.95, OrderId:  4, MenuItemId: 11 },
    { quantity: 3, unitPrice: 26, OrderId:  4, MenuItemId: 3 },
    { quantity: 2, unitPrice: 26, OrderId:  4, MenuItemId: 5 },
    { quantity: 4, unitPrice: 114.95, OrderId:  5, MenuItemId: 11 },
    { quantity: 3, unitPrice: 26, OrderId:  5, MenuItemId: 3 },
    { quantity: 2, unitPrice: 26, OrderId:  5, MenuItemId: 5 },
    { quantity: 1, unitPrice: 45, OrderId:  6, MenuItemId: 1 },
    { quantity: 1, unitPrice: 36, OrderId:  6, MenuItemId: 2 },
    { quantity: 1, unitPrice: 41.05, OrderId:  6, MenuItemId: 9 },
    { quantity: 1, unitPrice: 79.45, OrderId:  6, MenuItemId: 10 },
    { quantity: 1, unitPrice: 114.95, OrderId:  6, MenuItemId: 11 },
    { quantity: 1, unitPrice: 96.95, OrderId:  6, MenuItemId: 8 },
    { quantity: 1, unitPrice: 26, OrderId:  6, MenuItemId: 3 },
    { quantity: 1, unitPrice: 26, OrderId:  6, MenuItemId: 5 },
    { quantity: 1, unitPrice: 28.95, OrderId:  6, MenuItemId: 6 },
    { quantity: 1, unitPrice: 32.05, OrderId:  6, MenuItemId: 7 },
    { quantity: 2, unitPrice: 45, OrderId:  7, MenuItemId: 1 },
    { quantity: 2, unitPrice: 32.05, OrderId:  7, MenuItemId: 7 },
    { quantity: 3, unitPrice: 45, OrderId:  8, MenuItemId: 1 },
    { quantity: 2, unitPrice: 36, OrderId:  8, MenuItemId: 2 },
    { quantity: 1, unitPrice: 96.95, OrderId:  8, MenuItemId: 8 },
    { quantity: 2, unitPrice: 32.05, OrderId:  9, MenuItemId: 7 },
    { quantity: 3, unitPrice: 28.95, OrderId:  9, MenuItemId: 6 },
    { quantity: 3, unitPrice: 26, OrderId:  9, MenuItemId: 5 },
    { quantity: 4, unitPrice: 36, OrderId:  10, MenuItemId: 2 },
    { quantity: 3, unitPrice: 41.05, OrderId:  10, MenuItemId: 9 },
    { quantity: 2, unitPrice: 79.45, OrderId:  10, MenuItemId: 10 },
    { quantity: 1, unitPrice: 96.95, OrderId:  10, MenuItemId: 8 },
    { quantity: 4, unitPrice: 114.95, OrderId:  11, MenuItemId: 11 },
    { quantity: 3, unitPrice: 26, OrderId:  11, MenuItemId: 3 },
    { quantity: 2, unitPrice: 26, OrderId:  11, MenuItemId: 5 },
    { quantity: 4, unitPrice: 114.95, OrderId:  12, MenuItemId: 11 },
    { quantity: 3, unitPrice: 26, OrderId:  12, MenuItemId: 3 },
    { quantity: 2, unitPrice: 26, OrderId:  12, MenuItemId: 5 },
    { quantity: 1, unitPrice: 45, OrderId:  13, MenuItemId: 1 },
    { quantity: 1, unitPrice: 36, OrderId:  13, MenuItemId: 2 },
    { quantity: 1, unitPrice: 41.05, OrderId:  13, MenuItemId: 9 },
    { quantity: 1, unitPrice: 79.45, OrderId:  13, MenuItemId: 10 },
    { quantity: 1, unitPrice: 114.95, OrderId:  13, MenuItemId: 11 },
    { quantity: 1, unitPrice: 96.95, OrderId:  13, MenuItemId: 8 },
    { quantity: 1, unitPrice: 26, OrderId:  13, MenuItemId: 3 },
    { quantity: 1, unitPrice: 26, OrderId:  13, MenuItemId: 5 },
    { quantity: 1, unitPrice: 28.95, OrderId:  13, MenuItemId: 6 },
    { quantity: 1, unitPrice: 32.05, OrderId:  13, MenuItemId: 7 },
    { quantity: 2, unitPrice: 45, OrderId:  14, MenuItemId: 1 },
    { quantity: 2, unitPrice: 32.05, OrderId:  14, MenuItemId: 7 },
    { quantity: 3, unitPrice: 45, OrderId:  15, MenuItemId: 1 },
    { quantity: 2, unitPrice: 36, OrderId:  15, MenuItemId: 2 },
    { quantity: 1, unitPrice: 96.95, OrderId:  15, MenuItemId: 8 },
    { quantity: 2, unitPrice: 32.05, OrderId:  16, MenuItemId: 7 },
    { quantity: 3, unitPrice: 28.95, OrderId:  16, MenuItemId: 6 },
    { quantity: 3, unitPrice: 26, OrderId:  16, MenuItemId: 5 },
    { quantity: 4, unitPrice: 36, OrderId:  17, MenuItemId: 2 },
    { quantity: 3, unitPrice: 41.05, OrderId:  17, MenuItemId: 9 },
    { quantity: 2, unitPrice: 79.45, OrderId:  17, MenuItemId: 10 },
    { quantity: 1, unitPrice: 96.95, OrderId:  17, MenuItemId: 8 },
    { quantity: 4, unitPrice: 114.95, OrderId:  18, MenuItemId: 11 },
    { quantity: 3, unitPrice: 26, OrderId:  18, MenuItemId: 3 },
    { quantity: 2, unitPrice: 26, OrderId:  18, MenuItemId: 5 },
    { quantity: 4, unitPrice: 114.95, OrderId:  19, MenuItemId: 11 },
    { quantity: 3, unitPrice: 26, OrderId:  19, MenuItemId: 3 },
    { quantity: 2, unitPrice: 26, OrderId:  19, MenuItemId: 5 },
    { quantity: 1, unitPrice: 45, OrderId:  20, MenuItemId: 1 },
    { quantity: 1, unitPrice: 36, OrderId:  20, MenuItemId: 2 },
    { quantity: 1, unitPrice: 41.05, OrderId:  20, MenuItemId: 9 },
    { quantity: 1, unitPrice: 79.45, OrderId:  20, MenuItemId: 10 },
    { quantity: 1, unitPrice: 114.95, OrderId:  20, MenuItemId: 11 },
    { quantity: 1, unitPrice: 96.95, OrderId:  20, MenuItemId: 8 },
    { quantity: 1, unitPrice: 26, OrderId:  20, MenuItemId: 3 },
    { quantity: 1, unitPrice: 26, OrderId:  20, MenuItemId: 5 },
    { quantity: 1, unitPrice: 28.95, OrderId:  20, MenuItemId: 6 },
    { quantity: 1, unitPrice: 32.05, OrderId:  20, MenuItemId: 7 },
    { quantity: 2, unitPrice: 45, OrderId:  21, MenuItemId: 1 },
    { quantity: 2, unitPrice: 32.05, OrderId:  21, MenuItemId: 7 },
]

module.exports = async function() {
    setTimeout(async () => { 
        await Order.bulkCreate(FAKE_ORDERS)
    }, 880)
    setTimeout(async () => { 
       await OrdersMenu.bulkCreate(FAKE_ORDERS_MENU)
   }, 1050)

}



