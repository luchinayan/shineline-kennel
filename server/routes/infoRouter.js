const Router = require('express')
const router = new Router()
const InfoController = require('../controllers/infoController')

router.get('/:id', InfoController.getInfoById)
router.get('/', InfoController.getInfos)
router.post('/', InfoController.createInfo)


module.exports = router


