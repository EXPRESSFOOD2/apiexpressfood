const{ Tag } = require("../../db")

const tagsGetController = async (store_id) => {
    const result = await Tag.fingAll({where: {store_id}})
    return result;
}

module.exports = {
    tagsGetController,
}

