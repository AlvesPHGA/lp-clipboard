import Access from './sections/Access/Access';
import Companies from './sections/Companies/Companies';
import Download from './sections/Downloads/Download';
import Footer from './sections/Footer/Footer';
import History from './sections/History/History';
import Snippets from './sections/Snippets/Snippets';
import Header from './sections/Header/Header';
import Workflow from './sections/Workflow/Workflow';

function App() {
   return (
      <>
         <Header />
         <main>
            <History />
            <Snippets />
            {/* // 
            // <Access />
            // <Workflow />
            // <Companies />
            // <Download /> */}
         </main>
         <Footer />
      </>
   );
}

export default App;
