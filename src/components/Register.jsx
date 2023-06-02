import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../redux/actions/auth";
import { toast } from "react-toastify";
import { Box, Button, TextField, Typography } from "@mui/material";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email, password, name };

    if (password !== confirmPassword) {
      toast.error("Confirm password must be same with password");
      return;
    }

    dispatch(register(data, navigate));
  };

  return (
    <Box
      sx={{
        wdth: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{background:'white', display:'grid', gap:2, p:2}}>
          <Typography sx={{justifySelf:'center'}}>Sign up</Typography>

          <TextField id='outlined-basic' label='Email' variant='outlined' onChange={(e) => setEmail(e.target.value)}/>
          <TextField id='outlined-basic' label='Name' variant='outlined' onChange={(e) => setName(e.target.value)}/>
          <TextField id='outlined-basic' label='Password' variant='outlined' type='password' onChange={(e) => setPassword(e.target.value)}/>
          <TextField id='outlined-basic' label='Confirm Password' variant='outlined' type='password' onChange={(e) => setConfirmPassword(e.target.value)}/>

          <Button color='secondary' variant='contained' onClick={handleSubmit} sx={{height:'50px'}}>Sign up</Button>

          <Typography sx={{justifySelf:'center'}}>Already have an account? <Link to='/login'>Login</Link></Typography>
      </Box>
    </Box>
  );
}

export default Register;