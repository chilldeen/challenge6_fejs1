import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/auth'
import { GoogleLogin } from '@react-oauth/google'
// import GoogleLogin from './GoogleLogin'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {email, password}

        dispatch(login(data, navigate))
    }

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box sx={{background:'white', display:'grid', gap:2, p:2}}>
                <Typography sx={{justifySelf:'center'}}>Login</Typography>

                <TextField id='outlined-basic' label='Email' variant='outlined' fullWidth sx={{ width: '100%' }} onChange={(e) => setEmail(e.target.value)}/>
                <TextField id='outlined-basic' label='Password' variant='outlined' type='password' fullWidth sx={{ width: '100%' }} onChange={(e) => setPassword(e.target.value)}/>

                <Button color='secondary' variant='contained' sx={{height:'50px', width: '100%'}} onClick={handleSubmit}>Login</Button>
                <Box sx={{ height: '50px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <GoogleLogin buttonText="Google" />
                </Box>

                <Typography sx={{justifySelf:'center'}}>Don't have an account? <Link to='/register'>Sign up</Link></Typography>
            </Box>
        </Box>
    )
}

export default Login