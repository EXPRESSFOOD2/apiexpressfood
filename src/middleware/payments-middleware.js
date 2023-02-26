const paymentsMiddleware = (req, res, next) => {
  const products = req.body;

  if (!Array.isArray(products)) return res.status(400).send( "Request body must be an array");
  if (!products.length) return  res.status(400).send("Request body must contain at least one product");
  products.forEach((product) => {
    if (typeof product !== "object") return  res.status(400).send("Request body must be an objects Array");
    if (
      !product.hasOwnProperty("id") ||
      !product.hasOwnProperty("quantity")
    )
      return  res.status(400).send("Each product must have a id property and quantity property");
    if (
      typeof product.id !== "number" ||
      typeof product.quantity !== "number"
    )
      return  res.status(400).send("product_id and quantity properties must be a number");
  });

  next();
};

module.exports = {
  paymentsMiddleware,
};
