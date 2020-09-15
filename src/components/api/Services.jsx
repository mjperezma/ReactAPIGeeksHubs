const ApiFetch = () => {
  const apiKey = 'a50802be70d47edd1d138b8fae303ab0';
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((shows) => {
        return {
          image: shows.poster_path,
          title: shows.title,
          orTitle: shows.original_title,
          date: shows.release_date,
          resume: shows.overview,
          id: shows.id,
          votes: shows.vote_count,
          nota: shows.vote_average,
          genres: shows.genre_ids,
        };
      });
    });
};
export default ApiFetch;
