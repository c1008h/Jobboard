import React, {useEffect, useState} from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { Card, Button } from 'react-bootstrap'
import { authService } from '../../utils/auth';
import { SAVE_JOB, REMOVE_JOB } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

export const CompanyCards = (props) => {
    const [show, setShow] = useState({});
    const [userData, setUserData] = useState({})
    const [isSelected, setIsSelected] = useState(false);
    const [loading, setLoading] = useState(true)
    const [removeJob] = useMutation(REMOVE_JOB);
    console.log(props)
    const { data } = useQuery(QUERY_ME)
    const lengthSearch = props.data.length

    useEffect(() => {
        if (data) {
            setUserData(data.me.savedJobs)
            setLoading(false)
        }
    },[data])
    
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

    const handleSaveJob = async (job_id, employer_name, employer_logo, job_apply_link, job_description, job_is_remote, job_posted_at_datetime_utc, job_country, job_state, job_city, job_offer_expire) => {
        const token = authService.loggedIn() ? authService.getToken() : null;
        if(!token) {
            return false
        }
        try {
            await saveJob({ variables: { input: {
                job_id: job_id,
                employer_name: employer_name,
                employer_logo: employer_logo,
                apply_link: job_apply_link,
                description: job_description,
                is_remote: job_is_remote,
                posted_date: job_posted_at_datetime_utc,
                country: job_country,
                state: job_state,
                city: job_city,
                offer_expire: job_offer_expire
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
        console.log(job_id)
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
            {lengthSearch < 1 ? (
                <h4><strong>No Results Found For {props.userJob}</strong></h4>
            ):(
                <>
                    <h4><strong>{lengthSearch} Results for {props.userJob}:</strong></h4>
                    <div className='col-12 row' style={{justifyContent:'center'}}> 
                        {props.data.map((item, index) => (
                            <Card key={index.job_id}  className='card col-xl-3 col-md-5 col-sm-8 col-xs-12' id='displayCards'>
                                {item.employer_logo ? (
                                    <Card.Img id='displayImage' src={item.employer_logo} alt='job' style={{height:'30%'}} /> )
                                    :
                                    (<Card.Title>{item.employer_name}</Card.Title>)
                                }
                                <Card.Body id='cardbody'>
                                    <p>Title: {item.job_title}</p>
                                    <p>Description: {item.job_description}</p>
                                    <p>Website: <a href={item.employer_website}>{item.employer_website}</a></p>
                                    <p>Remote: {item.is_remote ? 'True' : 'False'}</p>
                                    <p>{item.job_city}, {item.job_state}, {item.job_country}</p>

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
                                <Button type="button" 
                                    className='btn btn-secondary m-1'
                                    onClick={() => handleShow(item.job_id)}
                                >More Info</Button>
                                <Button type="button" 
                                    className='btn-secondary m-1'
                                    onClick={() => handleSaveJob(item.job_id, item.employer_name, item.employer_logo, item.job_apply_link, item.job_description, item.job_is_remote, item.job_posted_at_datetime_utc, item.job_country, item.job_state, item.job_city, item.job_offer_expire)}
                                >Save Job</Button>
                            </Card> 
                        ))}
                    </div>


                </>
            )}
        </div>    
    )
}