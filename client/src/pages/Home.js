import React from 'react'
import { Box, Typography, Stack, Card, Button } from '@mui/material'

export const Home = () => {
    return (
        <Box p={5}>
            <Typography fontSize={40} textAlign='center'>
                Welcome to the one stop Jobboard!
            </Typography>
            <Box justifyContent='center' textAlign='center'>
                <Typography fontSize={20} textAlign='center'>
                    Have you recently been laid off and urgently looking for a new one? No worries, Jobboard is here. We connect thousands of users to potential employers. Most users find employment within a month.
                    Signup to get started on your job search!
                </Typography>
                <Button variant="outlined">Sign Up</Button>
            </Box>
            <Stack 
                direction={{ xs: 'column', sm: 'column', md:'row' }} 
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="space-evenly"
                alignItems="center"
                mt={5}
            >
                <Card variant="outlined">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>- Angel H., Software Engineer</p>
                </Card>
                <Card variant="outlined">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>- Brit A., Data Analysis</p>
                </Card>
                <Card variant="outlined">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>- David R., Software Engineer</p>
                </Card>
                <Card variant="outlined">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>- Cassie B., Web Developer</p>
                </Card>
            </Stack>
            <Stack direction='row'>
                <Box>
                    
                </Box>
            </Stack>
        </Box>
    )
}