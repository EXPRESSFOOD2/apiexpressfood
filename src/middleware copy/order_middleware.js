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
    let store_id = "";

    const token = req.headers.token;
    const user_id = req.headers.id;

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
    //! Remastered !//
    const origin = req.headers.origin;
    let store_id = "";
    let user_email = "";

    const token = req.headers.token;
    const user_id = req.headers.id;

    const short_name = req.headers.storename;
    user_email = req.headers.user_email;

    store_id = await getStoreIDByStoreName(short_name);

    const { id } = req.params;
    const result = await orderGetByIdController(id, store_id, email);
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
