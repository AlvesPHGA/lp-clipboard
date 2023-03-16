import React from 'react';

import logoSub from '../../assets/logo.svg';
import { HeaderStyle } from './Header.style';

const Header = () => {
   return (
      <>
         <HeaderStyle>
            <img src={logoSub} alt="Logo Clipboard" />
         </HeaderStyle>
      </>
   );
};

export default Header;
