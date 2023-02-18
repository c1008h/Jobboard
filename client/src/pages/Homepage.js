import React from 'react'
import { Home } from '../components/home/Home'
import { Dashboard } from '../components/home/Dashboard'
import { authService } from '../utils/auth'

export const Homepage = () => {
    return (
        <>
            {authService.loggedIn() ? 
                <Dashboard /> 
                : 
                <Home/>
            }
        </>
    )
}