const categoryController = require('./../controllers/categoryController')
const authController = require('./../controllers/authController')

exports.categoryRouter = (app)=>{
    app.post('/api/category',authController.authorization, authController.restrictTo('admin'), categoryController.create)
    app.get('/api/category',authController.authorization, authController.restrictTo('admin'), categoryController.findAll)
    app.get('/api/category/:id',authController.authorization, authController.restrictTo('admin'), categoryController.findOne)
    app.patch('/api/category/:id',authController.authorization, authController.restrictTo('admin'), categoryController.update)
    app.delete('/api/category/:id',authController.authorization, authController.restrictTo('admin'), categoryController.remove)
}