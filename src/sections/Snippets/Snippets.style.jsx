import styled from 'styled-components';

import BackComputer from '../../assets/image-computer.png';
import { device } from '../../Styles/Breakpoints.style';

export const SnippetsStyle = styled.section`
   text-align: center;
   padding: 5rem 0;

   @media ${device.mobileS} {
      width: 100%;
   }

   & p {
      width: 44rem;
      line-height: 1.875rem;
      margin: 1.25rem auto;

      @media ${device.mobileS} {
         width: 100%;
         margin-bottom: 2rem;
      }
   }
`;

export const Functionalities = styled.section`
   padding-top: 2.5rem;
   display: grid;
   grid-template-columns: 1fr 1fr;
   align-items: center;

   @media ${device.mobileS} {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1.25rem 15px;
      gap: 3rem;
   }
`;

export const BoxImg = styled.div`
   width: 90%;
   height: 70vh;
   background: url(${BackComputer}) no-repeat;
   background-position: -50px center;
   background-size: contain;

   @media ${device.mobileS} {
      width: 100%;
      flex-direction: column;
      padding-top: 1.25rem;
      background-position: center;
      height: 40vh;
   }
`;

export const BoxFunctionalities = styled.div`
   padding-left: 100px;
   display: flex;
   flex-direction: column;
   gap: 2rem;

   @media ${device.mobileS} {
      padding-left: 0;
      gap: 3rem;
   }
`;

export const Functionality = styled.div`
   text-align: left;

   @media ${device.mobileS} {
      text-align: center;
   }

   & h3 {
      margin-bottom: 0.75rem;
   }

   & p {
      padding: 0;
      width: 412px;
      text-align: left;
      margin: 0;

      @media ${device.mobileS} {
         width: 100%;
         text-align: center;
      }
   }
`;
