import React from 'react';
import logo from '../img/react-logo.svg';
import styles from './Header.scss';

const Header = ({ sidebarIsHidden, hideShowSidebar }) => {
  const { header, header_button, header_emoji, header_logo } = styles;

  return (
    <header className={header}>
      <button
        className={header_button}
        onClick={() => hideShowSidebar(!sidebarIsHidden)}
      >
        <span role="img" aria-label="hamburger" className={header_emoji}>
          🍔
        </span>
      </button>
      <div className={header_logo}>
        <span>React</span>
        <img src={logo} alt="logo" height="36" width="36" />
        <span>News</span>
      </div>
    </header>
  );
};

export default Header;
