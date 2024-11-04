const { Router } = require('express');
const indexController = require('../controllers/indexController')
const indexRouter = Router()



const title = 'Mini Message Board';



indexRouter.get('/', indexController.indexMainPage)

indexRouter.get('/new', indexController.indexNewGet)

indexRouter.post('/new', indexController.indexNewPost)

indexRouter.get('/:username', indexController.usernameGet)

indexRouter.get('/:id/delete', indexController.deleteMessage)


module.exports = indexRouter