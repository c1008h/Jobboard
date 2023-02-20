import React, { useState, useEffect }  from 'react'
import { useParams } from 'react-router-dom';
import { searchJob_Id } from '../../utils/api';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const ViewOneCompany = () => {
    const { id } = useParams();
    const [job, setJob] = useState({});

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const data = await searchJob_Id(id)
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
            {job.employer_logo ? (
            <div style={{textAlign:'center'}}>
                <img id='displayImage' src={job.employer_logo} alt='job' style={{height:'30%'}} /> 
            </div>
            ) : (<h2>{job.employer_name}</h2>)}
            {job.employer_website? <p>Employer Website: <a href={job.employer_website}>{job.employer_website}</a></p> : null }
            {formattedDate? <p>{formattedDate}</p> : null }
            {job.job_employment_type? (<p>Type: {job.job_employment_type}</p>) : null }
            <p>Remote: {job.job_is_remote? 'True' : 'False'}</p>
            <p>{job.job_city}, {job.job_state}, {job.job_country}</p>
            {job.job_highlight? (<p>{job.job_highlight}</p>) : null }
            <div className='col-12' style={{justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                {job.job_apply_link?
                <Link to={job.job_apply_link} target="_blank" rel="noopener noreferrer">
                    <Button>Apply</Button>
                </Link>
                : null}
                <Link to='/'><Button>Back</Button></Link>
            </div>
        </div>
    )
}