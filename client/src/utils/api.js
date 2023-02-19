import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true

export const searchSkill = (userSkill) => {
    return axios
        .post("http://localhost:3002/api/skill", {
            userSkill: userSkill.trim()
        })
        .then((response) => {
            console.log(response.data)
            return response.data
        })
        .catch((error) => {
            console.error(error)
        })
}

export const searchJob = ( userJob ) => {
    return axios
    .post('http://localhost:3002/api/job', {
        userJob: userJob.trim()
    })
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((error) => {
        console.log(error)
    })
}