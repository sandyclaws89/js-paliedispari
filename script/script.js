
let arrWordGrow= [];
let arrWordDecreasing = [];
let word = prompt("Insert word");
// word.length
for (let i=0; i < word.length; i++){
arrWordGrow.push(word[i]);
// console.log(word[i]);

}
console.log (arrWordGrow);

for (let n=word.length; n >=1 ; n--) {
    arrWordDecreasing.push(word[n]);
    // console.log(word[n]);
}

console.log (arrWordDecreasing);
