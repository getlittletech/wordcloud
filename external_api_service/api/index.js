const express = require('express')
const router = express.Router()

const frequentwords = require('../frequentwords')

router.use('/frequentwords', frequentwords)

module.exports = router
