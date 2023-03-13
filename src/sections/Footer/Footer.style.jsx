import styled from 'styled-components';

export const FooterStyle = styled.footer`
   padding: 1.25rem 0;
`;

export const BoxContentFooter = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   & .link-footer {
      display: grid;
      gap: 1.25rem;
      grid-template-areas:
         'faq privacy guide'
         'contact kit .';

      & .faq {
         grid-area: 'faq';
      }

      & .privacy {
         grid-area: 'privacy';
      }

      & .guide {
         grid-area: 'guide';
      }

      & .contact {
         grid-area: 'contact';
      }

      & .kit {
         grid-area: 'kit';
      }

      & a {
         font-size: 1.125rem;
         text-decoration: none;
         line-height: normal;
      }
   }
`;
