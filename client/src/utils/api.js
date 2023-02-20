import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true

// export const searchSkill = (userSkill) => {
//     return axios
//         .post("http://localhost:3002/api/skill", {
//             userSkill: userSkill.trim()
//         })
//         .then((response) => {
//             console.log(response.data)
//             return response.data
//         })
//         .catch((error) => {
//             console.error(error)
//         })
// }

export const searchJob = ( userJob ) => {
    return axios
    .post('http://localhost:3002/api/job', {
        userJob: userJob
    })
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((error) => {
        console.log(error)
    })
}

export const searchJob_Id = ( job_id ) => {
    return axios
    .post('http://localhost:3002/api/job/id', {
        job_id: job_id
    })
    .then((response) => {
        console.log(response.data)
        return response.data
    })
    .catch((error) => {
        console.log(error)
    })
}
