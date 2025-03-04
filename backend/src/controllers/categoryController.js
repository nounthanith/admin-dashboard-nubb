const Category = require("../models/Category")


exports.create = async (req, res) => {
    try {
        const { name } = req.body;
        const doc = await Category.create(name)
        res.status(200).json({
            status : 'Success',
            data : doc
        })
    } catch (error) {
        res.status(400).json({
            status : 'Error',
            message : error.message
        })
    }
}