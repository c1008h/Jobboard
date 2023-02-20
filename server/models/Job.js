const { Schema } = require('mongoose');

const jobSchema = new Schema ({
    _id: {
        type: String
    },
    job_id: {
        type: String,
        required: true
    },
    employer_name: {
        type: String,
    },
    employer_logo: {
        type: String
    },
    apply_link: {
        type: String
    },
    description: {
        type: String
    },
    is_remote: {
        type: Boolean
    },
    posted_date: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    offer_expire: {
        type: String
    }
})

module.exports = jobSchema;
