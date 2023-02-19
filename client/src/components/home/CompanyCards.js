import React, {useEffect, useState} from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { Card, Button } from 'react-bootstrap'
import { authService } from '../../utils/auth';
import { SAVE_JOB, REMOVE_JOB } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import { searchJob } from '../../utils.API'

export const CompanyCards = (props) => {
    const [show, setShow] = useState({});
    const [id, setId ] = useState({});
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
    const renderButton = (index) => {
        const item = userData.find(item => item.id === index)
        if(item) {
            return <Button type="button" 
            className="btn btn-secondary m-1"
            onClick={() => handleDeleteFood(item.id)}>Remove</Button>
        } else {
            return <Button type="button" 
            className="btn btn-secondary m-1"
            onClick={() => 
            handleSaveFood(item.id, item.foodtype, item.name, item.image_url, item.is_closed, item.url, item.rating, item.price, item.display_phone)}>Save</Button>
        }
    }
    const [saveFood] = useMutation(SAVE_JOB, {
        update(cache, { data: { saveFood }}) {
            const data = cache.readQuery({ query: QUERY_ME });
            const me = data ? data.me : null;
            if (!me) {
                return;
            }
            
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, savedFoods: [...me.savedFoods, saveFood] } },
            });
        }
    })
    const handleSaveFood = async (id, foodtype, name, image_url, is_closed, url, rating, price, display_phone, distance) => {
        const token = authService.loggedIn() ? authService.getToken() : null;
        if(!token) {
            return false
        }
        try {
            await saveJob({ variables: { input: {
                jobId: id,
                foodtype: props.food.trim().charAt(0).toUpperCase() + props.food.trim().slice(1).toLowerCase(),
                name: name,
                image_url: image_url,
                is_closed: is_closed,
                url: url,
                rating: rating,
                price: price,
                display_phone: display_phone,
            }}})

            if(saveFood.error) { throw new Error('Something went wrong.')}
        } catch (error) {
            console.error(error)
        }
    }
    const handleClose = (id) => {
        setShow((prevState) => ({ ...prevState, [id]: false }));
    };
    const handleShow = async (id) => {
        setShow((prevState) => ({ ...prevState, [id]: true }));
        // Searching foodId and reviews from API
        const response = await jobById(id)
        setId(response)
        console.log(id)

    }
    const handleDeleteFood = async (jobId) => {
        const token = authService.loggedIn() ? authService.getToken() : null
        if (!token) {
            return false
        }

        try {
            const updatedData = await removeJob({
                variables: { foodId: jobId }
            })
            if(updatedData.error) {
                throw new Error('Something went wrong.')
            }
            setUserData(updatedData.data.removeFood)
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
        <Card></Card>
    )
}