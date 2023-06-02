import { connect } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchDetail } from '../redux/actions/detail';
import apiConfig from '../api/apiConfig';

const Detail = ({ detail, fetchDetail }) => {
    const location = useLocation();
    const id = location.state ? location.state.id : null;
  
    useEffect(() => {
      fetchDetail(id);
    }, [fetchDetail, id]);

    return (
        <Box
            sx={{
            backgroundImage: `${
                detail.backdrop_path
                ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${apiConfig.originalImage(
                    detail.backdrop_path
                    )})`
                : ''
            }`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            opacity: detail.backdrop_path ? 1 : 0,
            transition: 'opacity 0.5s ease',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '50%',
                    height: '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: 2,
                }}
            >
                <Typography variant="h2" color="white" fontWeight="bold" sx={{ marginLeft: 2 }}>
                    {detail.title}
                </Typography>
        
                <Typography variant="h5" color="white" sx={{ marginLeft: 2 }}>
                    {detail.genres ? detail.genres.map((genre) => genre.name).join(', ') : 'No genres found'}
                </Typography>
        
                <Typography variant="h6" color="white" sx={{ marginLeft: 2, textAlign: 'justify' }}>
                    {detail.overview ? detail.overview : 'No overview available'}
                </Typography>
        
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography color='white' sx={{ marginLeft: 2 }}>
                        Rating: 
                    </Typography>
                    <Typography variant="h6" color="white">
                        {detail.vote_average ? detail.vote_average.toFixed(1) : 'N/A'}/10
                    </Typography>
                </Box>
        
                <Button variant="contained" color="secondary" sx={{ marginLeft: 2, marginTop: 1, width: 250, height: 50 }}>
                    Watch Trailer
                </Button>
            </Box>
        </Box>
    );
};
  
const mapStateToProps = (state) => ({
    detail: state.detail.detail
});
  
const mapDispatchToProps = {
    fetchDetail,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
  
  
  
  
  
