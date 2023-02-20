const express = require('express')
const router = express.Router()
const axios = require('axios')
require('dotenv').config({path: __dirname+'../../../env'});
const data = require('../../constants/jobData.json')

// console.log(data)

router.post('/api/upload', (req, res) => {
    console.log(req.body);
    /*axios.get(data.data)
    .then((response) => {
        res.send(response.data)
    })
    .catch((error) => {
        console.log(error)
    })*/
})

module.exports = router;