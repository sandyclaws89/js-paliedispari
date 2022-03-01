
let arrWordGrow= [];
let arrWordDecreasing = [];
let word = prompt("Insert word");
palindromFunction(word);
// for (let i=0; i < word.length; i++){
// arrWordGrow.push(word[i]);

// }
// console.log (arrWordGrow);

// for (let i=word.length; i >0 ; i--) {
//     arrWordDecreasing.push(word[i-1]);
// }
// console.log (arrWordDecreasing);



function palindromFunction(functionWord) {
    for (let i=0; i < functionWord.length; i++){
        arrWordGrow.push(functionWord[i]);
        
    }    
    // console.log (arrWordGrow);

    for (let n=functionWord.length; n >0 ; n--) {
            arrWordDecreasing.push(functionWord[n-1]);
    }
    // console.log (arrWordDecreasing);

    for (i=0; i < word.length; i++){


        if ((arrWordGrow[i] == arrWordDecreasing[i]) == word.length){
            console.log ("funziona!");
        } else{
            console.log ("non funziona!");
        }


        // control = arrWordGrow[i] == arrWordDecreasing[i];
        // console.log(control);
        // if (console = word.length) {
        //     console.log("ciao");
        // }
    // console.log(arrWordGrow[i], arrWordDecreasing[i]);
    // console.log(arrWordDecreasing[i]);
    // if ( arrWordGrow[i] == arrWordDecreasing[i])  {
        // console.log(true)
    // }
    }

}