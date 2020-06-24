// import Navigation from '../../molecules/Navigation';
import React, { useState } from 'react';
import Burger from '../../atoms/Burger';
import Facebook from '../../../public/svg/facebook.svg';
import Twitter from '../../../public/svg/twitter.svg';
import Youtube from '../../../public/svg/youtube.svg';

function DefaultLayoutSidebar() {
  const [burgerMenuIsOpened, setStatus] = useState(false);
  const socialIcons = [<Facebook />, <Twitter />, <Youtube />].map((elem, index) => {
    return (
      <li
        key={index.toString()}
        className="[ h-10-0 flex items-center justify-center w-full border-b border-border border-solid ]"
      >
        {elem}
      </li>
    );
  });
  return (
    <ul className="[ text-white z-2 w-10-0 flex flex-col items-center border-r border-border border-solid ]">
      <li className="[ h-10-0 flex items-center justify-center w-full border-b border-border border-solid ]">
        <Burger isOpened={burgerMenuIsOpened} onClick={() => setStatus(!burgerMenuIsOpened)} />
      </li>
      {socialIcons}
    </ul>
  );
}

export default DefaultLayoutSidebar;
