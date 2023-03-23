import styled from 'styled-components';
import { device } from '../../Styles/Breakpoints.style';

export const WorkflowStyle = styled.section`
   text-align: center;
   padding: 2.5rem 0;
   opacity: 0;
   transition: 1s ease;
   transform: translateX(-200px);

   & p {
      margin-top: 1.75rem;

      @media ${device.mobileS} {
         margin-top: 1rem;
         line-height: 1.875rem;
      }
   }
`;

export const BoxWork = styled.section`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 0.75rem;
   margin-top: 4.5rem;

   @media ${device.mobileS} {
      display: flex;
      flex-direction: column;
      margin-top: 3.5rem;
   }
`;

export const Work = styled.div`
   &:nth-child(2) {
      @media ${device.mobileS} {
         margin: 3rem 0;
      }
   }

   & .image {
      width: 50px;
      height: 40px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
   }

   & p {
      line-height: 2rem;
   }
`;
