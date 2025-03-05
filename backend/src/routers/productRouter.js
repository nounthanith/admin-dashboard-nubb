const productController = require('../controllers/productController')
const { upload } = require('../utils/uploadFile')
const authController = require('./../controllers/authController')

exports.productRouter = (app)=>{
    app.post('/api/product',authController.authorization, authController.restrictTo('admin'), upload.single('imageUrl'), productController.create)
    app.get('/api/product',authController.authorization, productController.findAll)
    app.get('/api/product/:id',authController.authorization, productController.findOne)
    app.patch('/api/product/:id',authController.authorization, authController.restrictTo('admin'), upload.single('imageUrl'), productController.update)
    app.delete('/api/product/:id',authController.authorization, authController.restrictTo('admin'), productController.remove)
}