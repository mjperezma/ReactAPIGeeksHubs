import React from 'react';
import './MovieCard.scss';
import {Link} from 'react-router-dom';
const MovieCard = (props) => {
  const {title, image, votes, id} = props.movie;
  return (
    <>
      <img className='card__movie__img' src={`https://image.tmdb.org/t/p/original/${image}`} alt={title} />
      <h3 className='card__movie__title'>{title}</h3>
      <h5 className='card__movie__votes'>Number of votes: {votes}</h5>
      <Link to={`/moviedetail/${id}`}>
        <button className='card__movie__button'>
          More information
          <span className='round'>
            <i className='fa fa-chevron-right'></i>
          </span>
        </button>
      </Link>
    </>
  );
};

export default MovieCard;
