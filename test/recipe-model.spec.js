const { conn } = require("../src/db");
const { Recipe } = conn.models;
const { INVALID_RECIPE_NAME, INVALID_PRODUCED_AMOUNT } = require("../src/models/utils/Recipe-ErrorMSGs");

xdescribe("Recipe Model", () => {
    beforeAll(async () => {
        await conn.sync({ force: true });
    });
    describe("Part One", () => {
        it("Should not create Recipe if name is not send", async () => {
            expect.assertions(1);
            try {
                await Recipe.create({details: "La mejor receta del mundo"})
            } catch (error) {
                expect(error.message).toEqual("notNull Violation: "+INVALID_RECIPE_NAME);
            }
        });
        it("Should not create Recipe if name is send Empty", async () => {
            expect.assertions(1);
            try {
                await Recipe.create({name: "", details: "La mejor receta del mundo"})
            } catch (error) {
                expect(error.message).toEqual("Validation error: "+INVALID_RECIPE_NAME);
            }
        });

        it("Should not create Recipe if name is send with just Blanks", async () => {
            expect.assertions(1);
            try {
                await Recipe.create({name: "    ", details: "La mejor receta del mundo"})
            } catch (error) {
                expect(error.message).toEqual("Validation error: "+INVALID_RECIPE_NAME);
            }
        });
        it("Should not create Recipe if produced_amount is not a Numeric value", async () => {
            expect.assertions(1);
            try {
                await Recipe.create({name: "Hamburguesa", details: "La mejor receta del mundo", produced_amount: "a"})
            } catch (error) {
                expect(error.message).toEqual("Validation error: "+INVALID_PRODUCED_AMOUNT);
            }
        });
        it("Should not create Recipe if produced_amount is lower that 1", async () => {
            expect.assertions(1);
            try {
                await Recipe.create({name: "Hamburguesa", details: "La mejor receta del mundo", produced_amount: 0.3})
            } catch (error) {
                expect(error.message).toEqual("Validation error: Validation min on produced_amount failed");
            }
        });
        it("Should create Recipe", async () => {
            //expect.assertions(1);
            let recipe = await Recipe.create({name: "Hamburguesa test", details: "La mejor receta del mundo"})
            expect(recipe.toJSON()).toHaveProperty("id", 1);
            expect(recipe.toJSON()).toHaveProperty("name", "Hamburguesa test");
            expect(recipe.toJSON()).toHaveProperty("details", "La mejor receta del mundo");
            expect(recipe.toJSON()).toHaveProperty("produced_amount", 1);
        });

        it("Should not create Recipe if the name alredy exist", async () => {
            //expect.assertions(1);
            try {
                await Recipe.create({name: "Hamburguesa", details: "La segunda mejor receta del mundo"})
            } catch (error) {
                expect(error.message).toEqual("llave duplicada viola restricción de unicidad «Recipes_name_key»");
            }
        });


    })
})
