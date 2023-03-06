const { Review } = require('../db');


const fakeReviews = [
    {rating: 2, MenuItemId: 1 },
    {rating: 3, MenuItemId: 1 },
    {rating: 3, MenuItemId: 1 },
    {rating: 2, MenuItemId: 1 },
    {rating: 3, MenuItemId: 1 },
    {rating: 2, MenuItemId: 2 },
    {rating: 3, MenuItemId: 2 },
    {rating: 3, MenuItemId: 2 },
    {rating: 3, MenuItemId: 2 },
    {rating: 2, MenuItemId: 2 },
    {rating: 3, MenuItemId: 2 },
    {rating: 5, MenuItemId: 3 },
    {rating: 5, MenuItemId: 3 },
    {rating: 5, MenuItemId: 3 },
    {rating: 4, MenuItemId: 3 },
    {rating: 5, MenuItemId: 3 },
    {rating: 5, MenuItemId: 3 },
    {rating: 5, MenuItemId: 3 },
    {rating: 5, MenuItemId: 3 },
    {rating: 4, MenuItemId: 3 },
    {rating: 5, MenuItemId: 3 },
]

module.exports = async function() {
    setTimeout(() => {
        Review.bulkCreate(fakeReviews)
      }, 700)
}