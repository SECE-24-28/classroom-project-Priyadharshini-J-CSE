import React from 'react';
import { HomeStyle } from './home-style';

const ShopNow = () => {
  return (
    <HomeStyle>
      <nav>
        <img src="" alt="" />
        <div>
          <ul>
            <a href="">Home</a>
            <a href="">Explore</a>
            <a href="">About us</a>
            <a href="">Trending</a>
            <a href="">Contact</a>

          </ul>
        </div>
        <div>
          <button>Sign In</button>
          <button>Register</button>
        </div>
      </nav>

      <div className="left">
        <h1>Furniture That Elevates Your Space</h1>
        <p>Crafted for comfort. Designed for modern living.</p>
      </div>
    </HomeStyle>
  );
};

export default ShopNow;
