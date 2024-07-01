import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="logo_container">
          <a href="#">
            <img
              className="myntra_home"
              src="public/Image/myntra-2.svg"
              alt="Myntra Home Logo"
            />
          </a>
        </div>
        <nav className="nav_bar">
          {['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Studio'].map((item, index) => (
            <a href="#" key={index}>
              {item} {item === 'Studio' && <sup>New</sup>}
            </a>
          ))}
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          {[
            { icon: 'person', name: 'Profile' },
            { icon: 'favorite', name: 'Wishlist' },
            { icon: 'shopping_bag', name: 'Bag' },
          ].map((action, index) => (
            <div className="action_container" key={index}>
              <span className="material-symbols-outlined">{action.icon}</span>
              <span className="action_name">{action.name}</span>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
