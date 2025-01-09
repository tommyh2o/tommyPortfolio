import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">TQH</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Experience</Link></li>
          {/* <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
