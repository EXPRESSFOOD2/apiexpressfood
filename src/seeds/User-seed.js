const { User, Password, UsersRoles, Store } = require('../db');

const FAKE_USERS = [
    { is_active: true, name: "Grupo", last_name: "Siete", account_name: "test123",
	email: "a@a.com", secret: "AJO6NcjN", phone: "123456789", activation_token: "gJYcjocs17VE5YXL",
	profile_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" },
    { is_active: true, name: "Siete", last_name: "SuperGrupo", account_name: "test1234",
	email: "q@q.com", secret: "AJO6NcjN", phone: "1234567890", activation_token: "gJYcjocs17VE5YXL",
	profile_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" },
    ];
const FAKE_ROLES = [
    {RoleId: 1, UserId:1 },
    {RoleId: 1, UserId:2 },
]
const FAKE_PSWD = [
    { user_id: 1, password: "123456AzAJO6NcjNhasheada", is_active: true, password_question: "Invierno o verano",
    password_answer: "Aprobamos el PF, garantizado" },
    { user_id: 2, password: "123456nNAJO6NcjNhasheada", is_active: true, password_question: "Invierno o verano",
    password_answer: "Aprobamos el PF, garantizado" }
]

module.exports = async function() {
    await User.bulkCreate(FAKE_USERS);

    setTimeout(( async () => {
        await UsersRoles.bulkCreate(FAKE_ROLES);
    }), 700);

    setTimeout(( async () => {
        await Password.bulkCreate(FAKE_PSWD)
    }), 1200);

};