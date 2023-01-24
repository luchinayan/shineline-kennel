const Router = require('express')
const router = new Router()
const adminRouter = require('./adminRouter')
const imageRouter = require('./imageRouter')
const infoRouter = require('./infoRouter')
const emailRouter = require('./emailRouter')

router.use('/admin', adminRouter)
router.use('/info', infoRouter)
router.use('/image', imageRouter)
router.use('/email', emailRouter)


module.exports = router


