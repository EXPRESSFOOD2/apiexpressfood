const { Tag } = require('../db');

const id = "f3bc0474-620c-429d-a46c-df2460c7725a"
const id2 = "eb311a9e-7c64-4c3d-bce3-1ce5e474e532"

const fakeTags = [
    {name: "familiar", store_id: id},
    {name: "Vegano", store_id: id2},
    {name: "para compartir", store_id: id},
    {name: "Vegetariano", store_id: id2},
    {name: "Pizzas", store_id: id},
    {name: "Naturista", store_id: id},
    {name: "Naturista", store_id: id2},
    {name: "Empanadas", store_id: id},
    {name: "Organico", store_id: id2},
    {name: "Recomendacion nuestra", store_id: id},
]

module.exports = async function() {
    setTimeout(() => {
        Tag.bulkCreate(fakeTags)
      }, 200)
}