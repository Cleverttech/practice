const log = console.log;




const fruits = ['pineapple', 'orange', 'mango'];

let uppercaseFruits = fruits.map((el) => {
  return el.toUpperCase()
})
console.log(uppercaseFruits)  //Answer should be  ['PINEALLPLE', 'ORANGE', 'MANGO'];

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city']
let firstLetterUpper = cities.map((el) =>{
 return el[0].toUpperCase()+el.slice(1);
//  return el[0].toUpperCase()+el.substr(1);
 
})
console.log(firstLetterUpper)

const Info = {
  cities : [
    {name: 'Mirazur', owner : 'Gustavo'},
    {name: 'Noma', owner : 'Jorge'},
    {name: 'Gaggan', owner : 'Alvaro'},
    {name: 'Geranium', owner : 'Gustavo'},
    {name: 'Arpège', owner : 'Luis'},    
 ]  
}


const myRestaurants = (arr) => {
  let newArr = Info.cities;
  let mapped = newArr.map((city)=>{
    return city.name
  })
  return mapped;
}

// const myRestaurants = (arr) => {
//    let newArr = Info.cities;
//    newArr.forEach((city)=>{
//      log(city.name)
//    })
// }


//
let restaurants = myRestaurants( /* pass your array here*/)
console.log(restaurants)/*Answer should be [ 'Mirazur', 'Noma', 'Gaggan', 'Geranium', 'Arpège']*/
// let students = [
//   {name: 'Rafa', color: 'Blue', candy: 12},
//   {name: 'Elise', color: 'Pink', candy: 21},
//   {name: 'Bodei', color: 'Yellow', candy: 31},
//   {name: 'Jorge', color: 'Red', candy: 11}
// ]

// let newArr = students.map((el)=> {return el.candy * 2})
// log(newArr);

// students.forEach((yourElem, index) => {
//    log(`The name of student ${index} is ${yourElem.name}`)
// })

// students.forEach((yourElem, index) => {
//   yourElem.candy > 20 ? log(`${yourElem.color}`):false;  
// })

// let students = ['james', 'yana', 'Ivana'];
// let arr = [
//   {name: 'Ama', age: 31},
// {name: 'Mano', age: 27},
// {name: 'Evelyn', age: 26},
// {name: 'Seth', age: 21}
// ]


// arr.forEach((el) =>{
//   if(el.age < 30){
//      log(el.name)
//   }
// })


// students.forEach((el , index)=> log(el, index))





//Functions
// function sum(x, y){
//  return x + y;
// }


// let sum = function(x, y){
//     return x + y;
// }

// log(sum(1,2));

// ARROW functions
// let sum = (x, y) => x + y;
// log(sum(1,4))

// console.log(sum(1,2 ))


//---objects-- 23.3
//  let person = {
//      firstName : 'Clever',
//      age: 29,
//      address : {
//          hse_no :17,
//          streetName: 'Am Heidgeshof',
//          city:'hennef'
//      }
//  }

// looping thru an object
// for (let x in person){
//    log(person[x])
// }

// //Obj referencing
// let newPerson = person;

// newPerson.married = 'yes';
// log(person);
// log(newPerson)

//ARRAYS

// let animals = ['lion', 'giraffe', 'cheetah', 'elefant']
// log( animals[2] )

// // animals.push('Tiger')
// // animals.splice(1, 0, "cat")
// animals.splice(1, 2)
// // animals.unshift(person)
// log(animals)

//  log(person.address.city)
//  person.hobby = 'dancing';
//  person.favoriteFood = 'jollof';
//  delete person.age;
//  log( Object.keys(person) )


//  log( person )
//  log( person.firstName )
//  log( person["firstName"]) // put string around the keys when using the bracket notation

 //--22.3
// let firstName= "clever";
// let lastName= "tedeku";
// let age = 29;

// let firstChar = firstName.charAt(0).toUpperCase()
// // let charAt = firstName[0]
// // log(charAt)
// console.log(!50000)
// log(firstChar + firstName.slice(1))
// log(firstChar + firstName.substring(1))

// log( firstChar.toUpperCase())
// console.log( ` My name is  ${firstName} ${lastName} and i am  ${age} years old ` )

// let userName = 'Nicholas'
// let language = 'Bonjour' // keep changing to "Hello" or 'hola'

// function greeting(){
//     if (language === 'Bonjour'){
//        console.log(` ${language}  ${userName}`)
//     }
//   else if (language == 'Hola'){
//        console.log(` ${language}  ${userName}`)
//     }
//   else if(language == 'Hello'){
//        console.log(` ${language}  ${userName}`)
//     }
//   else{
//     console.log('Cannot recognise language')
//   }
// }
 



// greeting();
// let str = 'Hello,people.How are you.doing'
// let myStr = ' ';
// //str.length

// for (let i  = 0 ; i < str.length ; i++) {
//    if (str[i] !== ','  && str[i] !== '.'){
//      myStr += str[i];
//    }
//   else{
//       myStr += ' ';
//   }
// }
// console.log(myStr)



// for (let i  = 0 ; i < str.length ; i++) {
//    let myStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ")
//    if (i === 1) {
//       console.log(myStr)
// //    }
// // }
 
// // /****Iteration 3.3****/
// let chars1= ' ';
// let chars2= ' ';
// let hacker1 = "Matthew"
// let hacker2 = "Mano"

// for ( let i = 0; i < hacker1.length; i++ ) {
//    chars1 +=  hacker1[i]

//     for ( let j = 0; j < hacker2.length ; j++ ) {
//       chars2 += hacker2[j]

//            if ( chars1 > chars2 ) {

//              console.log('The driver\'s name goes first')   
             
//            }else if (chars1 < chars2) {

//               console.log('Yo, the navigator goes first definitely.')

//             } else if ( chars1 === chars2 ) {

//                console.log('What?! You both have the same name?')
//             } 
//          }
//        }








