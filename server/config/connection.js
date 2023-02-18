const mongoose = require('mongoose')
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jobboard', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

module.exports = mongoose.connection; 
