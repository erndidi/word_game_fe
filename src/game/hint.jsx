import React, { useState, useEffect } from 'react';

export function Hint(props) {
    const [hints, setHints] = useState(props.hintList);


    return (
        <div className='hintList'>       
            <ul>
                { // Add a conditional check here
                    props.hintList.map((hint, idx) => {
                        console.log("hint");
                        console.log(hint);
                        return (
                            <li key={hint.wordId} data-wordid={hint.wordId}>
                                {hint.text}
                            </li>
                        );
                    })
                }
                </ul>
        </div>
    );
    



}
export default Hint;