import React from 'react';
import {Link} from 'react-router-dom';
import '../Header/Header.scss';
import logo from '../../images/cine.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__div'>
        <img className='header__logo' src={logo} alt='AppLogo' />
        <h2 className='header__title'>AppFilm</h2>
      </div>
      <nav className='header__menu'>
        <ul className='header__menu__list'>
          <li className='header__menu__item'>why filmapp?</li>
          <Link to='/' className='link'>
            <li className='header__menu__item'>home</li>
          </Link>
          <Link to='/TvShow' className='link'>
            <li className='header__menu__item'>TV SHOWS</li>
          </Link>
        </ul>
      </nav>
      <ul className='header__login'>
        <li className='header__login__item'>registrer</li>
        <li className='header__login__item sing'>sing up</li>
      </ul>
    </header>
  );
};

export default Header;
