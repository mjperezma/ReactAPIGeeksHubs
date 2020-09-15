import React from 'react';
import './MovieDetail.scss';
import {Link} from 'react-router-dom';

const MovieDetail = (props) => {
  let listaGeneros = props.genresTwo;
  // console.log(listaGeneros);
  // console.log(props.movie.genres);
  const {title, id, resume, image, nota, date, orTitle} = props.movie;

  let listaGenerosFiltrado = listaGeneros.map((genre) => {
    for (let x of props.movie.genres) {
      if (genre.id === x) {
        return `${genre.type} `;
      }
    }
  });

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
          <span>Average Rating: {nota}</span>
          <span>Release Date: {date}</span>
          <span> Genres: {listaGenerosFiltrado}.</span>
        </div>
      </article>
      <Link to='/' className='article__detail__link'>
        <button className='card__movie__button detail'>
          Come back
          <span className='round'>
            <i className='fa fa-chevron-right'></i>
          </span>
        </button>
      </Link>
    </>
  );
};

export default MovieDetail;
