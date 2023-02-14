const { conn, Op } = require("../db");
const { User } = conn.models;
const { INVAME_NAME_OR_ACCOUNT, EMAIL_REGEX, INVALID_NAME, INVALID_LAST_NAME,
        ALPHA_REGEX, MIN_PASS_LENGTH, PASSWORD_TO_SHORT, INVALID_EMAIL,
        MIN_QUESTION_LENGTH, INVALID_QUESTION, MIN_ANSWER_LENGTH, INVALID_ANSWER, INVALID_LOGIN_PARAMS } = require("../models/utils/User-ErrorMSGs")
const { userPostController } = require("../controllers/user-post-controller")
const { userLoginController } = require("../controllers/user-get-login-controller")

const isExistingUser = async (account_name, email) => {
    let result = await User.findAll({where: {[Op.or]: [
        { account_name },
        { email }
      ]}})
    return result.length > 0 ? true : false;
}

const processUserPost = async (req,res) => {
    const { name, last_name, account_name, password, email, phone, password_question, password_answer } = req.body;
    try {
        //validateUser(name, last_name, account_name, password, email, phone);
        if (await isExistingUser(account_name, email)) throw Error(INVAME_NAME_OR_ACCOUNT);
        if (!name.trim() || !ALPHA_REGEX.test(name)) throw Error( INVALID_NAME);
        if (!last_name.trim().length || !ALPHA_REGEX.test(last_name)) throw Error( INVALID_LAST_NAME);
        if (password.trim().length < MIN_PASS_LENGTH ) throw Error(PASSWORD_TO_SHORT);
        if (!EMAIL_REGEX.test(email)) throw Error(INVALID_EMAIL);
        if (!password_question || password_question.length < MIN_QUESTION_LENGTH) throw Error(INVALID_QUESTION);
        if (!password_answer || password_answer.length < MIN_ANSWER_LENGTH) throw Error(INVALID_ANSWER);
        //! Create USER
        const result = await userPostController(name, last_name, account_name, password, email, phone, password_question, password_answer)
        return res.status(200).json( result )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const processUserLogin = async (req,res) => {
    const {account_name, password } = req.body;
    try {
        if (!account_name || !password) throw Error(INVALID_LOGIN_PARAMS);
        const result = await userLoginController(account_name, password);
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

}

module.exports = {
    processUserPost,
    processUserLogin
}