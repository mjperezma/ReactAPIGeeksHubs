import React from 'react';
import PropTypes from 'prop-types';
import './MovieDetail.scss';
import {Link} from 'react-router-dom';

const MovieDetail = ({movie, genresTwo}) => {
  console.log(movie);
  let listaGeneros = genresTwo;
  const {title, id, overview, poster_path, vote_average, release_date, original_title} = movie;

  let genderFiltered = listaGeneros.map((genre) => {
    for (let x of movie.genre_ids) {
      if (genre.id === x) {
        return `${genre.type} `;
      }
    }
  });

  return (
    <>
      <article className='article__detail'>
        <img className='article__detail__img' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={title} />
        <div>
          <h3 className='article__detail__title' id={id}>
            {title}
          </h3>
          <h3>Original Title : {original_title}</h3>
          <span className='article__detail__resume'>{overview}</span>
          <span>Average Rating: {vote_average}</span>
          <span>Release Date: {release_date}</span>
          <span> Genres: {genderFiltered}.</span>
        </div>
      </article>
      <Link to='/' className='article__detail__link'>
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

MovieDetail.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetail;
