const log = console.log;

//---objects-- 23.3
 let person = {
     firstName : 'Clever',
     age: 29,
     address : {
         hse_no :17,
         streetName: 'Am Heidgeshof',
         city:'hennef'
     }
 }

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

let animals = ['lion', 'giraffe', 'cheetah', 'elefant']
log( animals[2] )

// animals.push('Tiger')
// animals.splice(1, 0, "cat")
animals.splice(1, 2)
// animals.unshift(person)
log(animals)

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
let str = 'Hello,people.How are you.doing'
let myStr = ' ';
//str.length

for (let i  = 0 ; i < str.length ; i++) {
   if (str[i] !== ','  && str[i] !== '.'){
     myStr += str[i];
   }
  else{
      myStr += ' ';
  }
}
// console.log(myStr)



// for (let i  = 0 ; i < str.length ; i++) {
//    let myStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ")
//    if (i === 1) {
//       console.log(myStr)
//    }
// }
 
// /****Iteration 3.3****/
let chars1= ' ';
let chars2= ' ';
let hacker1 = "Matthew"
let hacker2 = "Mano"

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








