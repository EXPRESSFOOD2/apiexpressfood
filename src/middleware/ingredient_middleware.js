const ingredient_middleware = (req, res, next) => {
  const   ingredients = req.body;
  if (!ingredients.length)
    return res.status(400).json("you must provide at least a ingredient");
  else {
    let countvoid = 0;
    let counttype = 0;
    ingredients.forEach((ingredient) => {
      if (!ingredient.name || !ingredient.type_measure)
      countvoid++
      if (
        typeof ingredient.name !== "string" ||
        typeof ingredient.type_measure !== "string"
      )
       counttype++
    });
    if(countvoid)return res
    .status(400)
    .json(
      {msg:"you must provide a ingredient name and type_measure ingredient"
    });
    if(counttype) return res
    .status(400)
    .json({msg:"ingredient name and type_measure must be a string"});
  }
  
  next();
};

module.exports = {
  ingredient_middleware,
};
