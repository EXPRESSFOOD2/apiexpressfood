# Deploy base de Datos
# Deploy Client
# Deploy Customer

## CustomerApi  - Vistas a la perfeccion
                - Volar Register ( dejarlo comentado, ruta inclusive )
                - Modificar el Login con google, dejarlo visualmente aceptable ( Posible popUp lateral/superior )

                - Agregar Alias al Pedido ( A114 )

                - Carrito: Acumular Items // Enviar al server a Procesar // Posibilidad de forzar email

                - Agregar "Agotado" si stock == 0


## ServerApi    - Procesar la Compra ...    Success: Generar Order => Redirect => vaciar Cart
                                            Error: No generas la orden, Avisar que salió mal
                - Implementar Socket

## StoreApi     - Menu => cambiar is_active por deletadAt == null

Socket: Usos:   Store Api   => Ver ordenes no eliminadas (findAll)
                CustomerApi => Si hay cambios de Stock en los menu o si alguno pasa a ser borrado










#### Crear ruta para PATCH el carrito
* Crear una tabla:{ email: "string", cart: "JSON-Array" }
