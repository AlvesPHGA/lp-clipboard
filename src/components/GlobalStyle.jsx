import { createGlobalStyle } from 'styled-components';
import { device } from '../Styles/Breakpoints.style';

export const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap');

   *{
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
   }

   body{
      font-family: 'Bai Jamjuree', sans-serif;
   }

   h1, h2, h3{
      color: ${({ theme }) => theme.colors.dark_grayish_blue_neu};
      font-weight: 600;
   }

   h1{
      font-size: ${({ theme }) => theme.font_size.title};

      @media ${device.mobileS} {
      font-size: 1.75rem;
   }
   }

   h2{
      font-size: ${({ theme }) => theme.font_size.title_sec};
   }

   h3{
      font-size: ${({ theme }) => theme.font_size.sub_title};
   }

   p{
      color: ${({ theme }) => theme.colors.grayish_blue_neu};
      font-size: ${({ theme }) => theme.font_size.text};
      font-weight: 400;
   }
`;
