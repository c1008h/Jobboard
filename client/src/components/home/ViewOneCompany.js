import React, { useState, useEffect }  from 'react'
import { useParams } from 'react-router-dom';
import { searchJob } from '../../utils/api';

export const ViewOneCompany = () => {
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

    // const date = new Date(job.job_posted_at_datetime_utc);
    // const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <>View One Company</>
    )
}