import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from '../Header/Header.jsx';
import ApiFetch from '../api/Services.jsx';
import ApiFetchGender from '../api/ServicesGender.jsx';
import Main from '../Main/Main';
import {Route, Switch} from 'react-router-dom';
import MovieDetail from '../MovieDetail/MovieDetail';
import Footer from '../Footer/Footer';
import ApiFetchTv from '../api/ServicesTv.jsx';
import TvShowList from '../TvShowList/TvShowList.jsx';
import TvShowDetail from '../TvShowDetail/TvShowDetail.jsx';

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenderFilter] = useState([]);
  const [tvshows, setTvShows] = useState([]);

  useEffect(() => {
    ApiFetch().then((data) => {
      setMovies(data);
    });
  }, []);

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
          <Main movies={movies} />
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
