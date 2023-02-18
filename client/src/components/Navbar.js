import React from 'react'
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { authService } from '../utils/auth';
import '../style/index.css'

export const Navbar = () => {
    const logout = (event) => {
        event.preventDefault();
        authService.logout();
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-light'>
            <Link to='/' id='title' className='col-6'><span id='title'>Jobboard</span></Link>
            <DropdownButton id="dropdown-basic-button" className='col-3' title="More" >
            {/* {authService.loggedIn()?( */}

                <>
                <Dropdown.Item as={Link} to="/myprofile">My Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/allfoods" onClick={ logout }>Logout</Dropdown.Item>
                </>
            {/* ) : (
                <>
                <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                <Dropdown.Item as={Link} to="/signup">Signup</Dropdown.Item>
                </>
            )} */}
            </DropdownButton> 
        </nav>
    )
}