import React from 'react';
import styled from 'styled-components';

import backSub from '../assets/bg-header-desktop.png';
import logoSub from '../assets/logo.svg';

const SubheaderStyled = styled.section`
   background: url(${backSub}) no-repeat center;
   background-size: cover;
   height: 260px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   & img {
      width: 100px;
   }
`;

const Subheader = () => {
   return (
      <>
         <SubheaderStyled>
            <img src={logoSub} alt="Logo Clipboard" />
         </SubheaderStyled>
      </>
   );
};

export default Subheader;
