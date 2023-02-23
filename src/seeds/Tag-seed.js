const { Tag } = require('../db');

const FAKE_TAGS = [
    {name: "Vegetariano"},
    {name: "Para Compartir"},
    {name: "Familiar"},
    {name: "Pizza"},
    ]

module.exports = async function() {
    await Tag.bulkCreate(FAKE_TAGS);
};