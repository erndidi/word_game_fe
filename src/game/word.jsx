import React, { useState, useEffect } from 'react';
import Letter from './letter';
import Hint from './hint';
import { rtnRandIdx } from '../utility';
import {rtnIdxArray} from '../utility'
import Options from './options';




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

    const fetchWord = async () => {
        try {
            //console.log("session id is "+sessionId);
            const response = await fetch('https://localhost:7077/api/Word?sessionId=empty');
            const data = await response.json();
      
          
            initWord(data);

            // Handle the response here

        } catch (error) {
            console.error('Error fetching word:', error);
        }
    }; 


    useEffect(() => {
        // Define an async function
        fetchWord(); // Call the fetchWord function when the component mounts
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
          
            const defs = [];
            var incremeter=0;
            const incdefs = (el,idx,array) =>{
                const def = {"wordId":el.WordId,"text": el.Text,"key":incremeter};
                defs.push(def);
                console.log("defs")
                console.log(defs);
                incremeter++;
            }
           
            const newHints = data.Definitions.map(incdefs);            
            console.log("new hints");
            console.log(newHints);
             setHints(newHints);
        } catch (error) {
            console.log("init word error is " + error);
        }
    }
    //setHints(workHint);
    function removeHint() {
        console.log("remove hint");
        let filteredHints = hints.filter((hint) => hint.wordId !== wordId);
        const truDef = hints.find((hint) => hint.wordId === wordId);
        let removed = false;
        console.log(truDef);
        console.log("filtered hints is " + filteredHints.length);
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
     console.log("")
        if (letter_of_rec[idx] === attempt) {            
            handleAttemptArray[idx].letter = letter_of_rec[idx];
            handleAttemptArray[idx].readonly = true;            
            console.log("on attempt game letters");
            console.log(game_letters);
        }
       setGameLetters([...handleAttemptArray]);
    };

    const revealLetter = () => {
         const indexArray = rtnIdxArray(game_letters);
         const randomIndex = rtnRandIdx(indexArray);
                 console.log("index array is "+indexArray);
        console.log("letter of rec random" + letter_of_rec[randomIndex])
        const revealedLetterObject = {letter: letter_of_rec[randomIndex], readonly: true};
        let workArray = game_letters;
        workArray[randomIndex] = revealedLetterObject;
        console.log(workArray);
        setGameLetters([...workArray]);
       // console.log("game_letters in addletter is now " + game_letters);
    }



    //returns an a array that contains indexes where players haven't guessed a letter
    

    return (
        <div className='wordWrapper'>
            <p>{word}</p>
            <p>{word.length-1}</p>
            <div className="letter_box">
                <Letter
                    game_letters={game_letters}
                    handleAttempt={onHandleAttempt}
                ></Letter>
                <Hint truWordId={wordId} hintList={hints}></Hint>
                <Options handleNewGame={newGame} handleRemoveHint={removeHint} handleRevealLetter={revealLetter}/>

            </div>

           
        </div>

    );
};
export default Word;