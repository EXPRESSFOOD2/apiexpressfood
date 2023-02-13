
const ingredient_post_middleware =  (req, res, next ) => {
  const ingredient = req.body
if(!ingredient.name || !ingredient.type_measure) 
return  res.status(400).send("you must provide a ingredient name and type_measure")
if(typeof ingredient.name !== "string" || typeof ingredient.type_measure !== "string") 
return  res.status(400).send("ingredient name and type_measure must be a string")
next()

}



module.exports = {
    ingredient_post_middleware,
  
}