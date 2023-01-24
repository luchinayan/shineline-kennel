const Router = require('express')
const router = new Router()
const EmailController = require('../controllers/emailController')

router.get('/', EmailController.getAllEmails)
router.post('/', EmailController.createEmail)


module.exports = router


