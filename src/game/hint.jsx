import React, { useState, useEffect } from 'react';

export function Hint(props) {
    const [hints, setHints] = useState(props.hintList);
    console.log('hints');
    console.log(hints); 


    return (
           
           <div className='hintListContainer'>
                <ul>
                { // Add a conditional check here
                    props.hintList.map((hint, idx) => {
                        return (
                            <li key={idx + 1} data-wordid={hint.wordId}>
                                - {hint.text}
                            </li>
                        );
                    })
                }
                </ul></div>
     
        
      
    );
    



}
export default Hint;