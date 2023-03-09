import Access from './sections/Access/Access';
import Companies from './sections/Companies/Companies';
import History from './sections/History/History';
import Snippets from './sections/Snippets/Snippets';
import Subheader from './sections/Subheader/Subheader';
import Workflow from './sections/Workflow/Workflow';

function App() {
   return (
      <>
         <Subheader />
         <History />
         <Snippets />
         <Access />
         <Workflow />
         <Companies />
      </>
   );
}

export default App;
