// While
// let num=0;..........loop variable,
// while(num<5)........loop condition
// console.log(num)....loop statement
// num++...............loop variable change

// for(loop variable;loop condition;loop variable change){
//     loop statement
// }

for (let num = 0; num < 5; num++) {
  // console.log(num)
}

// Sum
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
  console.log(i);
  console.log("sum :", sum);
}
console.log("sum of numbers from 1 to 10:", sum);

// Decremental

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

