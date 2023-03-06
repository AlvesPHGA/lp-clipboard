import styled from 'styled-components';

export const CTAStyle = styled.a`
   background: ${(props) =>
      props['data-cta'] === 'green'
         ? props.theme.colors.strong_cyan_prim
         : props.theme.colors.light_blue_prim};

   box-shadow: 0px 2px 0px 1px
      ${(props) =>
         props['data-cta'] === 'green'
            ? 'hsl(171, 66%, 30%)'
            : 'hsl(233, 100%, 49%)'};

   border-radius: 1.5rem;
   color: white;
   cursor: pointer;
   display: block;
   font-size: 1.25rem;
   font-weight: 500;
   padding: 1rem 1.5rem;
   width: fit-content;
   transition: all 0.7s;

   &:hover {
      opacity: 0.8;
      box-shadow: 0px 2px 0px 1px
         ${(props) =>
            props['data-cta'] === 'green'
               ? 'hsl(171, 66%, 35%)'
               : 'hsl(233, 100%, 55%)'};
   }
`;
