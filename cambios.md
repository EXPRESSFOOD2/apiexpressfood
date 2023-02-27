
## ServerApi
    - Crear ruta para recibir las reviews 
    - Enviar el EMAIL para las Reviews. fn(["ids numericos de menu"], email, idOrder) 
    ([1,2,4], "a@pepe.com", idOrder) => envia Email <CadaMenu puntaje comentario(String 255)>
    - Modificar la Fn() de get MenuItem
    - Enviar Code: "A000" o similar por Email al Aceptar success de Payment en controller
    - Las rutas de pedidos IGNORAN los estados "Unpaid" << Konstantin >>
    - Model: Review + TablaIntermedia c/Orden o Ticket... a considerar
    - Almacenar los logins de usuarios <<Planear una resolucion>>

## CustomerApi
    - LocalStore: short_name = ""
    - !?!? Blockear las URL ni se que es eso ?!?!?!
    - Crear Action de vacio de Cart en localstorage
        * Agregar esta action a LogOut y a paymentSuccess
    - Que visualize correctamente
    - Se viasualize el pedido (Mis Pedidos=> Pedido { menus + cantidad + precio + estado }) crear propiedad en reducer.. envio email del user logueado.. y Server hace magia)
    - Si intento Agregar a la tienda y no estoy logueado.... loguearme Y AGREGAR EL PEDIDO despues (cosa que ahora no hace)

## ServerApi
/*
    - Rebuild! - No es popular... lo sé... sin embargo vale la pena
    - Cuando creamos un User -> validar Email -> permitimos Acceso -> si no existe Store... redirect CreateStore
    - LocalStore: short_name
*/


