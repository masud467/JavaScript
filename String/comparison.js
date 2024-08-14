// Lowercase related
const subject ='accounting'
const book= 'Accounting'
// console.log(subject.toLowerCase()===book.toLowerCase())

// Uppercase related
const subject1 ='accounting'
const book1= 'Accounting'
// console.log(subject1.toUpperCase()===book1.toUpperCase())

// Space related
const year = 'twenty'
const day='twenty '
// console.log(year.trim()===day.trim())

// Slice Related
const address= 'baserkella'
const part = address.slice(2,5)
console.log('slice:',part)

const Name= 'university'
const portion= Name.slice(3,10)
console.log('slice(string):',portion)

const Name3 = ['masud','rana','abul','babul','kabul']
const portion1=Name3.slice(1,4)
console.log('slice(array):',portion1)
// split related
const village='Dhanuaish,Kalir,Comilla'
const diff= village.split(',')
console.log('split:',diff)

const village2='Dhanuaish,Kalir,Comilla'
const diff3= village2.split(',',2)
console.log('split:',diff3)

const text = "one, two; three four";
const part1=text.split()
// join related
const village1=['m','a','s','u','d']
const diff1= village1.join('')
console.log('join:',diff1)

const Name2=['masud','kamal','jamal']
const diff2= Name2.join('')
console.log('join:',diff2)

// concat related
const address1='dhaka'
const address2='comilla'
const add= address1.concat(address2)
console.log('concat:',add)

// include related
const num=[1,2,3,4]
console.log('includes(array):',num.includes(2))

const friend='masud'
console.log('includes(string):',friend.includes('s'))