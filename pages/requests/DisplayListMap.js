import React from 'react';
import Display from './Display';
 
const DisplayList = ({displayList}) => {
   return (
       <div>
           {displayList.map((display) => {
               return (
                   <Display 
                        key={display.id} 
                        display={display}
                    />
               )
           })}

       </div>
   );
};
 
export default DisplayList;