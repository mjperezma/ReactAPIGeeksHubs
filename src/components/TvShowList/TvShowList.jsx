import React from 'react';
import PropTypes from 'prop-types';
import TvShowCard from '../TvShowCard/TvShowCard.jsx';

const TvShowList = (props) => {
  return (
    <>
      <h2 className='container__results__title'>most voted tv shows</h2>
      <ul className='container__results'>
        {props.tvshows.map((tvshow) => {
          return (
            <li className='container__results__list' key={tvshow.id}>
              <TvShowCard tvshow={tvshow} tvshows={props.tvshows} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

TvShowList.propTypes = {
  tvshows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TvShowList;
