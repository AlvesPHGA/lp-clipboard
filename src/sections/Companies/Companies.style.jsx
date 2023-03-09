import styled from 'styled-components';

export const CompaniesStyle = styled.section`
   padding: 5rem 0;
   & .companies {
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      align-items: center;
   }
`;

export const Company = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;
