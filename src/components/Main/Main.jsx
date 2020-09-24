import React from 'react';
import CarouselMovies from '../Carousel/Carousel.jsx';
import MovieList from '../MovieList/MovieList.jsx';

import './Main.scss';

const Main = ({movies, loadMoreMovies}) => {
  return (
    <main>
      <section>
        <CarouselMovies />
        <MovieList movies={movies} loadMoreMovies={loadMoreMovies} />
      </section>
    </main>
  );
};

export default Main;
