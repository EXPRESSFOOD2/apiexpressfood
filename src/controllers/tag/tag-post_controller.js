const{ Tag } = require("../../db")

const tagsPostController = async (name, store_id) => {
    const result = await Tag.create({name, store_id})
    return result
}

module.exports = {
    tagsPostController,
}