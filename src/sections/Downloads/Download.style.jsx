import styled from 'styled-components';
import { device } from '../../Styles/Breakpoints.style';

export const DownloadStyle = styled.section`
   padding: 5rem 0;
   text-align: center;
   opacity: 0;
   transition: 1s ease;

   &.active {
      opacity: 1;
      transition: 2s;
   }

   @media ${device.mobileS} {
      padding: 2.5rem 0 5rem;
   }

   & p {
      width: 45rem;
      margin: 1rem auto 2.5rem;
      line-height: 2rem;

      @media ${device.mobileS} {
         width: 100%;
         line-height: 1.875;
      }
   }
`;
