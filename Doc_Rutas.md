# Images Processor
### .../processImage/post
>   *** Espera: ***
>       - Body: { imageStr: String }    imageStr es archivo de Imagen parseado a String
>   *** Retorna: ***
>       - Success: URL de la imagen
>       - Error: Mensaje

# Recipe
### .../recipes/create
>   *** Espera: ***
>       - Body: { name: String , details: String, produced_amount: Double, type_measure: String, ingredArray: [
                    { id: Integer, name: String, per_recipe: Double, waste_rate: Double},
                    { id: Integer, name: String, per_recipe: Double, waste_rate: Double}, ...
                ]}
>   *** Retorna: ***
>       - Success: Object Recipe { id, name, details, produced_amount, updatedAt, createdAt }
>       - Error: Mensaje

### .../recipes/get"
>   *** Espera: ***
>       - 
>   *** Retorna: ***
>       - Success: Todos los Recipes + Ingredients + Tabla intermedia:
            { id, name, details, produced_amount, is_active, createdAt, updatedAt, Ingredients: [
                { id, name,  layer, type_measure, ingredients_all: JSON ARRAY, is_active, createdAt, updatedAt, IngredientsRecipes: {
                waste_rate, createdAt, updatedAt, RecipeId, IngredientId }
                }, ... ]
            }
>       - Error: Mensaje
### .../recipes/get/:id"
>   *** Espera: ***
>       - Params: { id: Integer }
>   *** Retorna: ***
>       - Success: Object Recipe { id, name, details, produced_amount, updatedAt, createdAt }
>       - Error: Mensaje
### .../recipes/delete"
>   *** Espera: ***
>       - Query: { id }
>       - También borrará el Ingrediente con el mismo nombre
>   *** Retorna: ***
>       - Success: { "1" }
>       - Error: Mensaje
### .../recipes/update"
>   *** Espera: ***
>       - METHOD: PATCH
>       - Body: { id, name, details }
>       - Actualmente cambia nombre y details sin más preambulos
>   *** Retorna: ***
>       - Success: { "1" }
>       - Error: Mensaje

# User
### .../users/create"
>   *** Espera: ***
>       - METHOD: POST
>       - Body: { name, last_name, account_name, password, email, phone, password_question, password_answer, profile_image }
>   *** Retorna: ***
>       - Success: { is_active, id, name, last_name, account_name, email, secret, phone, activation_token, profile_image, updatedAt, createdAt}
>       - Abrá que eliminar la información sensible
>       - Error: Mensaje
### .../users/activate_account
>   *** Espera: ***
>       - METHOD: GET
>       - Params: { token }
>   *** Retorna: ***
>       - Success: { id, name, last_name, account_name, email, secret, phone, is_active,activation_token, profile_image, createdAt,updatedAt }
>       - Abrá que eliminar la información sensible
>       - Error: Mensaje
### .../users/login"
>   *** Espera: ***
>       - Body: { email, password }
>       - METHOD: POST
>   *** Retorna: ***
>       - Success: { Boolean }
>       - Error: Mensaje

# auth google
### .../auth
>   *** Espera: ***
>       - METHOD: GET
>       - 
>   *** Retorna: ***
>       - 
>       - 

# Ingredient
### .../ingredients/create
>   *** Espera: ***
>       - METHOD: POST
>       - Body: { name: String, layer: Integer, type_measure: String, ingredients_all: JSON ARRAY }
>   *** Retorna: ***
>       - Success: { is_active, id, name, layer, type_measure, ingredients_all, updatedAt, createdAt }
>       - Error: Mensaje
### .../ingredients/get
>   *** Espera: ***
>       - METHOD: GET

>   *** Retorna: ***
>       - Success: [{ id, name, layer, type_measure, ingredients_all,is_active, createdAt, updatedAt }, { id, name, layer, type_measure, ingredients_all,is_active, createdAt, updatedAt }, ...]
>       - Error: Mensaje
### .../ingredients/get/:id
>   *** Espera: ***
>       - METHOD: GET
>       - Params: { id }
>   *** Retorna: ***
>       - Success: { id, name, layer, type_measure, ingredients_all,is_active, createdAt, updatedAt }
>       - Error: Mensaje
### .../ingredients/update
>   *** Espera: ***
>       - METHOD: PATCH
>       - Body: { id, name, type_measure }
>   *** Retorna: ***
>       - Success: { "1" }
>       - Error: Mensaje
### .../ingredients/delete
>   *** Espera: ***
>       - METHOD: DELETE
>       - Params: { id }
>       - Internamente cambia el estado is_active: false // Retrabajar despues de Setear PARANOID
>   *** Retorna: ***
>       - Success: { id, name, layer, type_measure, ingredients_all,is_active, createdAt, updatedAt }
>       - Error: Mensaje

# Menu
### .../menu/create
>   *** Espera: ***
>       - METHOD: POST
>       - Body: { name,description,price,recomend_first,stock,is_active,url_image, ingredArray: [{ id, quantity },{ id, quantity }, ...] }
>   *** Retorna: ***
>       - Success: { id, name, description, price, recomend_first, stock, is_active, url_image, createdAt, updatedAt }
>       - Error: Mensaje

### .../menu/get
>   *** Espera: ***
>       - METHOD: GET
>   *** Retorna: ***
>       - Success: 	[{ id, name, description, price, recomend_first, stock, is_active, url_image, createdAt, updatedAt, Tags: [{ id, name, createdAt, updatedAt, TagsMenuItems}, ... ] }, ...]
>       - Error: Mensaje

### .../menu/get/:id
>   *** Espera: ***
>       - METHOD: GET
>       - Params: { id }
>   *** Retorna: ***
>       - Success: 	{ id, name, description, price, recomend_first, stock, is_active, url_image, createdAt, updatedAt, Tags: [{ id, name, createdAt, updatedAt, TagsMenuItems}, ... ] }
>       - Error: Mensaje

### .../menu/update
>   *** Espera: ***
>       - METHOD: PATCH
>       - Body: { id, name, description, price, recomend_first, stock, is_active, url_image }
>       - Actualmente cambia TODOS LOS CAMPOS con los valores enviados
>   *** Retorna: ***
>       - Success: { "1" }
>       - Error: Mensaje

### .../menu/delete
>   *** Espera: ***
>       - METHOD: DELETE
>       - Query: { id }
>       - Actualmente DESHABILITADO

>   *** Retorna: ***
>       - Success: {  }
>       - Error: Mensaje

# Cart
### .../carts/get/:id
>   *** Espera: ***
>       - METHOD: GET
>       - Params: { id }
>       - Id de usuario
>   *** Retorna: ***
>       - Success: { my_cart }  // JSON
>       - Error: Mensaje

### .../carts/patch
>   *** Espera: ***
>       - METHOD: PATCH
>       - Body: { id, my_cart }
>       - Id de usuario y el JSON, probablemente ARRAY
>   *** Retorna: ***
>       - Success: { "1" }
>       - Error: Mensaje