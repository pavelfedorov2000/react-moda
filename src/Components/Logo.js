import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.svg';

function Logo({ className, width, height }) {
  return (
    <div className={`logo ${className}__logo`}>
      <Link path="/" className="logo__link">
        <img className={`logo__img ${className}__logo-img`} src={logo} alt="Логотип City Moda" width={width} height={height} />
      </Link>
    </div>
  );
}

export default Logo;