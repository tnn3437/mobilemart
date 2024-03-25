import React, {useState} from 'react';
import './Home.css';

function Home() {
   
  return (
    <>
      <head>
        <title>Mobile Mart</title>
      </head>
      <body>
        <div class="sidebar">
          <div class="logo">
            <a href="#">
              <img src="mobilemart/src/img/logo.jpeg" alt="Logo" />
            </a>
          </div>

          <div class="navigation">
            <ul>
              <li>
                <a href="#">
                  <span class="fa fa-home"></span>
                  <span>Home</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="fa fa-search"></span>
                  <span>Inventory</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="fa fas fa-book"></span>
                  <span>Sales</span>
                </a>
              </li>

              <li>
                <a href="#">
                  <span class="fa fas fa-plus-square"></span>
                  <span>Products</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </>
    
  )
}

export default Home