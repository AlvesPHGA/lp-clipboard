import styled from 'styled-components';
import { device } from '../../Styles/Breakpoints.style';
import { theme } from '../../Theme';

export const FooterStyle = styled.footer`
   padding: 2rem 0;
   background: #eee;

   @media ${device.mobileS} {
      padding: 1rem 0;
   }

   @media ${device.mobileM} {
      padding: 1rem 0;
   }
`;

export const BoxContentFooter = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media ${device.mobileS} {
      flex-direction: column;
      gap: 2rem;
   }

   @media ${device.mobileM} {
      flex-direction: column;
      gap: 2rem;
   }

   & .logo img {
      @media ${device.mobileS} {
         width: 100px;
      }

      @media ${device.mobileM} {
         width: 100px;
      }
   }

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
         color: ${theme.colors.dark_grayish_blue_neu};
         transition: all 0.3s ease;

         &:hover {
            color: ${theme.colors.strong_cyan_prim};
         }
      }

      @media ${device.mobileS} {
         display: flex;
         flex-direction: column;
         gap: 1rem;
         text-align: center;
      }

      @media ${device.mobileM} {
         display: flex;
         flex-direction: column;
         gap: 1rem;
         text-align: center;
      }
   }

   & .social-media {
      & img {
         width: 30px;
         cursor: pointer;
         transition: all 0.3s ease-in-out;

         &:hover {
            transform: scale(1.1);
         }

         &:nth-child(2) {
            margin: 0 1rem;
         }
      }
   }
`;
