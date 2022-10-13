import React from 'react';
import './header.css';

function Header() {
  return (
      <div className='header'>
          <nav>
              <div className='brand'>iBukunCoding</div>
              <ul>
                  <li>
                      <a href='/about'>About</a>
                  </li>
                  <li><a href='/contact'>Contact</a></li>
              </ul>

          </nav>
    </div>
  )
}

export default Header