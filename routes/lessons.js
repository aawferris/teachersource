const { Router } = require('express')
const controllers = require('../controllers/lessons')

const router = Router()

router.get('/lessons', controllers.getPosts)
router.get('/lessons/:id', controllers.getPost)
router.post('/lessons', controllers.createPost)
router.put('/lessons/:id', controllers.updatePost)
router.delete('/lessons/:id', controllers.deletePost)

module.exports = router