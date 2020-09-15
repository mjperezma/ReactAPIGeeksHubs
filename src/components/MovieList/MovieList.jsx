import React from 'react';
import './MovieList.scss';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard.jsx';

const MovieList = (props) => {
  return (
    <>
      <h2 className='container__results__title'>most voted films</h2>
      <ul className='container__results'>
        {props.movies.map((movie) => {
          return (
            <li className='container__results__list' key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
