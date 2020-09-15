import React from 'react';
import './MovieList.scss';
import MovieCard from '../MovieCard/MovieCard.jsx';
const MovieList = (props) => {
  return (
    <>
      <h2 className='container__movies__title'>most voted films</h2>
      <ul className='container__movies'>
        {props.movies.map((movie) => {
          return (
            <li className='container__movies__list' key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
