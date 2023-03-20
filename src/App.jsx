import Access from './sections/Access/Access';
import Companies from './sections/Companies/Companies';
import Download from './sections/Downloads/Download';
import Footer from './sections/Footer/Footer';
import History from './sections/History/History';
import Snippets from './sections/Snippets/Snippets';
import Header from './sections/Header/Header';
import Workflow from './sections/Workflow/Workflow';
import React from 'react';

function App() {
   React.useEffect(() => {
      const elements = document.querySelectorAll('section');
      const heightWin = window.innerHeight;

      window.addEventListener('scroll', () => {
         elements.forEach((element) => {
            const el = element.getBoundingClientRect().y;
            if (el < heightWin * 0.8) {
               element.classList.add('active');
            }
            if (el < heightWin * 0.1 || el > heightWin * 0.8) {
               element.classList.remove('active');
            }
         });
      });
   }, []);

   return (
      <>
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
      </>
   );
}

export default App;
