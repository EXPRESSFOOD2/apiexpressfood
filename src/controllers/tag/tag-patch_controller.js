const{ Tag } = require("../../db")

const tagsPatchController = async (name, id, store_id) => {
    const result = await Tag.update({name, where: {id, store_id}})
    return result
}

module.exports = {
    tagsPatchController,
}