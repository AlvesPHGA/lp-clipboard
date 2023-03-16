import styled from 'styled-components';
import { device } from './Breakpoints.style';

export const Wrap__1200 = styled.div`
   margin: 0 auto;
   position: relative;
   width: 1200px;

   @media ${device.mobileS} {
      width: 100%;
      margin: 0;
      padding: 0 15px;
   }
`;
