//const {menuItemsPostController} = require("../controllers/menuItem/menuItem-post_controller")
const { MenuItem, IngredientsMenuItems} = require("../db")
const lorem = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería
 de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
 No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos,
 quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 
 Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición,
  como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`;

const FAKE_MENU = [
    {
        name: "Hamburguesa con Jamon Serrano y piña",
        description: `La inmejorable integración de la piña con carne es incomparable, pues el resultado
         final de tal combinación bien merece ser probado por exigentes consumidores, pues aporta una jugosidad 
         al conjunto que difícilmente se consigue con otras recetas. Algunos de sus 
         ingredientes son: Carne ternera, Jamón serrano loncheado, Piña natural, Queso Gouda, Aceite de oliva
         virgen, Sal y Pimienta negra molida. Es deliciosa, pruebala !`,
        price: 6,
        recomend_first: true,
        stock: 30,
        is_active: true,
        url_image:
            "https://cecinasllanquihue.cl/blog/wp-content/uploads/2019/04/Res-Jam%C3%B2n-Serrano-y-pi.jpg",
    },
    {
        name: "Hamburguesa a la Ranchera",
        description: `La hamburguesa es un platillo clásico que con el sabor de Ranchera nunca pasa 
        de moda. Aprende cómo hacerla con un toque especial y diferente al mejor estilo Tex-Mex. 
        Te sentirás como todo un vaquero y podrás disfrutar de una hamburguesa muy deliciosa y llena 
        de mucho sabor.
        ¡Será la mejor hamburguesa en muchos ranchos a la redonda! `,
        price: 5,
        recomend_first: false,
        stock: 12,
        is_active: true,
        url_image:
            "https://acortar.link/2hH4v6",
    },
    {
        name: "Hamburguesa Vegetariana",
        description: `Se destaca por su tamaño, pero también por sus ingredientes. Estos menúes 
        incluyen papas fritas y tartas de queso caseras. Son Hamburguesas saludables, deliciosas y muy 
        aclamadas, considerando el auge de dietas vegetarianas y veganas alrededor del mundo. 
        Está es una excelente opción para deleitarte sin culpas, sobre todo si la acompañas con nuestras 
        salsas como las de maní, curry o mango.`,
        price: 5,
        recomend_first: false,
        stock: 10,
        is_active: true,
        url_image:
            "https://acortar.link/rNeEXg",
    },
    {
        name: "Hamburguesa de Pollo",
        description: `¡No te puedes perder esta hamburguesa! Su exquisito sabor y diferente sensación
         al paladar harán que quieras comerla una y otra vez. ¿No nos crees? ¡A comer!`,
        price: 5,
        recomend_first: false,
        stock: 3,
        is_active: true,
        url_image: "https://st2.depositphotos.com/1326558/7501/i/600/depositphotos_75015157-stock-photo-sandwiches-with-chicken-burger-and.jpg",
    },
    {
        name: "Hamburguesas al carbón",
        description: `Las hamburguesas a la parrilla son siempre protagonistas de una barbacoa en familia. 
        Cuando llega la primavera o el verano, siempre apetece comer fuera de casa. Lo mejor es su alto 
        porcentaje de carne magra, ya que así nos aseguramos que queden más jugosas Prueba también con carne 
        de pollo o pavo y disfruta de un día al aire libre con nosotros !.`,
        price: 5,
        recomend_first: false,
        stock: 21,
        is_active: true,
        url_image: "https://img.freepik.com/foto-gratis/hamburguesa-carne-fuego-canamo-madera_140725-7009.jpg?size=338&ext=jpg",
    },
    {
        name: "Hamburguesa con Papas fritas",
        description: `¿Quieres sorprender a tu familia o amigas con unas buenas hamburguesas? Entonces 
        no busques más, pues en aqui tenemos las mejores hamburguesas con papas fritas para una fiesta, 
        reunión o simplemente para una comida diferente, ¡no te las puedes perder!`,
        price: 6,
        recomend_first: false,
        stock: 10,
        is_active: true,
        url_image: "https://st2.depositphotos.com/1006753/7973/i/450/depositphotos_79734360-stock-photo-delicious-hamburger-and-fries.jpg",
    },
    {
        name: "Hamburguesa Hawayana",
        description: `Esta hamburguesa hawaiana es perfecta para los amantes de este delicioso platillo, 
        ya que tiene una jugosa carne acompañada de una piña envuelta en crujiente tocino y bañada en 
        salsa BBQ de nuestra casa. Sencillamente una delicia Tropical`,
        price: 6,
        recomend_first: false,
        stock: 1,
        is_active: true,
        url_image:
            "https://cdn7.kiwilimon.com/ss_secreto/4643/320x320/p_29927.jpg.webp",
    },
    {
        name: "Mini Hamburguesa",
        description: `Estas mini hamburguesas, también conocidas como sliders, son el snack para reuniones fuera 
        de casa con tus amigos y familiares, y especiales para los pequeños. Los sliders son una botana en porción 
        individual, con un pan pequeño de hamburguesa partido a la mitad y relleno de diferentes ingredientes, 
        que usualmente involucran carne y queso. Son Exquisitas`,
        price: 7,
        recomend_first: false,
        stock: 9,
        is_active: true,
        url_image:
            "https://img2.freepng.es/20190904/ybp/transparent-dish-food-cuisine-ingredient-junk-food-5d6f9dc89de022.1956361715675959766467.jpg",
    },
    {
        name: "Hamburguesa Vegana",
        description: `Si no comes carne, pero tienes antojo de este platillo, no te preocupes, pues tenemos una 
        increíble hamburguesa "vegana" que está para chuparse los dedos. Se prepara con frijoles, brócoli, 
        garbanzos, maíz y especias, ¡pruébala, no te arrepentiras!`,
        price: 6,
        recomend_first: false,
        stock: 10,
        is_active: true,
        url_image:
            "https://cdn7.kiwilimon.com/ss_secreto/4643/320x320/p_29933.jpg.webp",
    },
    {
        name: "Menu Veggie Full v3",
        description: lorem,
        price: 10,
        recomend_first: false,
        stock: 9,
        is_active: true,
        url_image:
            "https://img2.freepng.es/20190904/ybp/transparent-dish-food-cuisine-ingredient-junk-food-5d6f9dc89de022.1956361715675959766467.jpg",
    },
    {
        name: "Empanadas Argentinas",
        description: `¡Las empanadas argentinas son comúnmente conocidas por tener un exterior crujiente, 
        combinado con un suave interior. Existen una gran variedad de rellenos que tiene que probar, como 
        las tradicionales de carne y pollo, las de queso con jamón y las deliciosas empanadas caprese, 
        ¡son una chimba! `,
        price: 6,
        recomend_first: false,
        stock: 15,
        is_active: true,
        url_image:
            "https://images.ctfassets.net/n7hs0hadu6ro/40hsqNcqb7NdlOwumTho7K/edc9d7f23a02b6e543f4965b9c17f87c/iStock-521954007.jpg?w=1000&h=667&q=50&fm=webp",
    },
    {
        name: "Hot dog al estilo Americano",
        description: `A la cabeza del universo del "fast food" junto con las hamburguesas, los hot dogs o 
        perritos calientes, si no nos ponemos puristas son seguramente los mayores exponentes de esta comida 
        rápida que, si está bien hecha, puede ser muy buena. Aunque es un "fast food" que a priori no tiene 
        ciencia, vais a ver cómo con un par de nuestros trucos podéis degustar un hot dog que incluso emularían 
        en cualquier "street food" de Nueva York.`,
        price: 6,
        recomend_first: false,
        stock: 3,
        is_active: true,
        url_image:
            "https://i.blogs.es/c28af1/hot_dog-min/1366_2000.jpg",
    },
    {
        name: "Hot Dog latino con Salsa de Aguacate",
        description: `Los hot dogs nunca pasan de moda y se pueden preparar durante todo el año, pero el 
        verano siempre es el mejor tiempo para disfrutarlos. En nuestros paises, los hot dogs se sirven con todo 
        tipo de ingredientes. Cada restaurante de comida rápida o vendedor ambulante tiene su propio tipo 
        de salsas y cada cliente puede escoger lo que prefiera ponerle a su hot dog. ¡Anímate a probar 
        nuestra versión!`,
        price: 6,
        recomend_first: false,
        stock: 10,
        is_active: true,
        url_image: "https://images-gmi-pmc.edge-generalmills.com/7aa1d7ae-04a4-4c1b-b78d-b9bf801523ae.jpg",
    },
    {
        name: "Hot Dog con tocineta",
        description: `Los clásicos no pasan de moda y los perros calientes con tocineta lo saben.
         La tocineta es el ingrediente protagonista, puede ir en trocitos o bien la salchicha envuelta en él 
         para darle un sabor más jugoso. Es ideal para todos los paladares y para comerse en cualquier momento. 
         Acompáñelo con tus aderezos favoritos y listo. ¡No te quedes con el antojo! `,
        price: 5,
        recomend_first: false,
        stock: 5,
        is_active: true,
        url_image:
            "https://images.ctfassets.net/n7hs0hadu6ro/5lp3PjaFms6Bf2NWPES649/26625178d226caf54fa9341e6d0f48e9/hot-dog-con-tocino-crujiente-y-aderezos.jpg?w=1000&h=667&q=50&fm=webp",
    },
    {
        name: "Hot Dog con guacamole, cebolla y jalapeños (México)",
        description: `Con guacamole, cebolla y jalapeños, pero también con champiñones y tocino. Este último viene
         enrollado a la salchicha, para así cocer ambos ingredientes, también enrollar el beicon o 
         tocino a la salchicha y cocinar ambos ingredientes a la vez. También van acompañados de mucho queso.
         Son unas de nuestras especialidades, no te la puedes perder!`,
        price: 6,
        recomend_first: false,
        stock: 10,
        is_active: true,
        url_image:
            "https://www.lavanguardia.com/files/content_image_desktop_filter/uploads/2020/04/20/5ea0a5e470399.jpeg",
    },
    {
        name: "Pizza Cuatro Estaciones",
        description: `Una de las pizzas más populares de Italia, "quattro stagioni", se hace con una combinación
         de tomates, queso mozzarella, champiñones, alcachofas, jamón y aceitunas. Estas "estaciones" 
         están divididas por finas tiras de masa de pizza y los ingredientes son puestos de un modo que representen 
         una estación diferente. Generalmente cada sección es opcional, ideal para los indecisos que quieren 
         probar de todo. Pruebala, Divinas...`,
        price: 8,
        recomend_first: true,
        stock: 8,
        is_active: true,
        url_image:
            "https://www.heraldousa.com/u/fotografias/m/2023/2/9/f768x400-59219_103122_5050.jpg",
    },
    {
        name: "Pizza Margarita",
        description: `Una de las favoritas de nuestros clientes, esa es la pizza Margarita, originaria de Nápoles.
         Elaborada tan solo con tomate, aceite de oliva, albahaca y queso mozzarella, es una de las más replicadas
          en el mundo, y seguro conquistará tu preferencia. Todo un clásico de las pizzas lo ponemos a disposición
           de tu paladar!`,
        price: 8,
        recomend_first: false,
        stock: 13,
        is_active: false,
        url_image: "https://www.heraldousa.com/u/fotografias/m/2023/2/9/f768x400-59224_103127_5050.jpg",
    },
    {
        name: "Pizza 4 quesos",
        description: `Si eres amante del queso no podrás resistirte a una combinación equilibrada de cuatro de
         sus variedades: mozzarella, queso azul, parmesano, provolone. Puedes reemplazarlo en tu pizza con los
          quesos de tu desees. Ideal para degustadores de finos quesos, pruebala es exquisita !`,
        price: 9,
        recomend_first: true,
        stock: 12,
        is_active: true,
        url_image:
            "https://www.bareinternational.cl/wp-content/uploads/sites/4/2022/04/Untitled-design-4-705x510.png",
    },
    {
        name: "Menu Veggie Promo v8",
        description: lorem,
        price: 8,
        recomend_first: true,
        stock: 12,
        is_active: true,
        url_image:
            "https://www.shutterstock.com/image-photo/healthy-salad-bowl-quinoa-tomatoes-260nw-521741356.jpg",
    },
    {
        name: "Hamburguesa de salmón",
        description: `Este plato, está cocinado con una base de pescados y mariscos y pertenece a los platos de
         la cocina Tradicional. Por regla general, se suele servir a los comensales como Segundo plato, es una 
         opción sinigual para los mas exigentes en el mundo de la Hamburguesa, sencillamente extarordinario,
        a comer se ha dicho ! `,
        price: 8,
        recomend_first: false,
        stock: 19,
        is_active: false,
        url_image: "https://static-sevilla.abc.es/media/gurmesevilla/2011/09/hamburguesa-de-salmon.jpg",
    },
];

//(name, description, price, recomend_first, stock, is_active, url_image, ingredArray )
const FAKE_MENU_RELATIONS = [
    {MenuItemId: 1, IngredientId: 29, quantity: 1},
    {MenuItemId: 1, IngredientId: 20, quantity: 1},
    {MenuItemId: 2, IngredientId: 29, quantity: 2},
    {MenuItemId: 2, IngredientId: 20, quantity: 2},
    {MenuItemId: 3, IngredientId: 29, quantity: 3},
    {MenuItemId: 3, IngredientId: 20, quantity: 3},
    {MenuItemId: 4, IngredientId: 20, quantity: 4},
    {MenuItemId: 4, IngredientId: 29, quantity: 4},

    {MenuItemId: 5, IngredientId: 29, quantity: 4},
    {MenuItemId: 5, IngredientId: 21, quantity: 4},
    {MenuItemId: 5, IngredientId: 27, quantity: 4},
    {MenuItemId: 5, IngredientId: 22, quantity: 4},

    {MenuItemId: 6, IngredientId: 29, quantity: 4},
    {MenuItemId: 6, IngredientId: 21, quantity: 4},
    {MenuItemId: 6, IngredientId: 27, quantity: 4},
    {MenuItemId: 6, IngredientId: 22, quantity: 4},
    {MenuItemId: 6, IngredientId: 28, quantity: 1},

    {MenuItemId: 7, IngredientId: 29, quantity: 4},
    {MenuItemId: 7, IngredientId: 21, quantity: 4},
    {MenuItemId: 7, IngredientId: 27, quantity: 4},
    {MenuItemId: 7, IngredientId: 22, quantity: 4},

    {MenuItemId: 8, IngredientId: 29, quantity: 4},
    {MenuItemId: 8, IngredientId: 21, quantity: 4},
    {MenuItemId: 8, IngredientId: 27, quantity: 4},
    {MenuItemId: 8, IngredientId: 22, quantity: 4},
    {MenuItemId: 8, IngredientId: 28, quantity: 1},

    {MenuItemId: 9, IngredientId: 29, quantity: 4},
    {MenuItemId: 9, IngredientId: 21, quantity: 4},
    {MenuItemId: 9, IngredientId: 27, quantity: 4},
    {MenuItemId: 9, IngredientId: 22, quantity: 4},

    {MenuItemId: 10, IngredientId: 29, quantity: 4},
    {MenuItemId: 10, IngredientId: 21, quantity: 4},
    {MenuItemId: 10, IngredientId: 27, quantity: 4},
    {MenuItemId: 10, IngredientId: 22, quantity: 4},
    {MenuItemId: 10, IngredientId: 28, quantity: 1},

    {MenuItemId: 11, IngredientId: 29, quantity: 4},
    {MenuItemId: 11, IngredientId: 21, quantity: 4},
    {MenuItemId: 11, IngredientId: 27, quantity: 4},
    {MenuItemId: 11, IngredientId: 22, quantity: 4},

    {MenuItemId: 12, IngredientId: 29, quantity: 4},
    {MenuItemId: 12, IngredientId: 21, quantity: 4},
    {MenuItemId: 12, IngredientId: 27, quantity: 4},
    {MenuItemId: 12, IngredientId: 22, quantity: 4},
    {MenuItemId: 12, IngredientId: 28, quantity: 1},

    {MenuItemId: 13, IngredientId: 29, quantity: 4},
    {MenuItemId: 13, IngredientId: 21, quantity: 4},
    {MenuItemId: 13, IngredientId: 27, quantity: 4},
    {MenuItemId: 13, IngredientId: 22, quantity: 4},

    {MenuItemId: 14, IngredientId: 29, quantity: 4},
    {MenuItemId: 14, IngredientId: 21, quantity: 4},
    {MenuItemId: 14, IngredientId: 27, quantity: 4},
    {MenuItemId: 14, IngredientId: 22, quantity: 4},
    {MenuItemId: 14, IngredientId: 28, quantity: 1},

    {MenuItemId: 15, IngredientId: 29, quantity: 4},
    {MenuItemId: 15, IngredientId: 21, quantity: 4},
    {MenuItemId: 15, IngredientId: 27, quantity: 4},
    {MenuItemId: 15, IngredientId: 22, quantity: 4},

    {MenuItemId: 16, IngredientId: 29, quantity: 4},
    {MenuItemId: 16, IngredientId: 21, quantity: 4},
    {MenuItemId: 16, IngredientId: 27, quantity: 4},
    {MenuItemId: 16, IngredientId: 22, quantity: 4},
    {MenuItemId: 16, IngredientId: 28, quantity: 1},

    {MenuItemId: 17, IngredientId: 29, quantity: 4},
    {MenuItemId: 17, IngredientId: 21, quantity: 4},
    {MenuItemId: 17, IngredientId: 27, quantity: 4},
    {MenuItemId: 17, IngredientId: 22, quantity: 4},

    {MenuItemId: 18, IngredientId: 29, quantity: 4},
    {MenuItemId: 18, IngredientId: 21, quantity: 4},
    {MenuItemId: 18, IngredientId: 27, quantity: 4},
    {MenuItemId: 18, IngredientId: 22, quantity: 4},
    {MenuItemId: 18, IngredientId: 28, quantity: 1},

    {MenuItemId: 19, IngredientId: 29, quantity: 4},
    {MenuItemId: 19, IngredientId: 21, quantity: 4},
    {MenuItemId: 19, IngredientId: 27, quantity: 4},
    {MenuItemId: 19, IngredientId: 22, quantity: 4},

    {MenuItemId: 20, IngredientId: 29, quantity: 4},
    {MenuItemId: 20, IngredientId: 21, quantity: 4},
    {MenuItemId: 20, IngredientId: 27, quantity: 4},
    {MenuItemId: 20, IngredientId: 22, quantity: 4},
    {MenuItemId: 20, IngredientId: 28, quantity: 1},

]


module.exports = async function () {
    await MenuItem.bulkCreate(FAKE_MENU)
    setTimeout(( async () => {
        await IngredientsMenuItems.bulkCreate(FAKE_MENU_RELATIONS)
    }), 700);

}