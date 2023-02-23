const { Recipe, Ingredient, IngredientsRecipes } = require('../db');
/*

*/
const FAKE_RECIPE = [
    {   name: "Medallon de Carne 160gr Especial",
        details: "Medallon de carne especial",
        produced_amount: 8,
        type_measure: "un" },
    ]

module.exports = async function() {
    await Recipe.create({   name: "Masa de Pizza",
    details: `
    Paso 1 :
    Hacer con la harina una corona con hueco en el centro para colocar la levadura desmenuzada y la cucharada de aceite. Por los lados externos de la corona colocar sal (si toca la levadura, la daña).
    Paso 2 :
    Añadir poco a poco agua tibia dentro de la corona, y con los dedos comenzar a amasar hasta conseguir una masa lisa y sedosa. Es muy importante el amasado con la palma de la mano que permite aire en la mezcla.
    Paso 3 :
    Al conseguir una masa completamente integrada, dejar reposar hasta que doble su volumen.
    Paso 4 :
    Sacar el aire y estirar para colocar en el molde enmantequillado de pizza. Dejar leudar 15 minutos más, mientras se calienta el horno.`,
    produced_amount: 1070,
    type_measure: "gr" });
    await Ingredient.create({name: "Masa de Pizza", layer: 1, type_measure: "gr", ingredients_all: JSON.stringify([

    {id: 2, name: "Harina", layer: 0, amount: 0.5128},
    {id: 15, name: "Levadura Fresca", layer: 0, amount: 0.0467},
    {id: 1, name: "Agua", layer: 0, amount: 0.3364},
    {id: 5, name: "Sal", layer: 0, amount: 0.0186},
    {id: 16, name: "Aceite de Oliva", layer: 0, amount: 0.0373}])})

    await Recipe.create({   name: "Medallon de Carne 120gr",
    details: "Mezclar todo y a disfrutar",
    produced_amount: 10,
    type_measure: "un" })
    await Ingredient.create({name: "Medallon de Carne 120gr", layer: 1, type_measure: "gr", ingredients_all: JSON.stringify([
        {id: 10, name: "Carne Molida", layer: 0, amount: 80},
        {id: 3, name: "Huevo", layer: 0, amount: 0.6},
        {id: 7, name: "Cebolla", layer: 0, amount: 26},
        {id: 5, name: "Sal", layer: 0, amount: 0.2},
        {id: 8, name: "Pimienta", layer: 0, amount: 0.6},
        {id: 2, name: "Harina", layer: 0, amount: 12.6}

    ])})

    await Recipe.create({ name: "Ensalada DeLaCasa",
    details: "Super Ensalada",
    produced_amount: 10,
    type_measure: "un" })

    await Ingredient.create(
        {name: "Ensalada DeLaCasa", layer: 1, type_measure: "un", ingredients_all: JSON.stringify([
        {id: 8, name: "Tomate", layer: 0, amount: 100},
        {id: 3, name: "Huevo", layer: 0, amount: 1},
        {id: 7, name: "Cebolla", layer: 0, amount: 70},
        {id: 5, name: "Sal", layer: 0, amount: 0.2},
        {id: 10, name: "Pimienta", layer: 0, amount: 0.2},
        {id: 9, name: "Lechuga", layer: 0, amount: 180},
        {id: 17, name: "Aceite de Oliva", layer:0, amount: 40}
    ])})
    await Recipe.create({   name: "Acuoso",
    details: ` algo `,
    produced_amount: 1,
    type_measure: "un", store_id: "abc" });
    await Ingredient.create(
        {name: "Acuoso", layer: 1, type_measure: "un", ingredients_all: JSON.stringify([
    {id: 23, name: "Agua", layer: 0, amount: 0.0186},
    {id: 24, name: "Agua Con Gas", layer: 0, amount: 0.0373} ]), store_id: "abc"})

    await IngredientsRecipes.bulkCreate([
        {RecipeId: 1, IngredientId: 2, waste_rate: 3},
        {RecipeId: 1, IngredientId: 16, waste_rate: 0},
        {RecipeId: 1, IngredientId: 1, waste_rate: 0},
        {RecipeId: 1, IngredientId: 5, waste_rate: 0},
        {RecipeId: 1, IngredientId: 17, waste_rate: 0},

        {RecipeId: 2, IngredientId: 12, waste_rate: 0},
        {RecipeId: 2, IngredientId: 3, waste_rate: 0},
        {RecipeId: 2, IngredientId: 7, waste_rate: 5},
        {RecipeId: 2, IngredientId: 5, waste_rate: 0},
        {RecipeId: 2, IngredientId: 10, waste_rate: 0},
        {RecipeId: 2, IngredientId: 2, waste_rate: 0},

        {RecipeId: 7, IngredientId: 8, waste_rate: 8},
        {RecipeId: 7, IngredientId: 3, waste_rate: 0},
        {RecipeId: 7, IngredientId: 7, waste_rate: 8},
        {RecipeId: 7, IngredientId: 5, waste_rate: 0},
        {RecipeId: 7, IngredientId: 10, waste_rate: 0},
        {RecipeId: 7, IngredientId: 9, waste_rate: 12},
        {RecipeId: 7, IngredientId: 17, waste_rate: 0},
    ])

};

