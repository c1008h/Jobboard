const express = require('express')
const router = express.Router()
const data = require('../../constants/jobData.json');

console.log(data.data)

router.post('/', (req, res) => {
    const { userJob } = req.body;
    const matches = data.data.filter(job => job.job_title.includes(userJob));

    if (!matches) {
        console.log('No matches found!')
    }
    res.send(matches)
    console.log(matches)
})

router.post('/id', (req, res) => {
    const { job_id } = req.body;
    const matches = data.data.filter(job => job.job_id.includes(job_id));

    if (!matches) {
        console.log('No matches found!')
    }
    res.send(matches)
    console.log(matches)
})

module.exports = router;