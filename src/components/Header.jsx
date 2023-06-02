import React, { useEffect } from 'react'
import { AppBar, Box, Button, ButtonGroup, InputBase, Toolbar, Typography, alpha, styled } from '@mui/material'
// import {  SearchRounded } from '@mui/ic'
import { Link, useNavigate } from 'react-router-dom';
import { debounce } from 'lodash'; 
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, logout } from '../redux/actions/auth';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },
    },
}));

const Navbar = () => {
    // const navigate = useNavigate()

    // //function untuk eksekusi navigasi setelah 500ms tidak ada inputan
    // const debouncedNavigate = debounce((keyword) => {
    //     navigate('/search', { state: { keyword } });
    // }, 500);

    // const userEmail = localStorage.email;

    // const handleLogout = () => {
    //     localStorage.clear();
    //     navigate('/login');
    // };

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoggedIn, token, user } = useSelector((state) => state.auth)

    const debouncedNavigate = debounce((keyword) => {
        navigate('/search', { state: { keyword } });
    }, 500);

    useEffect(() => {
        if (isLoggedIn && token) {
            dispatch(getProfile())
        }
    }, [dispatch, isLoggedIn, token])

    return (
        <Box>
            <AppBar position="fixed">
                    <Toolbar sx={{justifyContent:'space-between'}}>
                        <Typography variant="h4" color='secondary' component="div" onClick={() => navigate('/')} sx={{cursor:'pointer'}}>
                            MovieList
                        </Typography>

                        <Search>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={(e) => debouncedNavigate(e.target.value)}
                            />
                        </Search>

                        {isLoggedIn ? (
                            <>
                                <ButtonGroup sx={{ gap: 3, alignItems:'center' }}>
                                    <Typography>
                                        Hi, {user?.name}
                                    </Typography>
                                    <Button variant='contained' color='secondary' onClick={() => dispatch(logout(navigate))}>
                                        Logout
                                    </Button>
                                </ButtonGroup>
                            </>
                        ) : (
                            <>
                                <ButtonGroup sx={{ gap: 2 }}>
                                    <Button variant='contained' color='secondary' as={Link} to={'/login'}>
                                        Login
                                    </Button>
                                    <Button variant='outlined' color='secondary' as={Link} to={'/register'}>
                                        Register
                                    </Button>
                                </ButtonGroup>
                            </>
                        )}

                        {/* {userEmail ? (
                            <ButtonGroup sx={{ gap: 1 }}>
                                <Typography>{userEmail}</Typography>
                                <Button variant='contained' color='secondary' onClick={handleLogout}>Logout</Button>
                            </ButtonGroup>
                        ) : (
                            <ButtonGroup sx={{ gap: 2 }}>
                                <Button variant='outlined' color='secondary' onClick={() => navigate('/signup')}>Register</Button>
                                <Button variant='contained' color='secondary' onClick={() => navigate('/')}>Login</Button>
                            </ButtonGroup>
                        )} */}
                    </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar