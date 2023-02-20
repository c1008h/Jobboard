import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { REMOVE_JOB } from '../../utils/mutations';
import { authService } from '../../utils/auth';
import { useParams } from 'react-router-dom';
import { searchJob } from '../../utils/api';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const OneSavedJob = () => {
    const { id } = useParams();
    const [job, setJob] = useState({});
    const [userData, setUserData] = useState({})
    const [removeJob] = useMutation(REMOVE_JOB);
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const data = await searchJob(id)
                setJob(data[0]);
            } catch (error) {
                console.error(error)
            }
        }
        fetchJob();
    }, [id]);
    console.log(job)

    const handleDeleteJob = async (_id) => {
        const token = authService.loggedIn() ? authService.getToken() : null
        if (!token) {
            return false
        }

        try {
            const updatedData = await removeJob({
                variables: { _id: _id }
            })
            if(updatedData.error) {
                throw new Error('Something went wrong.')
            }
            setUserData(updatedData.data.removeJob)

        } catch (error) {
            console.error(error)
        }
    }

    const date = new Date(job.job_posted_at_datetime_utc);
    const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div style={{padding:'10%', justifyContent:'center', alignItems:'center'}}>
            <h2>{id}</h2>
            <div style={{textAlign:'center'}}>
                {job.employer_logo? 
                <img src={job.employer_logo} alt='employer logo' style={{height:'300px', width:'80%'}}/> 
                : null }
            </div>
            {job.employer_website? <p>Employer Website: <a href={job.employer_website}>{job.employer_website}</a></p> : null }
            {formattedDate? <p>{formattedDate}</p> : null }
            {job.job_employment_type? (<p>Type: {job.job_employment_type}</p>) : null }
            <p>Remote: {job.job_is_remote? 'True' : 'False'}</p>
            <p>{job.job_city}, {job.job_state}, {job.job_country}</p>
            {job.job_highlight? (<p>{job.job_highlight}</p>) : null }
            {/* <p>Responsibilities:</p>
            <ul>
                {job.job_highlights.Responsibilities.map((responsibilitie, index) => (
                <li key={index}>{responsibilitie}</li>
                ))}
            </ul>
            <p>Qualifications:</p>
            <ul>
                {job.job_highlights.Qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
                ))}
            </ul>
            <p>Benefits:</p>
            <ul>
                <li>{job.job_benefits}</li>
                {job.job_highlights.Benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
                ))}
            </ul>  */}
            <div className='col-12' style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                {job.job_apply_link?
                <Link to={job.job_apply_link} target="_blank" rel="noopener noreferrer">
                    <Button>Apply</Button>
                </Link>
                : null}
                <Link to={'/savedjobs'}>
                    <Button onClick={() => handleDeleteJob(job.job_id)}>Remove</Button>
                </Link>
            </div>
        </div>
    )
}
}
