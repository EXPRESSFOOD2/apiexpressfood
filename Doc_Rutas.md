--------------------------------- NEW --------------------------------

# USERS

### .../users/create"

> **_ Espera: _** - METHOD: POST - Body: { name, last_name, account_name, password, email, phone, role_id, profile_image }
> **_ Retorna: _** - Success: { profile_image, id, name, last_name, account_name, email, phone,

                    roleId, updatedAt, createdAt, deletedAt }

>       - Error: Mensaje

### .../users/login"

> **_ Espera: _** - Body: { email, password } - METHOD: POST
> **_ Retorna: _** - Success: { valid, user: { id, name, last_name, email, phone, profile_image, roleId }, storeName } - Error: Mensaje

# ROLES

### .../roles/get"

> **_ Espera: _** - METHOD: GET
> **_ Retorna: _** - Success: [{id, name},{id, name},{id, name}] - Error: Mensaje

# CLOUDINARY - Images Processor

### .../processImage/post

> **_ Espera: _** - Body: { imageStr: String } imageStr es archivo de Imagen parseado a String
> **_ Retorna: _** - Success: URL de la imagen - Error: Mensaje

# TAGS

### .../tags/create

> **_ Espera: _** - METHOD: POST - Body: { name } - Headers: { storeName }
> **_ Retorna: _** - Success: { id, name } - Error: Message

### .../tags/delete

> **_ Espera: _** - METHOD: DELETE - Query: { id } - Headers: { storeName }
> **_ Retorna: _** - Success: 1 - Error: Message

### .../tags/get

> **_ Espera: _** - METHOD: GET - Headers: { storeName }
> **_ Retorna: _** - Success: [{id,name},{id,name}...] - Error: Message

### .../tags/update

> **_ Espera: _** - METHOD: PATCH - Body: { id, name } - Headers: { storeName }
> **_ Retorna: _** - Success: { 1 } - Error: Message

### .../tags/apply

> **_ Espera: _** - METHOD: POST - { tagsIds [], menuItemId } - Headers: { storeName }
> En Esencia borra la el id de menuItemId de la tabla intermedia y setea los tagsIds recibidos
> **_ Retorna: _** - Success: "Done" - Error: Message

# Ingredient

### .../ingredients/create

> **_ Espera: _** - METHOD: POST - Body: { name: String, layer: Integer, type_measure: String, ingredients_all: JSON ARRAY }
> **_ Retorna: _** - Success: { id, name, layer, type_measure, ingredients_all } - Error: Mensaje

### .../ingredients/get

> **_ Espera: _** - METHOD: GET
> **_ Retorna: _** - Success: [{ id, name, layer, type_measure, ingredients_all }, { id, name, layer, type_measure, ingredients_all }, ...] - Error: Mensaje

### .../ingredients/get/:id

> **_ Espera: _** - METHOD: GET - Params: { id }
> **_ Retorna: _** - Success: { id, name, layer, type_measure, ingredients_all } - Error: Mensaje

### .../ingredients/update

> **_ Espera: _** - METHOD: PATCH - Body: { id, name, type_measure }
> **_ Retorna: _** - Success: { "1" } - Error: Mensaje

### .../ingredients/delete

> **_ Espera: _** - METHOD: DELETE - Params: { id } - Internamente cambia el name agregandole OLD + caracteres Random y aplica borrado logico
> Nota: Posibilidad de agregar cambio en los JSON en todas las recetas que usan esto
> **_ Retorna: _** - Success: { 1 } - Error: Mensaje

# Recipe

### .../recipes/create

> **_ Espera: _** - Method: POST - Body: { name: String , details: String, produced_amount: Double, type_measure: String, ingredArray: [

                { id: Integer, name: String, layer: 0, waste_rate: Double, amount: Double, type_measure: String },
                { id: Integer, name: String, layer: 0, waste_rate: Double, amount: Double, type_measure: String }, ...
                ]}

> **_ Retorna: _** - Success: { id, name, details, produced_amount } - Error: Mensaje

### .../recipes/get"

> **_ Espera: _** - Method: GET

> **_ Retorna: _** - Success: [

        { id, name, details, produced_amount, ingredientsList: [
    		{ id, name, amount},
            { id, name, amount},
    		{ id, name, amount}, ... ]
        },
        { id, name, details, produced_amount, ingredientsList: [
    		{ id, name, amount},
            { id, name, amount},
    		{ id, name, amount}, ... ]
        }
    ]

>       - Error: Mensaje

### .../recipes/get/:id"

> **_ Espera: _** - Params: { id: Integer }
> **_ Retorna: _** - Success: Object Recipe { id, name, details, produced_amount, updatedAt, createdAt } - Error: Mensaje

### .../recipes/delete"

> **_ Espera: _** - Query: { id } - También borrará el Ingrediente con el mismo nombre, de forma logica cambiandoles el nombre primero, agregando " OLD **\*\***". \* representa un caracter random alfanumerico
> **_ Retorna: _** - Success: { 1 } - Error: Mensaje

### .../recipes/update"

> **_ Espera: _** - METHOD: PATCH - Body: { id, name, details } - Actualmente cambia nombre y details de Recipe e Ingredients
> **_ Retorna: _** - Success: { 1 } - Error: Mensaje

# MenuItem

### .../menu/create

> **_ Espera: _** - METHOD: POST - Body: { name,description,price,recomend_first,stock,is_active,url_image, ingredArray: [{ id, quantity },{ id, quantity }, ...], tagsIds: [1,2,3,4...] }
> **_ Retorna: _** - Success: { id, name, description, price, recomend_first, stock, is_active, url_image } - Error: Mensaje

### .../menu/get

> **_ Espera: _** - METHOD: GET
> **_ Retorna: _**

>       - Success: 	[{ id, rating, name, description, price, recomend_first, stock, is_active, url_image, TagsFull: [{name, TagsMenuItems {TagId, MenuItemId}}, ....] Tags: ["","",""...], Ingredients:[] }, .... ]
>       - Error: Mensaje

### .../menu/get/recomended

> **_ Espera: _** - METHOD: GET
> **_ Retorna: _** - Success: [{ id, rating, name, description, price, recomend_first, stock, is_active, url_image, Tags: ["","",""...], Ingredients:[] }, ...] - Error: Mensaje

### .../menu/get/:id

> **_ Espera: _** - METHOD: GET - Params: { id }
> **_ Retorna: _** - Success: { id, rating, name, description, price, recomend_first, stock, is_active, url_image, Tags: ["","",""...], Ingredients:[] } - Error: Mensaje

### .../menu/update

> **_ Espera: _** - METHOD: PATCH - Body: { id, name, description, price, recomend_first, stock, is_active, url_image } - Actualmente cambia TODOS LOS CAMPOS menos el de ingrediente con los valores enviados - IMPORTANTE!! Este metodo cambia, REEMPLAZA TODO en el MenuItem con el id pasado
> **_ Retorna: _** - Success: { 1 } - Error: Mensaje

### .../menu/delete

> **_ Espera: _** - METHOD: DELETE - Query: { id } - Actualmente DESHABILITADO

> **_ Retorna: _** - Success: { } - Error: Mensaje

---------------------- OLD ---------------------------------

# auth google

### .../auth

> **_ Espera: _** - METHOD: GET -
> **_ Retorna: _** - -

# Cart

### .../carts/get/:id

> **_ Espera: _** - METHOD: GET - Params: { id } - Id de usuario
> **_ Retorna: _** - Success: { my_cart } // JSON - Error: Mensaje

### .../carts/patch

> **_ Espera: _** - METHOD: PATCH - Body: { id, my_cart } - Id de usuario y el JSON, probablemente ARRAY
> **_ Retorna: _** - Success: { "1" } - Error: Mensaje

# UTILS

### .../orders/predict

>       METHOD: PUT
>       Body: { toPredict :[{MenuItemId:1, quantity:10},{MenuItemId:2, quantity:12}, {MenuItemId:3, quantity:12}] }
>
> **_ Retorna: _** - Success: [{id, name, amount, type_measure},{id, name, amount, type_measure}, ...] - Error: Mensaje

Hay otras rutas que existen pero no estan implementadas

[{ MenuItemId: 1, quantity : 10}, { MenuItemId: 2, quantity : 12}, { MenuItemId: 3, quantity : 12}]

/\*\* !!!

        LOGIN

//! TEST AUTH
headers = {
authorization: "",
user_id: ""
}
axios.get("url", {body}, headers)
const token = req.headers.authorization;
const user_id = req.headers.user_id;
if (!token) throw Error('Token no proporcionado');
if ( !await validateToken(user_id, token) ) throw Error("Token is invalid or expired, Please log in again.")
const
!!! \*\*\
