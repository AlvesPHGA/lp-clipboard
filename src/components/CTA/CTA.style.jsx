import styled from 'styled-components';

export const CTAStyle = styled.a`
   display: block;
   width: fit-content;
   padding: 1rem 1.5rem;
   cursor: pointer;
   border-radius: 1.5rem;
   font-size: 1.25rem;
   font-weight: 500;
   color: white;

   background: ${(props) =>
      props['data-cta'] === 'green'
         ? props.theme.colors.strong_cyan_prim
         : props.theme.colors.light_blue_prim};
`;
