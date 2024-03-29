const {
  getStoreIdByUserId,
  getStoreIDByStoreName,
} = require("../controllers/HashFunction/security");
const {
  orderPatchController,
} = require("../controllers/order/order-patch_controller");
const {
  orderGetController,
  orderGetByIdController,
  orderGetBalanceController,
} = require("../controllers/order/order-get_controller");
const {
  orderGetPredictionController,
} = require("../controllers/order/order-predict_controller");
const { validateToken } = require("../controllers/token/token_controller");
process.env.HEADERS_STORE_ORIGIN_LOCAL
  ? (process.env.HEADERS_STORE_ORIGIN_DEPLOY =
      process.env.HEADERS_STORE_ORIGIN_LOCAL)
  : null;
process.env.HEADERS_CUSTOMER_ORIGIN_LOCAL
  ? (process.env.HEADERS_CUSTOMER_ORIGIN_DEPLOY =
      process.env.HEADERS_CUSTOMER_ORIGIN_LOCAL)
  : null;

const processOrderPrediction = async (req, res) => {
  try {
    //! Remastered !//
    const origin = req.headers.origin;
    let store_id = "";

    const token = req.headers.token;
    const user_id = req.headers.id;

    const { toPredict } = req.body;
    //! Validar si todos los elem son del mismo store
    const result = await orderGetPredictionController(toPredict);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const processOrderGetBalance = async (req, res) => {
  try {
    //! Remastered !//
    const origin = req.headers.origin;
    console.log(origin);
    let store_id = "";

    const token = req.headers.token;
    const user_id = req.headers.id;

    console.log(store_id);
    const { startDate, endDate } = req.body;
    const result = await orderGetBalanceController(
      store_id,
      startDate,
      endDate
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const processOrderPatch = async (req, res) => {
  try {
    //! Remastered !//
    const origin = req.headers.origin;
    let store_id = "";

    const token = req.headers.token;
    const user_id = req.headers.id;

    const { id, status } = req.body;
    //! Validar Algo

    const result = await orderPatchController(id, store_id, status);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const processOrderGet = async (req, res) => {
  try {
    //! Remastered !//
    const origin = req.headers.origin;
    let store_id = "";
    let user_email = "";

    const token = req.headers.token;
    const user_id = req.headers.id;

    const short_name = req.headers.storename;
    user_email = req.headers.user_email;

    store_id = await getStoreIDByStoreName(short_name);

    const result = user_email.length
      ? await orderGetController(store_id, user_email)
      : await orderGetController(store_id);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
const processOrderGetById = async (req, res) => {
  try {
    // //! Remastered !//
    // const h = req.headers
    // const origin = req.headers.origin;
    // let store_id = "f3bc0474-620c-429d-a46c-df2460c7725a";
    // let user_email = "";
    // console.log(h +"h")
    // console.log(origin +"")
    // if (origin === process.env.HEADERS_STORE_ORIGIN_DEPLOY) {
    //     const token = req.headers.token;
    //     const user_id = req.headers.id;
    //     if (!token) throw Error('AccessToken doesnt exist');
    //     if (!await validateToken(user_id, token)) throw Error("Token is invalid or expired, Please log in again.")
    //     ///
    // } else if (origin === process.env.HEADERS_CUSTOMER_ORIGIN_DEPLOY) {
    //     const short_name = req.headers.storename;
    //     user_email = req.headers.user_email;

    //     store_id = await getStoreIDByStoreName(short_name);
    // }
    // else throw new Error("Access Denied")
    const store_id = "f3bc0474-620c-429d-a46c-df2460c7725a";
    const email = "gibsonavilan@gmai.com";
    const { id } = req.params;
    const result = await orderGetByIdController(id, store_id, email);
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  processOrderPatch,
  processOrderGet,
  processOrderGetById,
  processOrderGetBalance,
  processOrderPrediction,
};
