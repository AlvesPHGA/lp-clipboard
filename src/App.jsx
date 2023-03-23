import Access from './sections/Access/Access';
import Companies from './sections/Companies/Companies';
import Download from './sections/Downloads/Download';
import Footer from './sections/Footer/Footer';
import History from './sections/History/History';
import Snippets from './sections/Snippets/Snippets';
import Header from './sections/Header/Header';
import Workflow from './sections/Workflow/Workflow';
import React from 'react';
import { AppStyle } from './Styles/App.style';
import Head from './components/Head/Head';

function App() {
   React.useEffect(() => {
      const elements = document.querySelectorAll('section');
      const heightWin = window.innerHeight;

      elements[0].classList.add('active');

      window.addEventListener('scroll', () => {
         elements.forEach((element) => {
            const el = element.getBoundingClientRect();

            if (el.y < heightWin * 0.8) element.classList.add('active');
            if (el.y > heightWin * 0.8) element.classList.remove('active');
         });
      });
   }, []);

   return (
      <AppStyle>
         <Head
            title="Clipboard"
            description="Clipboard allows you to track and organize everything you compy. Instantly access your clipboard on all your devices."
         />
         <Header />
         <main>
            <History />
            <Snippets />
            <Access />
            <Workflow />
            <Companies />
            <Download />
         </main>
         <Footer />
      </AppStyle>
   );
}

export default App;
