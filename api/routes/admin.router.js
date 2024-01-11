const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')
const { getAllAdmins, getOneAdmin, createAdmin, updateAdmin, deleteAdmin } = require('../controllers/admin.controller')

router.get('/',checkAuth, getAllAdmins)
router.get('/:id',checkAuth, getOneAdmin)
router.post('/',checkAuth, checkAdmin, createAdmin)
router.put('/:id',checkAuth, checkAdmin, updateAdmin)
router.delete('/:id',checkAuth, checkAdmin, deleteAdmin)

module.exports = router