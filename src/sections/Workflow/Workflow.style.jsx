import styled from 'styled-components';

export const WorkflowStyle = styled.section`
   text-align: center;
   padding: 2.5rem 0;

   & p {
      margin-top: 1.75rem;
   }
`;

export const BoxWork = styled.section`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 0.75rem;
   margin-top: 4.5rem;
`;

export const Work = styled.div`
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
