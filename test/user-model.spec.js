const { conn } = require("../src/db");
const { User } = conn.models;
const {
  INVALID_user_NAME,
  INVALID_PRODUCED_AMOUNT,
  INVALID_NAME,
  INVALID_LAST_NAME,
  INVAME_NAME_OR_ACCOUNT,
  INVALID_ACCOUNT_NAME,
  INVALID_EMAIL_EMPTY,
} = require("../src/models/utils/User-ErrorMSGs");

xdescribe("User Model", () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });
  describe("Part One", () => {
    it("Should not create User if name is not send", async () => {
      expect.assertions(1);
      try {
        await User.create({
          last_name: "kamarasov",
          account_name: "alexrasov45",
          email: "a_kararasov45@gmail.com",
        });
      } catch (error) {
        expect(error.message).toEqual("notNull Violation: " + INVALID_NAME);
      }
    });
    it("Should not create User if name is send Empty", async () => {
      expect.assertions(1);
      try {
        await User.create({
          name: "",
          last_name: "kamarasov",
          account_name: "alexrasov45",
          email: "a_kararasov45@gmail.com",
        });
      } catch (error) {
        expect(error.message).toEqual("notNull Violation: " + INVALID_NAME);
      }
    });
    it("Should not create User if name is send with just Blanks", async () => {
      expect.assertions(1);
      try {
        await User.create({
          name: "    ",
          last_name: "kamarasov",
          account_name: "alexrasov45",
          email: "a_kararasov45@gmail.com",
        });
      } catch (error) {
        expect(error.message).toEqual("notNull Violation: " + INVALID_NAME);
      }
    });
    it("Should not create User if last_name is not send", async () => {
      expect.assertions(1);
      try {
        await User.create({
          name: "alexander",
          account_name: "alexrasov45",
          email: "a_kararasov45@gmail.com",
        });
      } catch (error) {
        expect(error.message).toEqual("Validation error: " + INVALID_LAST_NAME);
      }
    });
  });
  it("Should not create User if last_name is send Empty", async () => {
    expect.assertions(1);
    try {
      await User.create({
        name: "alexander",
        last_name: "",
        account_name: "alexrasov45",
        email: "a_kararasov45@gmail.com",
      });
    } catch (error) {
      expect(error.message).toEqual("Validation error: " + INVALID_LAST_NAME);
    }
  });

  it("Should not create User if last_name is  send with just Blanks", async () => {
    expect.assertions(1);
    try {
      await User.create({
        name: "alexander",
        last_name: "    ",
        account_name: "alexrasov45",
        email: "a_kararasov45@gmail.com",
      });
    } catch (error) {
      expect(error.message).toEqual("Validation error: " + INVALID_LAST_NAME);
    }
  });

  it("Should not create User if account_name  is not send", async () => {
    expect.assertions(1);
    try {
      await User.create({
        name: "alexander",
        last_name: "kamarasov",
        email: "a_kararasov45@gmail.com",
      });
    } catch (error) {
      expect(error.message).toEqual(
        "Validation error: " + INVALID_ACCOUNT_NAME
      );
    }
  });
  it("Should not create User if email is not send", async () => {
    expect.assertions(1);
    try {
      await User.create({
        nname: "alexander",
        last_name: "kamarasov",
        account_name: "alexrasov45",
      });
    } catch (error) {
      expect(error.message).toEqual("Validation error: " + INVALID_EMAIL_EMPTY);
    }
  });
  it("Should create User", async () => {
    //expect.assertions(1);
    let user = await User.create({
      name: "alexander",
      last_name: "kamarasov",
      account_name: "alexrasov45",
      email: "a_kararasov45@gmail.com",
    });
    expect(user.toJSON()).toHaveProperty("id", 1);
    expect(user.toJSON()).toHaveProperty("name", "alexander");
    expect(user.toJSON()).toHaveProperty("last_name", "kamarasov");
    expect(user.toJSON()).toHaveProperty(" account_name", "alexrasov45");
    expect(user.toJSON()).toHaveProperty(" email", "a_kararasov45");
  });

  it("Should not create User if the name alredy exist", async () => {
    //expect.assertions(1);
    try {
      await User.create({
        name: "andrey",
        last_name: "silvano",
        account_name: "alexrasov45",
        email: "silvano_Andrey91@gmail.com",
      });
    } catch (error) {
      expect(error.message).toEqual(
        "llave duplicada viola restricción de unicidad «users_account_name_key»"
      );
    }
  });
});
