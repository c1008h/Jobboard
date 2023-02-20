import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { searchJob } from '../../utils/api';

export const OneSavedJob = () => {
    const { id } = useParams();
    const [job, setJob] = useState({});

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
            <p>Employer Website: <a href={job.employer_website}>{job.employer_website}</a></p>
            <p>{formattedDate}</p>
            <p>Type: {job.job_employment_type}</p>
            <p>Remote: {job.job_is_remote? 'True' : 'False'}</p>
            <p>{job.job_city}, {job.job_state}, {job.job_country}</p>
            <p>{job.job_highlight}</p>
            <p>Responsibilities:</p>
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
            </ul> 
            <button>Apply</button>
            <button>Remove</button>
        </div>
    )
}