// const request = require('request')
const { MenuItem } = require("../../db");
const mercadopago = require("mercadopago");
const { get } = require("../../routes/payments/payments-router");

const paymentsControllerPost = async (products) => {
  let productDataToMercadoPago = [];

  // función para obtener el precio de un producto dado su ID
  const getPrice = async (productId) => {
    const product = await MenuItem.findByPk(productId);
    return product.dataValues;
  };

  for (let i = 0; i < products.length; i++) {
    let preference = await getPrice(products[i].id);
    productDataToMercadoPago.push({
      id: preference.id,
      tittle: preference.name,
      currency_id: "ARS",
      description: preference.description.slice(0, 255),
      category_id: "art",
      quantity: products[i].quantity,
      unit_price: preference.price,
    });
  }

  mercadopago.configure({
    public_key: process.env.MERCADOPAGO_PUBLIC_KEY,
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
  });

  let preference = {
    items: productDataToMercadoPago,
    back_urls: {
      success: "https://spacefood.up.railway.app",
      failure: "",
      pending: "",
    },
    auto_return: "all",
    binary_mode: true,
  };
  try {
    const result = await mercadopago.preferences.create(preference);

    return result;
  } catch (error) {
    return error.message;
  }
};

module.exports = { paymentsControllerPost };
