const { TagsMenuItems } = require('../db');

const FAKE_ASSOCIATIONS = [
    {TagId: 1, MenuItemId: 2},
    {TagId: 1, MenuItemId: 4},
    {TagId: 1, MenuItemId: 6},
    {TagId: 1, MenuItemId: 8},
    {TagId: 1, MenuItemId: 10},
    {TagId: 1, MenuItemId: 12},
    {TagId: 1, MenuItemId: 14},
    {TagId: 1, MenuItemId: 16},
    {TagId: 1, MenuItemId: 18},
    {TagId: 1, MenuItemId: 20},

    {TagId: 2, MenuItemId: 1},
    {TagId: 2, MenuItemId: 3},
    {TagId: 2, MenuItemId: 5},
    {TagId: 2, MenuItemId: 7},
    {TagId: 2, MenuItemId: 9},
    {TagId: 2, MenuItemId: 11},
    {TagId: 2, MenuItemId: 13},
    {TagId: 2, MenuItemId: 15},
    {TagId: 2, MenuItemId: 17},
    {TagId: 2, MenuItemId: 19},

    {TagId: 3, MenuItemId: 1},
    {TagId: 3, MenuItemId: 2},
    {TagId: 3, MenuItemId: 5},
    {TagId: 3, MenuItemId: 6},
    {TagId: 3, MenuItemId: 9},
    {TagId: 3, MenuItemId: 10},
    {TagId: 3, MenuItemId: 13},
    {TagId: 3, MenuItemId: 14},
    {TagId: 3, MenuItemId: 17},
    {TagId: 3, MenuItemId: 19},

    {TagId: 4, MenuItemId: 20},
    {TagId: 4, MenuItemId: 19},
    {TagId: 4, MenuItemId: 18},
    {TagId: 4, MenuItemId: 17},
    {TagId: 4, MenuItemId: 16},
    {TagId: 4, MenuItemId: 15},
    {TagId: 4, MenuItemId: 14},
    {TagId: 4, MenuItemId: 13},
    {TagId: 4, MenuItemId: 12},
    {TagId: 4, MenuItemId: 11},
    ]

module.exports = async function() {
    setTimeout(( async () => {
        await TagsMenuItems.bulkCreate(FAKE_ASSOCIATIONS)
    }), 1500);
};