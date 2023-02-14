const { User, Password, Role, UsersRoles } = require('../db');
const { generateSecret, hashFunction } = require("./HashFunction/security");

const userPostController = async (name, last_name, account_name, password, email, phone, password_question, password_answer) => {
   try {
        //! TEST
        let role = await Role.create({name: "Manager", description: "Business Manager"})
        //! End Test
        const secret = generateSecret();
        const hashedPass = hashFunction(password, secret);

        const newUser = await User.create({name, last_name, account_name, password, email, secret, phone})
        let user_id = newUser.id;
        //* CONSIDERA QUE LA CUENTA ES ACTIVA
        //* Implementar activación por EMAIL
        await UsersRoles.create({RoleId: role.id, UserId: user_id});
        await Password.create({user_id, password: hashedPass, password_question, password_answer})
        return newUser;
    } catch (error) {
        return error.message;
    }
    
}

module.exports = {
    userPostController,
}