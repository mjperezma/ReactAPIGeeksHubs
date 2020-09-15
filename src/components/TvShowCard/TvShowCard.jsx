import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const TvShowCard = (props) => {
  const {title, image, votes, id} = props.tvshow;
  return (
    <>
      <img className='card__result__img' src={`https://image.tmdb.org/t/p/original/${image}`} alt={title} />
      <h3 className='card__result__title'>{title}</h3>
      <h5 className='card__result__votes'>Number of votes: {votes}</h5>
      <Link to={`/tvshowdetail/${id}`}>
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

TvShowCard.propTypes = {
  tvshow: PropTypes.object,
};

export default TvShowCard;
