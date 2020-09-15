const ApiFetchTV = () => {
  const apiKey = 'a50802be70d47edd1d138b8fae303ab0';
  return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((tvshow) => {
        return {
          image: tvshow.poster_path,
          title: tvshow.name,
          orTitle: tvshow.original_name,
          resume: tvshow.overview,
          id: tvshow.id,
          popularity: tvshow.popularity,
          date: tvshow.first_air_date,
          votes: tvshow.vote_count,
          nota: tvshow.vote_average,
          genres: tvshow.genre_ids,
        };
      });
    });
};
export default ApiFetchTV;
