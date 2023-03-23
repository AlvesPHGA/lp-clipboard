import styled from 'styled-components';
import { device } from '../../Styles/Breakpoints.style';

export const AccessStyle = styled.section`
   padding: 5rem 0;
   text-align: center;
   opacity: 0;
   transition: 1s ease;

   &.active {
      opacity: 1;
      transition: 2s;
   }

   @media ${device.mobileS} {
      padding: 2.5rem 0;
   }

   & p {
      margin: 2rem 0 3rem;
      padding: 0 15rem;

      @media ${device.mobileS} {
         padding: 0;
         line-height: 1.875rem;
      }
   }

   & img {
      @media ${device.mobileS} {
         width: 100%;
      }
   }
`;
