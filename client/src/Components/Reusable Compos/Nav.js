import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Home from '../Regular Compos/Home';

const Nav = () => {
  const location = useLocation();
  const [status, setStatus] = useState(location.pathname.slice(1) || 'home');

  const handleClickBtn = (value) => {
    setStatus(value);
  };
  console.log(status)

  return (
    <div>
      <div className="nav-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              className={`nav-link ${status === 'home' ? 'act' : 'inactive'}`}
              to="/"
              onClick={() => handleClickBtn('home')}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${status === 'about' ? 'act' : 'inactive'}`}
              to="/about"
              onClick={() => handleClickBtn('about')}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${status === 'star' ? 'act' : 'inactive'}`}
              to="/star"
              onClick={() => handleClickBtn('star')}
            >
             Plasmon
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${status === 'explore' ? 'act' : 'inactive'}`}
              to="/explore"
              onClick={() => handleClickBtn('explore')}
            >
              Explore
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${status === 'orbitExo' ? 'act' : 'inactive'}`}
              to="/orbitExo"
              onClick={() => handleClickBtn('orbitExo')}
            >
              ExoVoyage
            </Link>
          </li>
        </ul>
      </div>
   
    </div>
  );
};

export default Nav;
