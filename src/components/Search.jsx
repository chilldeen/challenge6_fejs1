import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { searchMovies } from '../redux/actions/search'
import apiConfig from '../api/apiConfig';

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const keyword = location.state ? location.state.keyword : null;

  const dispatch = useDispatch();
  const dataMovie = useSelector((state) => state.search.dataMovie);

  const getSearch = () => {
    dispatch(searchMovies(keyword));
  };

  const dateFormat = (dates) => {
    const date = new Date(dates);
    const formattedDate = date.toLocaleString('default', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    return formattedDate;
  };

  useEffect(() => {
    if (keyword) {
      getSearch();
    }
  }, [keyword]);

  return (
    <Box
      flex={4}
      p={4}
      sx={{ display: 'grid', paddingTop: 10, gap: 5, gridTemplateColumns: 'repeat(5, 1fr)' }}
    >
      {dataMovie.map((movie) => (
        <Card sx={{ maxWidth: 345 }} key={movie.id}>
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
            <Typography>{dateFormat(movie.release_date)}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Search;
