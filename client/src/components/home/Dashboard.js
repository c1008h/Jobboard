import React, {useState} from 'react';
import { CompanyCards } from './CompanyCards'
import { JobForm } from './JobForm'
import { searchJob } from '../../utils/api.js';
import { authService } from '../../utils/auth';

export const Dashboard = () => {
    const [data, setData] = useState({});
    const [searchMade, setSearchMade] = useState(false);
    const [userJob, setUserJob] = useState('')

    const handleFormSubmit =  async (userJob) => {
        if(!userJob) {
            alert('Search a job!')
        }
        
        // Using searchMade from API to search
        const search = await searchJob(userJob)
        console.log(search)
        setSearchMade(true);
        setData(search)
        setUserJob(userJob)
    }
    const token = authService.loggedIn() ? authService.getToken() : null;

    if(!token) {
        return <h2>Please login first</h2>
    }

    return (
        <div className='container'>
            <JobForm onSubmit={handleFormSubmit}/>
            {searchMade && <CompanyCards userJob={userJob} data={data}/>}
        </div>
    )
}