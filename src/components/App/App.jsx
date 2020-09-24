import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from '../Header/Header.jsx';
import ApiFetchGender from '../api/ServicesGender.jsx';
import Main from '../Main/Main';
import {Route, Switch} from 'react-router-dom';
import MovieDetail from '../MovieDetail/MovieDetail';
import Footer from '../Footer/Footer';
import ApiFetchTv from '../api/ServicesTv.jsx';
import TvShowList from '../TvShowList/TvShowList.jsx';
import TvShowDetail from '../TvShowDetail/TvShowDetail.jsx';
import useSearch from '../api/ServicesMovies.jsx';

function App() {
  const [genres, setGenderFilter] = useState([]);
  const [tvshows, setTvShows] = useState([]);
  const {movies, loadMoreMovies} = useSearch();

  useEffect(() => {
    ApiFetchGender().then((data) => {
      setGenderFilter(data);
    });
  }, []);

  useEffect(() => {
    ApiFetchTv().then((data) => {
      setTvShows(data);
    });
  }, []);

  const renderMovieDetail = (props) => {
    const movieDetailId = parseInt(props.match.params.id);
    const foundMovie = movies.find((movie) => movie.id === movieDetailId);
    if (foundMovie === undefined) {
      return <p>This dont exist</p>;
    } else {
      return <MovieDetail movie={foundMovie} genresTwo={genres} />;
    }
  };

  const renderTvShowDetail = (props) => {
    const tvShowDetailId = parseInt(props.match.params.id);
    const foundTvShow = tvshows.find((tvshow) => tvshow.id === tvShowDetailId);
    if (foundTvShow === undefined) {
      return <p>This dont exist</p>;
    } else {
      return <TvShowDetail tvshow={foundTvShow} />;
    }
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main movies={movies} loadMoreMovies={loadMoreMovies} />
        </Route>
        <Route path='/moviedetail/:id' render={renderMovieDetail} />
        <Route path='/TvShow'>
          <TvShowList tvshows={tvshows} />
        </Route>
        <Route path='/tvshowdetail/:id' render={renderTvShowDetail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
