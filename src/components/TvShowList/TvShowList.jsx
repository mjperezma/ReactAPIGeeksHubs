import React from 'react';
import TvShowCard from '../TvShowCard/TvShowCard.jsx';

const TvShowList = (props) => {
  return (
    <>
      <h2 className='container__movies__title'>most voted tv shows</h2>
      <ul className='container__movies'>
        {props.tvshows.map((tvshow) => {
          return (
            <li className='container__movies__list' key={tvshow.id}>
              <TvShowCard tvshow={tvshow} tvshows={props.tvshows} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TvShowList;
