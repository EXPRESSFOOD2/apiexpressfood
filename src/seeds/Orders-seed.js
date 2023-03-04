const { Order , OrdersMenu} = require("../db");




const FAKE_ORDERS = [
  {total:55, client_data: {"email":"gibsonavilan@gmail.com"}, code:"A000", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "In Progress"},
  {total:25, client_data: {"email":"davidvergaraok@gmail.com"}, code:"A001", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "In Progress"},
  {total:60, client_data: {"email":"davidvergaraok@gmail.com"}, code:"A002", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "In Progress"},
  {total:60, client_data: {"email":"davidvergaraok@gmail.com"}, code:"A003", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "In Progress"},
  {total:60, client_data: {"email":"davidvergaraok@gmail.com"}, code:"A004", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "In Progress"},
  {total:60, client_data: {"email":"davidvergaraok@gmail.com"}, code:"A005", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "In Progress"},
  {total:60, client_data: {"email":"davidvergaraok@gmail.com"}, code:"A006", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "In Progress"},
  {total:60, client_data: {"email":"alpharus2k@gmail.com"}, code:"A007", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "In Progress"},
  {total:60, client_data: {"email":"alpharus2k@gmail.com"}, code:"A008", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "In Progress"},
  {total:60, client_data: {"email":"alpharus2k@gmail.com"}, code:"A009", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "In Progress"},
  {total:60, client_data: {"email":"alpharus2k@gmail.com"}, code:"A010", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "In Progress"},
  {total:60, client_data: {"email":"alpharus2k@gmail.com"}, code:"A011", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "In Progress"},
  {total:60, client_data: {"email":"alpharus2k@gmail.com"}, code:"A012", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "Ready"},
  {total:60, client_data: {"email":"alpharus2k@gmail.com"}, code:"A013", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "Ready"},
  {total:60, client_data: {"email":"alpharus2k@gmail.com"}, code:"A014", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "Ready"},
  {total:60, client_data: {"email":"gibsonavilan@gmail.com"}, code:"A015", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "Ready"},
  {total:60, client_data: {"email":"gibsonavilan@gmail.com"}, code:"A016", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "Ready"},
  {total:60, client_data: {"email":"gibsonavilan@gmail.com"}, code:"A017", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "Ready"},
  {total:60, client_data: {"email":"gibsonavilan@gmail.com"}, code:"A018", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "Ready"},
  {total:60, client_data: {"email":"gibsonavilan@gmail.com"}, code:"A019", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "Ready"},
  {total:60, client_data: {"email":"gibsonavilan@gmail.com"}, code:"A020", store_id: "f3bc0474-620c-429d-a46c-df2460c7725a", status: "Ready"},
  
];
const FAKE_ORDERSMENUS = [
 {quantity:5, OrderId:1, MenuItemId:1},
 {quantity:5, OrderId:1, MenuItemId:3},

 {quantity:5, OrderId:2, MenuItemId:5},

 {quantity:5, OrderId:3, MenuItemId:6},
 {quantity:5, OrderId:3, MenuItemId:10},

 {quantity:5, OrderId:4, MenuItemId:11},

 {quantity:5, OrderId:5, MenuItemId:15},

 {quantity:5, OrderId:6, MenuItemId:12},

 {quantity:5, OrderId:7, MenuItemId:13},

 {quantity:5, OrderId:8, MenuItemId:19},

 {quantity:5, OrderId:9, MenuItemId:18},

 {quantity:5, OrderId:10, MenuItemId:10},
 {quantity:5, OrderId:10, MenuItemId:2},

 {quantity:5, OrderId:11, MenuItemId:3},
 {quantity:5, OrderId:11, MenuItemId:4},

 {quantity:5, OrderId:12, MenuItemId:5},
 {quantity:5, OrderId:12, MenuItemId:6},

 {quantity:5, OrderId:13, MenuItemId:7},
 {quantity:5, OrderId:13, MenuItemId:8},

 {quantity:5, OrderId:14, MenuItemId:9},
 {quantity:5, OrderId:14, MenuItemId:10},

 {quantity:5, OrderId:15, MenuItemId:1},
 {quantity:5, OrderId:15, MenuItemId:2},

 {quantity:5, OrderId:16, MenuItemId:13},
 {quantity:5, OrderId:16, MenuItemId:2},

 {quantity:5, OrderId:17, MenuItemId:3},
 {quantity:5, OrderId:17, MenuItemId:4},

 {quantity:5, OrderId:18, MenuItemId:5},
 {quantity:5, OrderId:18, MenuItemId:6},

 {quantity:5, OrderId:19, MenuItemId:7},
 {quantity:5, OrderId:19, MenuItemId:8},
 {quantity:5, OrderId:19, MenuItemId:9},
 {quantity:5, OrderId:19, MenuItemId:10},
 {quantity:5, OrderId:19, MenuItemId:11},
 {quantity:5, OrderId:19, MenuItemId:12},
 {quantity:5, OrderId:19, MenuItemId:13},
 {quantity:5, OrderId:19, MenuItemId:14},
 {quantity:5, OrderId:19, MenuItemId:15},
 {quantity:5, OrderId:19, MenuItemId:16},
 {quantity:5, OrderId:19, MenuItemId:17},


 
];


module.exports = async function () {


  setTimeout( async() => {
    const promises = [ Order.bulkCreate(FAKE_ORDERS),
    OrdersMenu.bulkCreate(FAKE_ORDERSMENUS)
]
try {
  await Promise.all(promises)
  console.log("orders created");
} catch (error) {
  console.log(error);
}
   


  }, 3000);
};
