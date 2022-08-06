import React from 'react';
 
const Display = ({display}) => {
   return (
       <div key={display}>
           {display.task}
       </div>
   );
};
 
export default Display;