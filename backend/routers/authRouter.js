const authController = require('../controllers/authController')

exports.authRouter = (app) => {
    app.post('/api/auth/signup', authController.signup)
    app.post('/api/auth/signin', authController.signin) 
    app.get('/api/auth/signout', authController.signout)
    app.get('/api/auth/count',authController.authorization, authController.restrictTo('admin'), authController.findAll);
    app.get('/api/auth/current',authController.authorization, authController.current)
}
