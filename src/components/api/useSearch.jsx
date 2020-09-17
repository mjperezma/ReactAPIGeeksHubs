import React, {useEffect, useState} from 'react';

const useSearch = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=a50802be70d47edd1d138b8fae303ab0&language=en-US&page=1')
      .then((res) => res.json())
      .then((res) => setMovies(res.results))
      .catch((e) => console.error(e));
  }, []);

  const loadMoreMovies = () => {
    setPage(page + 1);
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a50802be70d47edd1d138b8fae303ab0&language=en-US&page=${page}`)
      .then((res) => res.json())
      .then((res) => setMovies([...movies, ...res.results]))
      .catch((e) => console.error(e));
  };

  return {movies, page, setMovies, loadMoreMovies, setPage};
};

export default useSearch;
