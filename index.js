const log = console.log;

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
console.log(myStr)



// for (let i  = 0 ; i < str.length ; i++) {
//    let myStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ")
//    if (i === 1) {
//       console.log(myStr)
//    }
// }
 
// /****Iteration 3.3****/

// for ( let i = 0; i < hacker1.length; i++ ) {
//      let chars1 =  hacker1[i]

//     for ( let j = 0; j < hacker2.length ; j++ ) {
//        let chars2 = hacker2[j]

//            if ( chars1 > chars2 ) {
//              console.log('The driver\'s name goes first')
//               continue;
             
//            }else if (chars1 < chars2) {

//         continue;
//               console.log('Yo, the navigator goes first definitely.')

//             } else if ( chars1 === chars2 ) {

//               break;
//                console.log('What?! You both have the same name?')
//             } 
//          }
//        }








