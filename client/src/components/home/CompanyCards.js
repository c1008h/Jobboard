import React, {useEffect, useState} from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { Card, Button } from 'react-bootstrap'
import { authService } from '../../utils/auth';
import { SAVE_JOB, REMOVE_JOB } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import { searchJob } from '../../utils/api'

export const CompanyCards = (props) => {
    // const [show, setShow] = useState({});
    // const [searchedJob, setSearchedJob ] = useState({});
    // const [id, setId ] = useState({});
    // const [userData, setUserData] = useState({})
    // const [loading, setLoading] = useState(true)
    // const [removeJob] = useMutation(REMOVE_JOB);
    // console.log(props)
    // const { data } = useQuery(QUERY_ME)

    // useEffect(() => {
    //     if (data) {
    //         setUserData(data.me.savedFoods)
    //         setLoading(false)
    //     }
    // },[data])
    
    // console.log(props)

    // const renderButton = (index) => {
    //     const item = userData.find(item => item.id === index)
    //     if(item) {
    //         return <Button type="button" 
    //         className="btn btn-secondary m-1"
    //         onClick={() => handleDeleteJob(item.id)}>Remove</Button>
    //     } else {
    //         return <Button type="button" 
    //         className="btn btn-secondary m-1"
    //         onClick={() => 
    //         handleSaveJob(item.id, item.foodtype, item.name, item.image_url, item.is_closed, item.url, item.rating, item.price, item.display_phone)}>Save</Button>
    //     }
    // }

    // const [saveJob] = useMutation(SAVE_JOB, {
    //     update(cache, { data: { saveJob }}) {
    //         const data = cache.readQuery({ query: QUERY_ME });
    //         const me = data ? data.me : null;
    //         if (!me) {
    //             return;
    //         }
            
    //         cache.writeQuery({
    //             query: QUERY_ME,
    //             data: { me: { ...me, savedJobs: [...me.savedJobs, saveJob] } },
    //         });
    //     }
    // })

    // const handleSaveJob = async (id, foodtype, name, image_url, is_closed, url, rating, price, display_phone, distance) => {
    //     const token = authService.loggedIn() ? authService.getToken() : null;
    //     if(!token) {
    //         return false
    //     }
    //     try {
    //         await saveJob({ variables: { input: {
    //             jobId: id,
    //             foodtype: props.food.trim().charAt(0).toUpperCase() + props.food.trim().slice(1).toLowerCase(),
    //             name: name,
    //             image_url: image_url,
    //             is_closed: is_closed,
    //             url: url,
    //             rating: rating,
    //             price: price,
    //             display_phone: display_phone,
    //         }}})

    //         if(saveJob.error) { throw new Error('Something went wrong.')}
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    // const handleClose = (id) => {
    //     setShow((prevState) => ({ ...prevState, [id]: false }));
    // };
    // const handleShow = async (id) => {
    //     setShow((prevState) => ({ ...prevState, [id]: true }));
    //     // Searching foodId and reviews from API
    //     const response = await searchJob(userJob)
    //     setSearchedJob(response)
    //     // console.log(id)

    // }
    // const handleDeleteJob = async (jobId) => {
    //     const token = authService.loggedIn() ? authService.getToken() : null
    //     if (!token) {
    //         return false
    //     }

    //     try {
    //         const updatedData = await removeJob({
    //             variables: { jobId: jobId }
    //         })
    //         if(updatedData.error) {
    //             throw new Error('Something went wrong.')
    //         }
    //         setUserData(updatedData.data.removeJob)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    // const token = authService.loggedIn() ? authService.getToken() : null;
    // if(!token) {
    //     return <h2>Please login first</h2>
    // }
    // if(loading) {
    //     return <h2>LOADING...</h2>
    // }

    return (
        <div className='container'>
            <h4><strong>Results for {props.job}:</strong></h4>
            <div className='col-12 row' style={{justifyContent:'center'}}> 
                {/* {props.data.businesses.map((item, index) => (
                    <Card key={index}  className='card col-xl-3 col-md-5 col-sm-8 col-xs-12' id='displayCards'>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Img id='displayImage' src={item.image_url} alt='job' style={{height:'30%'}} /> */}
                        {/* <Card.Body>
                            <p>Rating: {item.rating}</p>
                            <p>Price: {item.price}</p>
                            <p>{item.location.address1}</p>
                            <p>{item.location.city}, {item.location.state}, {item.location.zip_code}, {item.location.country}</p>
                            <Button type="button" 
                            className="btn btn-secondary m-1"
                            onClick={() => handleShow(item.id)}
                            >More Info</Button>
                            {userData && userData.savedJobs && !userData.savedJobs.includes(item.id) ? (
                                <Button type="button" 
                                    className="btn btn-secondary m-1"
                                    onClick={() => handleDeleteJob(item.id)}
                                >Remove</Button> 
                            ): (
                                <Button
                                type="button" 
                                className="btn btn-secondary m-1"
                                onClick={() => 
                                handleSaveJob(item.id, item.foodtype, item.name, item.image_url, item.is_closed, item.url, item.rating, item.price, item.display_phone)}>
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
                        {/* </Card.Body>
                    </Card> */}

                {/* ))} */}
            </div>
        </div>    
    )
}