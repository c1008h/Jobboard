import React, {useState} from 'react'
import { FormControl, Button, Stack, Box, Typography, InputLabel, Input, FormHelperText } from '@mui/material'

export const SignupForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password)
        console.log(confirmpassword)
        if(confirmpassword === password) {

        onSubmit(username, email, password);
        setUsername('')
        setEmail('')
        setPassword('')
      } else {
        alert('Second password is not the same as the first!')
        setPassword('')
        setConfirmPassword('')
      }
    };

    return (
        <Box textAlign='center' p='15%' justifyContent='center' width='70%'>
            <Typography fontSize={30}>
                Signup
            </Typography>
            <Stack direction='column' width='100%' textAlign='center' justifyContent='center'>
                <FormControl    
                    name='email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    required
                >
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl
                    name='passwrd'
                    onChange={e => setEmail(e.target.value)}
                    value={password}
                    required
                >
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                </FormControl>
                <FormControl
                    name='confirmpassword'
                    onChange={e => setConfirmPassword(e.target.value)}
                    value={confirmpassword}
                    required
                >
                    <InputLabel htmlFor="my-input">Re-Enter Password</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <Button
                    disabled={!(email && password && confirmpassword)}
                    type='submit'
                    variant='success'
                >
                    Create
                </Button>
            </Stack>
        </Box>
    )
}