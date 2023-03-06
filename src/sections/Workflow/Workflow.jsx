import React from 'react';
import { Wrap__1200 } from '../../Styles/Styles.style';
import { BoxWork, Work, WorkflowStyle } from './Workflow.style';

const Workflow = () => {
   return (
      <WorkflowStyle>
         <Wrap__1200>
            <h2>Supercharge your workflow</h2>
            <p>We've got the tools to boost your productivity.</p>

            <BoxWork>
               <Work></Work>
            </BoxWork>
         </Wrap__1200>
      </WorkflowStyle>
   );
};

export default Workflow;
