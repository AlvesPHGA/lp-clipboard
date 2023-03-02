import styled from 'styled-components';

import backSub from '../../assets/bg-header-desktop.png';

export const SubheaderStyle = styled.section`
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
