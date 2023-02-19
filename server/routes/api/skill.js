const express = require('express')
const router = express.Router()
const axios = require('axios')
require('dotenv').config({path: __dirname+'../../../env'});
const data = require('../../constants/jobData.json')

// console.log(data)

router.post('/', (req, res) => {
    const { userSkill } = req.body;
    console.log(userSkill)

    axios.get(data.data)
    .then((response) => {
        res.send(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
})

module.export = router;