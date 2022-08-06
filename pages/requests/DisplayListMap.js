import React from 'react';
import Display from './Display';
 
const DisplayList = ({displayList}) => {
   return (
       <div>
           {displayList.map(display => {
               return (
                   <Display display={display}/>
               )
           })}
       </div>
   );
};
 
export default DisplayList;