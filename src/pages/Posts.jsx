import React, { useEffect } from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { connect } from 'react-redux';
import { fetchPopularMovies } from '../redux/actions/post';
import apiConfig from '../api/apiConfig';
import { useNavigate } from 'react-router-dom';

const Movies = ({ popularMovies, fetchPopularMovies }) => {
    const navigate = useNavigate();
    
    const dateFormat = (dates) => {
        const date = new Date(dates); 
        const formattedDate = date.toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric' });
        return formattedDate
    }

    useEffect(() => {
        fetchPopularMovies();
    }, [fetchPopularMovies]);

    return (
        <Box flex={4} p={4} sx={{ display: 'grid', paddingTop: 10, gap: 4, gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {popularMovies.map((movie) => (
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt={movie.title}
                        height="500"
                        image={apiConfig.originalImage(movie.poster_path)}
                        onClick={() => navigate('/detail', { state: { id: movie.id } })}
                        sx={{ cursor: 'pointer' }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {movie.title}
                        </Typography>
                        <Typography>
                            {dateFormat(movie.release_date)}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

const mapStateToProps = (state) => ({
  popularMovies: state.movie.popularMovies,
});

const mapDispatchToProps = {
  fetchPopularMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
