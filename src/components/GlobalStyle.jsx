import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *{
      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
   }

   h1{
      font-size: ${({ theme }) => theme.font_size.title};
   }

   h2{
      font-size: ${({ theme }) => theme.font_size.title_sec};
   }

   h3{
      font-size: ${({ theme }) => theme.font_size.sub_title};
   }

   p{
      font-size: ${({ theme }) => theme.font_size.text};
   }
`;
