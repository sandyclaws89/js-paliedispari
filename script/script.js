
// let arrWordGrow= [];
// let arrWordDecreasing = [];
// let word = prompt("Insert word");
// palindromFunction(word);
// if (palindromFunction(word)) {
//     console.log ("palindroma")
// } else { console.log ("non palindroma")}

// function palindromFunction(functionWord) {
//     for (let i=0; i < functionWord.length; i++){
//         arrWordGrow.push(functionWord[i]);
//     }    
//     for (let n=functionWord.length; n >0 ; n--) {
//             arrWordDecreasing.push(functionWord[n-1]);
//     }
//     for (let i=0; i < word.length; i++){
//         if (arrWordGrow[i] == arrWordDecreasing[i]) {
//             return true;
//         } else { 
//            return false;
//         }
//     }
// }

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// PSEUDOCODIFICA
// CHIEDO SE PARI O DISPARI ALL'UTENTE
// CHIEDO IL NUMERO ALL'UTENTE
// ASSEGNO A VARIABILE IL NUMERO CAUSALE  (CON FUNZIONE)
// APRO LA FUNZIONE
//     CON LA FORMULA MATH FLOOR GENERO UN NUMERO RANDOM
// SOMMA DUE NUMERI 
// APRO FUNZIONE
//     VEDO SE E' PARI O DISPARI CON %2

// CON IF VEDO CHI HA VINTO CONTROLLANDO IL MAGGIORE

// DEFAULT COMPUTER SE PARI
let computerSide = "odd";
computerSide = computerSide.toLowerCase();

// SCELTA DELL'UTENTE SE PARI O DISPARI CON CONTROLLO
let oddEven = prompt("Odd or even?");
oddEven = oddEven.toLowerCase();
while (oddEven != "odd" && oddEven != "even"){
    alert("You must insert only \"odd\" or \"even\"");
    oddEven = prompt("Odd or even?");
}
// ASSEGNAZIONE ALTRA SCELTA (PARI O DISPARI) AL COMPUTER 
if (oddEven == "odd") {
    computerSide = "even"
} 

// SCELTA DEL NUMERO DELL'UTENTE CON CONTROLLO ISNAN
let num = parseInt(prompt("Insert your number between 1 and 5"));
while (num <1 || num > 5 || isNaN(num) == true){
    alert("You must insert a number between 1 and 5");
    num = parseInt(prompt("Insert your number"));
}
console.log(`Your choice is ${num}`);

// FUNZIONE NUMERO CASUALE CON CUI SOMMARE QUELLO DELL'UTENTE 
let computerNumber = randomFunction(1, 5);
console.log(`Computer choice is ${computerNumber}`);
function randomFunction(min, max){
    return functionNumber = Math.floor(Math.random() * (5)) + 1;
}

// FUNZIONE SOMMA ALGEBRICA 
let sum = sumFunction(num, computerNumber);
console.log (`The sum is ${sum}`)
function sumFunction (userNum, computerNum){
    return sumTemp = userNum + computerNum;
}

// FUNZIONE CONFRONTO NUMERI SE PARI O DISPARI
let game = oddEvenFunction (oddEven, computerSide);
function oddEvenFunction(oddEvenFunction, computerSideFunction){
    if (sum % 2 == 0 && computerSide== "odd"){
        console.log ("you lose");
    } else {
        console.log ("you win");
    }
}