import { useEffect, useRef, useState } from 'react';
import './Header.css';
import IconSun from '../images/icon-sun.svg';
import IconMoon from '../images/icon-moon.svg';

const toggleBodyClass = () => {
  const bodyElement = document.querySelector('body');
  bodyElement.classList.toggle('light-theme');
};

const Header = () => {
  const switchRef = useRef();

  useEffect(() => {
    switchRef.current.addEventListener('click', toggleBodyClass);

    return () => {
      switchRef.current.removeEventListener('click', toggleBodyClass);
    };
  }, []);

  return (
    <header className='header'>
      <h1 className='title'>Todo</h1>
      <div ref={switchRef} className='switch-wrapper'>
        <img
          src={IconSun}
          className='switch-theme-icon show-light-icon'
          alt=''
        />
        <img
          src={IconMoon}
          className='switch-theme-icon show-dark-icon'
          alt=''
        />
      </div>
    </header>
  );
};

export default Header;
