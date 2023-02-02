import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyle } from './components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <App />
      </ThemeProvider>
   </React.StrictMode>,
);
