import React from 'react';

import logoSub from '../../assets/logo.svg';
import { SubheaderStyle } from './Subheader.style';

const Subheader = () => {
   return (
      <>
         <SubheaderStyle>
            <img src={logoSub} alt="Logo Clipboard" />
         </SubheaderStyle>
      </>
   );
};

export default Subheader;
