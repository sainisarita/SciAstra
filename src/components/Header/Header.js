import React from 'react';
import './Header.css'
const Header = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                Team Page
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
