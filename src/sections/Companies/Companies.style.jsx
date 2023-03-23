import styled from 'styled-components';
import { device } from '../../Styles/Breakpoints.style';

export const CompaniesStyle = styled.section`
   padding: 5rem 0;
   opacity: 0;
   transition: 1s ease;

   & .companies {
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      align-items: center;

      @media ${device.mobileS} {
         display: flex;
         flex-direction: column;
         gap: 4rem;
      }
   }
`;

export const Company = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;
