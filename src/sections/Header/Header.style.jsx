import styled from 'styled-components';

import backSub from '../../assets/bg-header-desktop.png';
import backSubMob from '../../assets/bg-header-mobile.png';

import { device } from '../../Styles/Breakpoints.style';

export const HeaderStyle = styled.header`
   background: url(${backSub}) no-repeat center;
   background-size: cover;
   height: 260px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   @media ${device.mobileS} {
      height: 120px;
      background: url(${backSubMob}) no-repeat center;
   }

   & img {
      width: 100px;

      @media ${device.mobileS} {
         width: 80px;
      }
   }
`;
