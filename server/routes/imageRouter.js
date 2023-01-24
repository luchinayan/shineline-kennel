const Router = require('express')
const router = new Router()
const ImageController = require('../controllers/imageController')

router.get('/', ImageController.getAllImages)
router.get('/:id', ImageController.getImageById)
router.post('/', ImageController.createImage)


module.exports = router


