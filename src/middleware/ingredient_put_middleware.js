const ingredient_put_middleware = (req, res, next) => {
    const   ingredient = req.body;
    if (!Object.values(ingredient).length)
      return res.status(400).json("you must provide at least a ingredient");
    else {
   
     
        if (!ingredient.name || !ingredient.type_measure || !ingredient.id)
        return res
        .status(400)
        .json(
          {msg:"you must provide a ingredient name, type_measure ingredient and ingredient id"
        });
        if (
          typeof ingredient.name !== "string" ||
          typeof ingredient.type_measure !== "string" || typeof ingredient.id !== "number"
        )
        return res
        .status(400)
        .json({msg:"ingredient name and type_measure must be a string, ingredient id must be a number"});
      
    
    }
    
    next();
  };
  
  module.exports = {
    ingredient_put_middleware,
  };
  