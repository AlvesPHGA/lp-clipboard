import styled from 'styled-components';

import BackComputer from '../../assets/image-computer.png';

export const SnippetsStyle = styled.section`
   text-align: center;
   padding: 5rem 0;

   & p {
      width: 44rem;
      line-height: 1.875rem;
      margin: 1.25rem auto;
   }
`;

export const Functionalities = styled.section`
   padding-top: 2.5rem;
   display: grid;
   grid-template-columns: 1fr 1fr;
   align-items: center;
`;

export const BoxImg = styled.div`
   width: 90%;
   height: 70vh;
   background: url(${BackComputer}) no-repeat;
   background-position: -50px center;
   background-size: contain;
`;

export const BoxFunctionalities = styled.div`
   padding-left: 100px;
   display: flex;
   flex-direction: column;
   gap: 2rem;
`;

export const Functionality = styled.div`
   text-align: left;

   & h3 {
      margin-bottom: 0.75rem;
   }

   & p {
      padding: 0;
      width: 412px;
      text-align: left;
      margin: 0;
   }
`;
