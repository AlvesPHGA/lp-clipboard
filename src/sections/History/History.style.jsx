import styled from 'styled-components';
import { device } from '../../Styles/Breakpoints.style';

export const HistoryStyle = styled.section`
   padding: 5rem 0;
   text-align: center;

   @media ${device.mobileS} {
      padding: 2.5rem 0;
   }

   & p {
      width: 40rem;
      line-height: 1.875rem;
      margin: 1.25rem auto;

      @media ${device.mobileS} {
         width: 100%;
         margin: 1.5rem 0 2rem;
      }
   }
`;
