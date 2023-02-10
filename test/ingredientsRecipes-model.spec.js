const { conn } = require("../src/db");
const { Ingredient, Recipe } = conn.models;

xdescribe("IngredientsRecipes Model", () => {
    beforeAll(async () => {
        await conn.sync({ force: true });
    });

    describe("Part Three", () => {
        it("Should ")
    })
})