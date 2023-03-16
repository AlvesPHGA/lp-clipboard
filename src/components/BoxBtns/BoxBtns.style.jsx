import styled from 'styled-components';
import { device } from '../../Styles/Breakpoints.style';

export const BoxBtnsStyle = styled.div`
   margin: 0 auto;
   display: flex;
   gap: 1.25rem;
   justify-content: center;
   align-items: center;

   @media ${device.mobileS} {
      flex-direction: column;
      gap: 1rem;
   }
`;
