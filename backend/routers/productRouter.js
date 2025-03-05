const productController = require('../controllers/productController')
const authController = require('../controllers/authController')
const { upload } = require('../utils/uploadFile')

exports.productRouter = (app)=>{
    app.post('/api/product',authController.authorization, authController.restrictTo('admin'), upload.single('imageURL'), productController.create)
    app.get('/api/product',authController.authorization, productController.findAll)
    app.get('/api/product/:id',authController.authorization, productController.findOne)
    app.patch('/api/product/:id',authController.authorization, authController.restrictTo('admin'), upload.single('imageURL'), productController.update)
    app.delete('/api/product/:id',authController.authorization, authController.restrictTo('admin'), productController.remove)
}