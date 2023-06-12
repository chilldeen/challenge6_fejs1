import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { googleLogin } from '../redux/actions/auth'

const GoogleLogin = ({ buttonText }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            const data = {
                access_token: tokenResponse.access_token,
            }

            dispatch(googleLogin(data, navigate))
        },
    })
    
    return (
        <Button color='secondary' variant='outlined' sx={{height:'50px', width: '100%'}} onClick={() => login()}>
            {buttonText}
        </Button>
    )
}

export default GoogleLogin