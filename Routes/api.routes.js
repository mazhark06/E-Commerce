const express = require("express")
const apiRoute = require('../controller/authcheck.js')
const router = express.Router()
const protectJWT = require('../middleware/verifyJWT.js')


router.get('/api/profile' , protectJWT, apiRoute)

module.exports = router
