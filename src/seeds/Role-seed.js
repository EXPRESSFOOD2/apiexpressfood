const { Role } = require('../db');

const FAKE_ROLES = [
    {name: "Customer", description: "uno cualqioera em cualquier lugar"},
    {name: "Kitchener", description: "uno cualqioera em cualquier lugar"},
    {name: "Cashier", description: "uno cualqioera em cualquier lugar"},
    {name: "Manager", description: "uno cualqioera em cualquier lugar"},
    
    ]

module.exports = async function() {
    await Role.bulkCreate(FAKE_ROLES);
};