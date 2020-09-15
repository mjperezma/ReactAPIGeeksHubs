const ApiFetchGender = () => {
  const apiKey = 'a50802be70d47edd1d138b8fae303ab0';
  return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then((response) => response.json())
    .then((data) => {
      return data.genres.map((genre) => {
        return {
          id: genre.id,
          type: genre.name,
        };
      });
    });
};
export default ApiFetchGender;
