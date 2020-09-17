import React from 'react';
import './MovieCard.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MovieCard = ({movie}) => {
  const {title, poster_path, vote_count, id} = movie;
  return (
    <>
      <img className='card__result__img' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
      <h3 className='card__result__title'>{title}</h3>
      <h5 className='card__result__votes'>Number of votes: {vote_count}</h5>
      <Link to={`/moviedetail/${id}`}>
        <button className='card__result__button'>
          More information
          <span className='round'>
            <i className='fa fa-chevron-right'></i>
          </span>
        </button>
      </Link>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
