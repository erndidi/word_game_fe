 export function rtnDefinitions(definitions) {
    const defs = [];
    for (let i = 0; i < definitions.length; i++) {
        //defs.push({wordId:definitions[i].WordId, text: definitions[0].Text});
        defs.push({ wordId: definitions[i].WordId, text: definitions[0].Text })
    }


    return defs;
}


export function rtnRandIdx(letters) {
    // const emptyIndexes = [];
    const alphabetRegex = /^[a-zA-Z]+$/;
    let len = letters.length;
    let rand = Math.floor(Math.random() * (len));
    let ltrIdx = letters[rand];
    return ltrIdx;
}
    //returns an a array that contains indexes where players haven't guessed a letter
  export  function rtnIdxArray(arry) {
        const inputArray = arry;
        const indexArray = [];
        const alphabetRegex = /^[a-zA-Z]+$/;
        //iterate through the game letters to find still blank inputs
        arry.forEach((val, idx) => {
            let test = alphabetRegex.test(val);
            if (!test) {
                indexArray.push(idx);
            }
        });
        //console.log("index array is "+indexArray);
        return indexArray;
    }


export const letterObj = {
    letter: "",
    cssClass: ""
}