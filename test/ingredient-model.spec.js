const { conn } = require("../src/db");
const { Ingredient } = conn.models;
const { INVALID_INGREDIENT_NAME, NOT_A_NUMERIC } = require("../src/models/utils/Ingredient-ErrorMSGs");
const { MEASURES_SHORT } = require("../src/models/utils/constants")
xdescribe("Ingredient Model", () => {
    beforeAll(async () => {
        await conn.sync({ force: true });
    });
    describe("Part Two", () => {
        it("Should not create Ingredient if name is not send", async () => {
            expect.assertions(1);
            try {
                await Ingredient.create({layer: 0, type_measure: MEASURES_SHORT[0] })
            } catch (error) {
                expect(error.message).toEqual("notNull Violation: "+INVALID_INGREDIENT_NAME);
            }
        });
        it("Should not create Ingredient if name is send Empty", async () => {
            expect.assertions(1);
            try {
                await Ingredient.create({name: "", layer: 0, type_measure: MEASURES_SHORT[0] })
            } catch (error) {
                expect(error.message).toEqual("Validation error: "+INVALID_INGREDIENT_NAME);
            }
        });

        it("Should not create Ingredient if name is send with just Blanks", async () => {
            expect.assertions(1);
            try {
                await Ingredient.create({name: "     ", layer: 0, type_measure: MEASURES_SHORT[0] })
            } catch (error) {
                expect(error.message).toEqual("Validation error: "+INVALID_INGREDIENT_NAME);
            }
        });

        it("Should not create Ingredient if layer is not an Integer value", async () => {
            expect.assertions(1);
            try {
                await Ingredient.create({name: "Papa", layer: 0.1 , type_measure: MEASURES_SHORT[0] })
            } catch (error) {
                expect(error.message).toEqual("la sintaxis de entrada no es válida para tipo integer: «0.1»");
            }
        });

        it("Should not create Ingredient if layer is lower that 0", async () => {
            expect.assertions(1);
            try {
                await Ingredient.create({name: "Papa", layer: -1 , type_measure: MEASURES_SHORT[0] })
            } catch (error) {
                expect(error.message).toEqual("Validation error: Validation min on layer failed");
            }
        });

        it("Should not create Ingredient if layer is not Numeric", async () => {
            expect.assertions(1);
            try {
                await Ingredient.create({name: "Papa", layer: "a" , type_measure: MEASURES_SHORT[0] })
            } catch (error) {
                expect(error.message).toEqual("Validation error: "+NOT_A_NUMERIC);
            }
        });

        it("Should create Ingredient", async () => {
            //expect.assertions(1);
            let ingred = await Ingredient.create({name: "Papa", layer: 0 , type_measure: MEASURES_SHORT[0] })
            expect(ingred.toJSON()).toHaveProperty("id", 1);
            expect(ingred.toJSON()).toHaveProperty("name", "Papa");
            expect(ingred.toJSON()).toHaveProperty("layer", 0);
            expect(ingred.toJSON()).toHaveProperty("type_measure", "un");

            let ingred2 = await Ingredient.create({name: "Papa Negra"})
            expect(ingred2.toJSON()).toHaveProperty("id", 2);
            expect(ingred2.toJSON()).toHaveProperty("name", "Papa Negra");
            expect(ingred2.toJSON()).toHaveProperty("layer", 0);
            expect(ingred2.toJSON()).toHaveProperty("type_measure", "un");
        });

        it("Should not create Ingredient if the name alredy exist", async () => {
            try {
                await Ingredient.create({name: "Papa Negra"})
            } catch (error) {
                expect(error.message).toEqual("llave duplicada viola restricción de unicidad «Ingredients_name_key»");
            }
        });


    })
})
