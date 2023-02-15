const { conn } = require("../src/db");
const { MenuItem } = conn.models;
const { ERROR_NAME, ERROR_PRICE, ERROR_CREATE_NEW_MENU_ITEM} = require("../src/models/utils/MenuItem-ErrorMSGs");

describe("MenuItem Model", () => {
    beforeAll(async () => {
        await conn.sync({ force: true });
    });
    describe("Part One", () => {
        it("Should not create menu if name is not send", async () => {
            expect.assertions(1);
            try {
                await MenuItem.create({description: "carne , ceboola , tomate , lechuga , tocineta , jamon , queso"})
            } catch (error) {
                expect(error.message).toEqual("notNull Violation: "+ERROR_NAME);
            }
        });
        it("Should not create Menu if name is send Empty", async () => {
            expect.assertions(1);
            try {
                await MenuItem.create({name: "", description: "carne , ceboola , tomate , lechuga , tocineta , jamon , queso"})
            } catch (error) {
                expect(error.message).toEqual("Validation error: "+ERROR_NAME);
            }
        });

        it("Should not create Menu if name is send with just Blanks", async () => {
            expect.assertions(1);
            try {
                await MenuItem.create({name: "    ", description: "La mejor receta del mundo"})
            } catch (error) {
                expect(error.message).toEqual("Validation error: "+ERROR_NAME);
            }
        });
        it("Should not create Menu if price is not a Numeric value", async () => {
            expect.assertions(1);
            try {
                await MenuItem.create({name: "Hamburguesa", description: "carne , ceboola , tomate , lechuga , tocineta , jamon , queso", price: "a"})
            } catch (error) {
                expect(error.message).toEqual("Validation error: "+ERROR_PRICE.PRICE_IS_STRING);
            }
        });
        it("Should not create Recipe if produced_amount is lower that 0", async () => {
            expect.assertions(1);
            try {
                await MenuItem.create({name: "Hamburguesa", description: "carne , ceboola , tomate , lechuga , tocineta , jamon , queso", price: - 0.2})
            } catch (error) {
                expect(error.message).toEqual("Validation error: "+ERROR_PRICE.ERROR_PRICE_LESS_0)
            }
        });
        it("Should create Recipe", async () => {
            //expect.assertions(1);
            let product = await MenuItem.create({name: "Hamburguesa ranchera", description: "carne , ceboola , tomate , lechuga , tocineta , jamon , queso"})
            expect(product.toJSON()).toHaveProperty("id", 1);
            expect(product.toJSON()).toHaveProperty("name", "Hamburguesa ranchera");
            expect(product.toJSON()).toHaveProperty("description", "carne , ceboola , tomate , lechuga , tocineta , jamon , queso");
            expect(product.toJSON()).toHaveProperty("price", 100);
        });

        it("Should not create Recipe if the name alredy exist", async () => {
            //expect.assertions(1);
            try {
                await MenuItem.create({name: "Hamburguesa ranchera"})
            } catch (error) {
                expect(error.message).toEqual(ERROR_CREATE_NEW_MENU_ITEM);
            }
        });


    })
})
