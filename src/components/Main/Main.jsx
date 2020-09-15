import React from 'react';
import CarouselMovies from '../Carousel/Carousel.jsx';
import MovieList from '../MovieList/MovieList.jsx';

import './Main.scss';

const Main = (props) => {
  return (
    <main>
      <section>
        <CarouselMovies />
        <MovieList movies={props.movies} />
      </section>
    </main>
  );
};

export default Main;
