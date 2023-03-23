import React from 'react';

const Head = () => {
   React.useEffect(() => {
      document.title = `Clipboard`;
   }, []);
   return;
};

export default Head;
