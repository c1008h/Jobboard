import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { searchJob } from '../../utils/api';

export const OneSavedJob = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        async function fetchJob() {
            const result = await searchJob(id);
            setJob(result);
        }
        fetchJob();
    }, [id]);
    console.log(job)
    return (
        <div>
            <h2>{id}</h2>
            <img src={job[0].employer_logo} alt='employer logo'/>
            <p>Additional content goes here.</p>
        </div>
    )
}