const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => res.json({ text: 'Hello' }).status(200))

module.exports = router
