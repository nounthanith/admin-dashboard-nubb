const saleController = require('./../controllers/saleController')
const authController = require('../controllers/authController')

exports.saleRouter = (app)=>{
    app.post('/api/sale', authController.authorization, saleController.create)
    app.get('/api/sale', authController.authorization, saleController.findAll)
    app.get('/api/sale/:invoice', authController.authorization, saleController.findOne)
}