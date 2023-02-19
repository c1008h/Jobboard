import React, {useEffect, useState} from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { Card, Button } from 'react-bootstrap'
import { authService } from '../../utils/auth';
import { SAVE_JOB, REMOVE_JOB } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import { searchJob } from '../../utils/api'

export const CompanyCards = (props) => {
    const [show, setShow] = useState({});
    const [searchedJob, setSearchedJob ] = useState({});
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)
    const [removeJob] = useMutation(REMOVE_JOB);
    console.log(props)
    const { data } = useQuery(QUERY_ME)

    useEffect(() => {
        if (data) {
            setUserData(data.me.savedFoods)
            setLoading(false)
        }
    },[data])
    
    console.log(props)

    // const renderButton = (index) => {
    //     const item = userData.find(item => item.job_id === index)
    //     if(item) {
    //         return <Button type="button" 
    //         className="btn btn-secondary m-1"
    //         onClick={() => handleDeleteJob(item.job_id)}>Remove</Button>
    //     } else {
    //         return <Button type="button" 
    //         className="btn btn-secondary m-1"
    //         onClick={() => 
    //         handleSaveJob(item.job_id)}>Save</Button>
    //     }
    // }

    const [saveJob] = useMutation(SAVE_JOB, {
        update(cache, { data: { saveJob }}) {
            const data = cache.readQuery({ query: QUERY_ME });
            const me = data ? data.me : null;
            if (!me) {
                return;
            }
            
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, savedJobs: [...me.savedJobs, saveJob] } },
            });
        }
    })

    const handleSaveJob = async (job_id, employer_name, employer_logo, apply_link, description, is_remote, posted_date, country, state, city, offer_expire) => {
        const token = authService.loggedIn() ? authService.getToken() : null;
        if(!token) {
            return false
        }
        try {
            await saveJob({ variables: { input: {
                jobId: job_id,
                employer_name: employer_name,
                employer_logo: employer_logo,
                apply_link: apply_link,
                description: description,
                is_remote: is_remote,
                posted_date: posted_date,
                country: country,
                state: state,
                city: city,
                offer_expire: offer_expire
            }}})

            if(saveJob.error) { throw new Error('Something went wrong.')}
        } catch (error) {
            console.error(error)
        }
    }
    const handleClose = (job_id) => {
        setShow((prevState) => ({ ...prevState, [job_id]: false }));
    };
    const handleShow = async (job_id) => {
        setShow((prevState) => ({ ...prevState, [job_id]: true }));
        // console.log(id)

    }
    const handleDeleteJob = async (job_id) => {
        const token = authService.loggedIn() ? authService.getToken() : null
        if (!token) {
            return false
        }

        try {
            const updatedData = await removeJob({
                variables: { job_id: job_id }
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
        <div className='container'>
            <h4><strong>Results for {props.userJob}:</strong></h4>
            <div className='col-12 row' style={{justifyContent:'center'}}> 
                {props.data.map((item, index) => (
                    <Card key={index.job_id}  className='card col-xl-3 col-md-5 col-sm-8 col-xs-12' id='displayCards'>
                        <Card.Title>{item.employer_name}</Card.Title>
                        <Card.Img id='displayImage' src={item.employer_logo} alt='job' style={{height:'30%'}} />
                        <Card.Body>
                            <p>Title: {item.job_title}</p>
                            <p>Description: {item.job_description}</p>
                            <p>Website: <a href={item.employer_website}>{item.employer_website}</a></p>
                            <p>Remote: {item.is_remote ? 'True' : 'False'}</p>
                            <p>{item.job_city}, {item.job_state}, {item.job_country}</p>
                            <Button type="button" 
                            className="btn btn-secondary m-1"
                            onClick={() => handleShow(item.job_id)}
                            >More Info</Button>
                            {/* {userData && userData.savedJobs && !userData.savedJobs.includes(item.job_id) ? (
                                <Button type="button" 
                                    className="btn btn-secondary m-1"
                                    onClick={() => handleDeleteJob(item.id)}
                                >Remove</Button> 
                            ): (
                                <Button
                                type="button" 
                                className="btn btn-secondary m-1"
                                onClick={() => 
                                handleSaveJob(job_id)}>
                            Save</Button>)} */}
                            {/* {renderButton(userData, item.id)} */}
                            {/* <OneFood 
                                show={show}
                                onHide={() => handleClose(item.id)}
                                onClick={() => handleClose(item.id)}
                                data={item}
                                handleClose={handleClose}
                                id={id}
                                review={reviews}
                                handleSaveFood={handleSaveFood}
                                handleDeleteFood={handleDeleteFood}
                            /> */}
                        </Card.Body>
                    </Card> 

                ))}
            </div>
        </div>    
    )
}