import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //useEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
    console.log(movie);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <Details>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt='The Athlete' />
          </Headline>
        </Details>
      )}
    </>
  );
};
const Details = styled.div``;
const Headline = styled.div``;

export default MovieDetail;
