import React, { useState, useEffect } from 'react';



 function Letter(props) {
    const [gameLetters, setGameLetters] = useState([]);
    const [game_letters, setGame_Letters] = useState([]);
    // setGameLetters(props.game_letters);
  

     useEffect(() => {
         let workArray = [...props.game_letters];
         setGame_Letters(workArray);       
     }, [props.game_letters]);

    const handleInputChange = (index, event) => {
        if (/[a-zA-Z]/.test(event.target.value)) {
            if (/[a-zA-Z]/.test(event.target.value)) {
             //   console.log("attempt "+event.target.value);
                // Now you have the pressed letter and the index
                let attempt = event.target.value;                
                props.handleAttempt(attempt, index);
                // Perform actions for letters
            }
        }
        };

        return (
            <React.Fragment>
                <label>

                    {game_letters.length > 0 && // Add a conditional check here
                        game_letters.map((letter, idx) => {
                            return (

                                <input
                                    key={idx}
                                    className='letter_input'
                                    type="text"
                                    value={letter.letter}
                                    readOnly={letter.readonly} // Add the readonly attribute here
                                     onChange={(e) => handleInputChange(idx, e)}
                                />
                            );
                        })
                    }
                </label>
            </React.Fragment>
        );
    };


export default Letter