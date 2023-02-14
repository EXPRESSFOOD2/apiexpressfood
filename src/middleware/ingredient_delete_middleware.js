const ingredient_delete_middleware = (req, res, next) => {
  const   id = req.body;
  if (!id.length)
    return res.status(400).json("you must provide at least a ingredient id");
  else {
    let countvoid = 0;
    let counttype = 0;
    id.forEach((ingredient) => {
      if (!ingredient.id)
      countvoid++
      if (
        typeof ingredient.id !== "number"
      )
       counttype++
    });
    if(countvoid)return res
    .status(400)
    .json(
      {msg:"you must provide a ingredient id"
    });
    if(counttype) return res
    .status(400)
    .json({msg:"ingredient id must be a number"});
  }
  
  next();
};

module.exports = {
  ingredient_delete_middleware,
};
