import React from 'react';
import logo from '../img/react-logo.svg';

const Header = ({ sidebarIsHidden, hideShowSidebar }) => {
  return (
    <header className="header">
      <button
        className="header_button"
        onClick={() => hideShowSidebar(!sidebarIsHidden)}
      >
        <span role="img" aria-label="hamburger" className="header_emoji">
          🍔
        </span>
      </button>
      <div className="header_logo">
        <span>React</span>
        <img src={logo} alt="logo" height="36" width="36" />
        <span>News</span>
      </div>
    </header>
  );
};

export default Header;
