import React, { useState, useEffect } from 'react';
import Letter from './letter';
import Hint from './hint';
import { rtnRandIdx } from '../utility';
import {rtnIdxArray} from '../utility'
import Options from './options';
import {PlayerContext} from '../context/playerprovider';




export function Word() {
    const [word, setWord] = useState ("");
    const [data, setData] = useState  ("");
    const [wordId, setWordId] = useState  (0);
    const [hints, setHints] = useState  ([])
    const [game_letters, setGameLetters] = useState  ([]);
    const [letter_of_rec, setLetterRec] = useState  ([]);
    const [sessionId, setSessionId] = useState ("empty")
    const [canShow, setCanShow] = useState  ("letter_input");
    const [letterAttempt, setLetterAttempt] = useState  ("");
    const [idx, setIdx] = useState  (0);
    const [username,score] = useState(PlayerContext);

    const fetchWord = async (letterLength) => {
        try {
            //console.log("session id is "+sessionId);
            
                   const response = await fetch(`https://localhost:7077/api/Word?wordLength=${letterLength}`);
            const data = await response.json();     
          
            initWord(data);

            }

         
            // Handle the response here

         catch (error) {
            console.error('Error fetching word:', error);
        }
    }; 
    const setLetterLength=(evt)=>{
        
        if(evt.target.value>0){
             fetchWord(evt.target.value);
        }
       
    }

   useEffect(() => {
        // Define an async function
      //  fetchWord(); // Call the fetchWord function when the component mounts
    }, []);

    useEffect(() => {
        // Define an async function      
        let worArray = word.split("").filter(function (e) { return e != " " }).map((e)=>e.toLowerCase());//removes empty array element at end of array            
        setLetterRec([...worArray]); // Call the fetchWord function when the component mount
        let worArray2 = [...worArray];
        worArray.fill(" ", 0, worArray2.length);
        const finalArray = new Array(worArray2.length);
        for (let i = 0; i < worArray.length; i++){
            finalArray[i] = { "letter": "", "readonly": false};       
        }      

        setGameLetters(finalArray);
    
    }, [word]);

    const initWord = (data) => {
        try {
            setWord(data.Text);
            setWordId(data.Id);
            const newHints = data.Definitions.map((definition) => ({
                wordId: definition.WordId,
                text: definition.Text,
                cssClass : "hintList"
            }));
           setHints(newHints);
        } catch (error) {
            console.log("init word error is " + error);
        }
    }
    //setHints(workHint);
    function removeHint() {
        let filteredHints = hints.filter((hint) => hint.wordId !== wordId);
        const truDef = hints.find((hint) => hint.wordId === wordId);
        let removed = false;
        let len = filteredHints.length;
        if (len > 1) {
            do {
                const random = Math.floor(Math.random() * (len));
                console.log("random is " + random);
                filteredHints.splice(random, 1);
                removed = true;
            } while (!removed)

            if (truDef) {
                filteredHints.push({ wordId: truDef.wordId, text: truDef.text });
            }
            setHints(filteredHints);
        }
    }
    //  filteredHints.push({wordId:truDef.wordId, text:truDef.text});

    const newGame = () => {
        fetchWord();
    }

    const onHandleAttempt = (attempt, idx) => {
        //console.log("letter of rec is "+letter_of_rec);
     let handleAttemptArray = [...game_letters];    
        if (letter_of_rec[idx] === attempt) {            
            handleAttemptArray[idx].letter = letter_of_rec[idx];
            handleAttemptArray[idx].readonly = true;    
        }
       setGameLetters([...handleAttemptArray]);
    };

    const revealLetter = () => {
         const indexArray = rtnIdxArray(game_letters);
         const randomIndex = rtnRandIdx(indexArray);                
        const revealedLetterObject = {letter: letter_of_rec[randomIndex], readonly: true};
        let workArray = game_letters;
        workArray[randomIndex] = revealedLetterObject;
       setGameLetters([...workArray]);
       // console.log("game_letters in addletter is now " + game_letters);
    }

   



    //returns an a array that contains indexes where players haven't guessed a letter
    

    return (
        <div className='wordWrapper'>
           
            <div className='letter_length_select'>
            <h3>Select the number of letters the word has</h3>
  <select onChange={setLetterLength}>
  <option value={0}>Select word length</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
            </select>
            </div>
          
            <div className="letter_box">
               {wordId > 0 &&  <Letter
                    game_letters={game_letters}
                    handleAttempt={onHandleAttempt}
                ></Letter>}
                {wordId>0  && <Hint truWordId={wordId} hintList={hints}></Hint>}
                <Options handleNewGame={newGame} handleRemoveHint={removeHint} handleRevealLetter={revealLetter}/> 
            </div>

           
        </div>

    );
};
export default Word;