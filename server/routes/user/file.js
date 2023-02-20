const express = require('express')
const router = express.Router()
const data = require('../../constants/jobData.json');

console.log(data.data)

router.post('/file', (req, res) => {
    const { file } = req.body;

    if (!file) {
        console.log('No files found!')
    }
    res.send('File Saved!')
    console.log(file)
})

module.exports = router;