const paymentsMiddleware = (req, res, next) => {
  const products = req.body;

  // if (!Array.isArray(products)) return res.status(400).send( "Request body must be an array");
  // if (!products.length) return  res.status(400).send("Request body must contain at least one product");
  // products.forEach((product) => {
  //   if (typeof product !== "object") return  res.status(400).send("Request body must be an objects Array");
  //   if (
  //     !product.hasOwnProperty("id_product") ||
  //     !product.hasOwnProperty("quantity_product")
  //   )
  //     return  res.status(400).send("Each product must have a id_product property and quantity_product property");
  //   if (
  //     typeof product.id_product !== "number" ||
  //     typeof product.quantity_product !== "number"
  //   )
  //     return  res.status(400).send("product_id and quantity_product properties must be a number");
  // });

  next();
};

module.exports = {
  paymentsMiddleware,
};
