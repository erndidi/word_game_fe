import React, { useState, useEffect, useContext } from 'react';
import Letter from './letter';
import Hint from './hint';
import { rtnRandIdx } from '../utility';
import {rtnIdxArray} from '../utility'
import Options from './options';
import {PlayerContext} from '../context/playerprovider';
import { compareTwoArrays } from '../utility';




export function Word() {    
    const [word, setWord] = useState ("");
    const [firstElem, setFirstElem] = useState("");
    const [wordArray, setWordArray] = useState([]);
    const [data, setData] = useState  ("");
    const [wordId, setWordId] = useState  (0);
    const [hints, setHints] = useState  ([])
    const [game_letters, setGameLetters] = useState  ([]);
    const [letter_of_rec, setLetterRec] = useState  ([]);
    const [sessionId, setSessionId] = useState ("empty")
    const [canShow, setCanShow] = useState  ("letter_input");
    const [letterTry, setLetterTry] = useState(0);
    const [idx, setIdx] = useState  (0);  
    const [gameFinished, setGameFinished] = useState(false);
    const {username, setUsername, currentScore, setCurrentScore,previousScore, setPreviousScore, sessionid, setSessionid, attempts, setAttempts,numberOfLetters,setNumberOfLetters} = useContext(PlayerContext);
    console.log('isGameFinished', gameFinished);
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
        if(wordArray){
               const finalArray = new Array(wordArray.length);
        for (let i = 0; i < wordArray.length; i++){
            finalArray[i] = { "letter": "", "readonly": false};       
        }      

        setGameLetters(finalArray);
        console.log(word);
        }
     
    
    }, [word]);

    const initWord = (data) => {
        try {
            setWord(data.Text);
            setWordArray(data.TextArray);
            setWordId(data.Id);
            console.log('word id is '+wordId);
          
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

    const checkGameDone=()=>{
        let subWorkArray = [...wordArray];//wordArray values change to booleans if used in a direct comparison
        if(compareTwoArrays(subWorkArray,game_letters)){
            handleFinishedGame();
            setGameFinished(true);
        }

      }

   const setNewGame=()=>{
      setGameFinished(false);
      let emptyArray = [];
      setGameLetters([...emptyArray]);
      setHints([...emptyArray]);
   }

    const handleFinishedGame=()=>{
        let cscore = currentScore + calcWordGameScore(word.length,letterTry);
        setCurrentScore(cscore);
        console.log('current score is '+currentScore);
        setGameFinished(true);
    }

        
const calcWordGameScore =(wordlength,attempts)=>{
    return Math.round(wordlength/attempts * 100); 
}

 

const onHandleAttempt = (attempt, idx) => {        
 
          let handleAttemptArray = [...game_letters];    
          setLetterTry(letterTry + 1)
          
    if (wordArray[idx]===attempt) {              
            handleAttemptArray[idx].letter = attempt;
            handleAttemptArray[idx].readonly = true;   
            setGameLetters([...handleAttemptArray]);
            checkGameDone();
        }   
       
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
           {gameFinished && <div>
                <h1>You finished!</h1>
                <div><h2>Here's your current score: {currentScore} </h2></div>
                
           </div>

           }
           {!gameFinished && <div className='letter_length_select'>
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
           }
              
		    {!gameFinished && <div className="letter_box">
        {wordId > 0 &&  <Letter
             game_letters={game_letters}
             handleAttempt={onHandleAttempt}
         ></Letter>}
         {wordId>0  && <Hint truWordId={wordId} hintList={hints}></Hint>}
        
     </div> 
  }

        
 <Options handleNewGame={setNewGame} handleRemoveHint={removeHint} handleRevealLetter={revealLetter}/> 
     
          
     

           
        </div>

    );
};
export default Word;