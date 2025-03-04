const categoryController = require('./../controllers/categoryController')


exports.categoryRouter = (app) => {
    app.post('/api/category', categoryController.create)
}