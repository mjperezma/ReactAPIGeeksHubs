import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const TvShowDetail = (props) => {
  const {title, id, resume, image, votes, nota, date, orTitle, popularity} = props.tvshow;
  return (
    <>
      <article className='article__detail'>
        <img className='article__detail__img' src={`https://image.tmdb.org/t/p/original/${image}`} alt={title} />
        <div>
          <h3 className='article__detail__title' id={id}>
            {title}
          </h3>
          <h3>Original Title : {orTitle}</h3>
          <span className='article__detail__resume'>{resume}</span>
          <span>Votes: {votes}</span>
          <span>Popularity: {popularity}</span>
          <span>Average Rating: {nota}</span>
          <span>Release Date: {date}</span>
        </div>
      </article>
      <Link to='/TvShow' className='article__detail__link'>
        <button className='card__result__button detail'>
          Come back
          <span className='round'>
            <i className='fa fa-chevron-right'></i>
          </span>
        </button>
      </Link>
    </>
  );
};
TvShowDetail.propTypes = {
  tvshow: PropTypes.object,
};

export default TvShowDetail;
