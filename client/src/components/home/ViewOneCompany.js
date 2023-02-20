import React from 'react'
import { useParams } from 'react-router-dom';

export const ViewOneCompany = () => {
    let { job_id } = useParams();

    return (
        <>View One Company</>
    )
}