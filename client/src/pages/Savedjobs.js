import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { authService } from '../utils/auth';
import { REMOVE_JOB } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';
import { Card, Button } from 'react-bootstrap';

export const Savedjobs = () => {
    const [removeJob] = useMutation(REMOVE_JOB);
    const { data } = useQuery(QUERY_ME)
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState({})

    useEffect(() => {
        if (data) {
            setUserData(data.me)
            setLoading(false)
        }
    },[data])
    console.log(userData.savedJobs)

    const lengthSaved = userData.savedJobs ? userData.savedJobs.length : 0;

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

    const token = authService.loggedIn() ? authService.getToken() : null;
    if(!token) {
        return <h2>Please login first</h2>
    }
    if(loading) {
        return <h2>LOADING...</h2>
    }

    return (
        <div>
            <h2>
                {lengthSaved < 1 ? 'You Have No Saved Jobs!' : `You have ${lengthSaved} Saved job(s)`}
            </h2>
            <div>
                {userData && userData.savedJobs && userData.savedJobs.map((savedJobs, index) => (
                    <Card key={index.job_id} className='card col-xl-3 col-md-5 col-sm-8 col-xs-12' id='displayCards'>
                    {savedJobs.employer_logo ? (
                        <Card.Img id='displayImage' src={savedJobs.employer_logo} alt='job' style={{height:'30%'}} /> )
                        :
                        (<Card.Title>{savedJobs.employer_name}</Card.Title>)
                    }
                    <Card.Body id='cardbody'>
                        <p>Title: {savedJobs.job_id}</p>
                        <p>Description: {savedJobs.description}</p>
                        <p>Apply: <a href={savedJobs.apply_link}>{savedJobs.apply_link}</a></p>
                        <p>Remote: {savedJobs.is_remote ? 'True' : 'False'}</p>
                        <p>{savedJobs.city}, {savedJobs.state}, {savedJobs.country}</p>
                        </Card.Body>
                        {/* <Button type="button" 
                            className='btn btn-secondary m-1'
                            onClick={() => handleShow(jobs.job_id)}
                        >More Info</Button> */}
                        <Button type="button" 
                            className='btn-secondary m-1'
                            onClick={() => handleDeleteJob(savedJobs._id)}
                        >Remove</Button>
                    </Card> 
                ))}
            </div>
        </div>
    )
}