import React from 'react'
import { Form, Button } from 'react-bootstrap';

export const LoginForm = ({handleFormSubmit, handleSubmit, formState}) => {

    return (
        <Form onSubmit={handleFormSubmit} style={{padding:'15%', justifyContent:'center'}}>
            <Form.Group>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Your email'
                    name='email'
                    onChange={handleSubmit}
                    value={formState.email}
                    required
                />
                <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Your password'
                    name='password'
                    onChange={handleSubmit}
                    value={formState.password}
                    required
                />
                <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
            </Form.Group>
            <Button style={{margin:'5%', justifyContent:'center', textAlign:'center'}}
            disabled={!(formState.email && formState.password)}
            type='submit'
            variant='success'>
            Submit
            </Button>
        </Form>
    )
}