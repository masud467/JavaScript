var money1=56;
var money2='56';
console.log(money1==money2);
console.log(money1===money2)

// if
if(3>2){
    console.log('ami tur theke baro re')
}

if(2<3){
    console.log('ami aponer theke suto.')
}

if(3<2){
    console.log('ami aponer theke suto.')
}

// else
if(7>3){
    console.log('7 is getter than 3')
}
else{
    console.log('ami o asi re')
}
if(5>9){
    console.log('9 is getter than 5')
}
else{
    console.log('amare niba maji?')
}

// multiple conditions
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// And(&&)
const salary= 6000;
const height = 70;
if(salary>5000 && height>66){
    console.log('you are tall poor man')
}

// OR(||)
const income= 6000;
const cost = 4000;
if(income>5000 || cost>5000){
    console.log('you can')
}

// Nested
let number = 8
if(number>0){
    console.log('the number is positive.')
    if(number %2===0){
        console.log('the number is even.')
    }else{
        console.log('the number is odd.')
    }
}else{
    console.log('the number is negative or zero.')
}

// Ternary Operator:
const age = 20;
age>=18? console.log('vote de re vhi'): console.log('gumai thako re vhi')
const age1 = 20;
age<18? console.log('vote de re vhi'): console.log('gumai thako re vhi')


