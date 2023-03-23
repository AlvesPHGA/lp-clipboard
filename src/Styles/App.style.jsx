import styled from 'styled-components';

export const AppStyle = styled.div`
   & .active {
      opacity: 1;
      transition: 2s;
      transform: initial;

      & .show-top {
         transform: initial;
      }

      & .show-right {
         transform: initial;
      }
      & .show-left {
         transform: initial;
      }
   }

   & .show-top {
      transform: translateY(-200px);
      transition: 1.2s;
   }

   & .show-right {
      transform: translateX(-200px);
      transition: 1.2s;
   }

   & .show-left {
      transform: translateX(200px);
      transition: 1.2s;
   }
`;
