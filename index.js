const log = console.log;
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestOfFour(arr) {

    let largest = 0;
   let largestArr = [];
    for(let i=0; i<arr.length; i++){
      for(largest j=0; j<arr[i].length; j++){

        if(largest < arr[i][j]){
          largest = arr[i][j];
        }
        largestArr[i] = largest;
      }      
      largest = 0;
    }
  console.log(largestArr.reduce((acc , el) => {
    return acc + el
  }, 0))
  console.log(largestArr) ;
}

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

let greatestProduct = (arr) => {

let largest = 0;
let largestArr = [];
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){

    if(largest < arr[i][j]){
      largest = arr[i][j];
    }
    largestArr[i] = largest;
  }      
  largest = 0;
}
console.log(largestArr.reduce((acc , el) => {
return acc + el
}, 0))
}
greatestProduct(matrix)

// const data = [
//   {
//     country: 'USA',
//     pop: 340,
//   },
//   {
//     country: 'France',
//     pop: 133,
//   },
//   {
//     country: 'Bosnia',
//     pop: 5,
//   }
// ]

// function totalpopulation(arr) {

//   if(arr. length ===0){
//       return 0  
//   }
//    // since we are calculating total, initial value of accumulator is set to 0
//    let total = arr.reduce((acc, elem) => {
//      return acc + elem.pop
//    }, 0)
//   return total;
// }

// //Invoking and running the function
// // let total = totalpopulation(data)
// // console.log(total) //Answer should be 478

// // let output = totalpopulation([])
// // console.log(output) //Answer should be 0

// //exercise
// const menu = [
//   { name: 'Carrots', calories: "150.45" },
//   { name: 'Steak'},
//   { name: 'Broccoli', calories: "120.2342" },
//   { name: 'Chicken', calories: "250.6523" },
//   { name: 'Pizza', calories: "520.124" }
// ];

// function calAvgCalories(arr) {
//   if(arr.length === 0){
//     return 0
//   }
// let total = arr.reduce((acc, el, index)=>{
//    if(el.calories){
//       return acc + Number(el.calories)
//      }else{
//        return acc
//      }
    
//   },0)

//   let average = total/arr.length
//   return average.toFixed(2);
// }

// //Invoking and running the function
// let total = calAvgCalories(menu)
// console.log(total) //Answer should be 208.29 

// let output = calAvgCalories([])
// console.log(output) //Answer should be 0

// // // Please do not mutate the original array
// // const arrOfStrings = ['cat', 'wolf', 'yo', 'animal'];

// // let clonedArr = JSON.parse(JSON.stringify(arrOfStrings));

// // const longestStr = (arr) => {
// //   let sortedArr = arr.sort((a,b)=>{
// //    if(a.length < b.length){
// //       return -1;
// //    }else if(a.length > b.length){
// //       return 1;
// //    }else {
// //       return 0;
// //    }
// //   })
// //   return sortedArr;

// // }

// // let longestStrings = longestStr(clonedArr)
// // console.log(longestStrings) //ANSWER should be ['yo', 'cat', 'wolf', 'animal']

// // // exercise 2

// // const people = [
// //   { name: 'Candice', age: 25 },
// //   { name: 'Tammy', age: 30 },
// //   { name: 'Allen', age: 19 },
// //   { name: 'Nettie', age: 21 },
// //   { name: 'Stuart', age: 30 },
// //   { name: 'Bill', age: 19 }
// // ];

// // const clonedPeople = JSON.parse(JSON.stringify(people))

// // const sortByAge = (arr) => {
// //    let newArr = arr.sort((a,b)=>{
// //      if(a.age < b.age){
// //        return -1;
// //      }else if(a.age > b.age){
// //        return 1;
// //      }else {
// //           if(a.name < b.name){
// //               return 1;
// //           }else if(a.name > b.name){
// //               return -1;
// //           }else{
// //             return 0;
// //        }
// //      }
// //    })

// //    return newArr;
// // }

// // let output = sortByAge(clonedPeople)
// // console.log(output)


// // const numbers = [1, 60, 112, 123, 100, 99, 73, 35];

// // const oddNumbers = (arr) => {
// //    let newArr = arr.filter((el)=>{
// //      return el % 2 != 0 && el < 100;
// //    })
// //    return newArr
// // }

// // let myOddNumbers = oddNumbers(numbers)
// // console.log(myOddNumbers) // [1,99,73,35]


// // //exercise 2
// // const people = [
// //   { name: "Candice", age: 25 },
// //   { name: "Tammy", age: 30 },
// //   { name: "Allen", age: 49 },
// //   { name: "Nettie", age: 21 },
// //   { name: "Stuart", age: 17 },
// //   { name: "Bill", age: 19 }
// // ];

// // const adults = (arr) => {
// //    let newArr = arr.filter((el)=>{
// //        return el.age > 21
// //    })
// //    return newArr
// // }

// // let canConsume = adults(people)
// // console.log(canConsume) 

// // //exercise 3
// // // using same people array
// // const adults2 = (arr) => {
// //   let newArr = arr.filter((el)=>{
// //     return el.age > 21
// //     })
// //     let justTwo= newArr.map((el)=>{
// //       return (el.name)
// //     })
// //   return justTwo.slice(0, 2);
// // }

// // let canConsumeTwo = adults2(people)
// // console.log(canConsumeTwo) 
// //Answer should be ['Candice', 'Tammy']

// // const fruits = ['pineapple', 'orange', 'mango'];

// // let uppercaseFruits = fruits.map((el) => {
// //   return el.toUpperCase()
// // })
// // console.log(uppercaseFruits)  //Answer should be  ['PINEALLPLE', 'ORANGE', 'MANGO'];


// // const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city']
// // let firstLetterUpper = cities.map((el) =>{
// //  return el[0].toUpperCase()+el.slice(1);
// // //  return el[0].toUpperCase()+el.substr(1);
 
// // })
// // console.log(firstLetterUpper)

// // const Info = {
// //   cities : [
// //     {name: 'Mirazur', owner : 'Gustavo'},
// //     {name: 'Noma', owner : 'Jorge'},
// //     {name: 'Gaggan', owner : 'Alvaro'},
// //     {name: 'Geranium', owner : 'Gustavo'},
// //     {name: 'Arpège', owner : 'Luis'},    
// //  ]  
// // }

// // let newArr = Info.cities;
// // const myRestaurants = (arr) => {

// //   let mapped = newArr.map((city)=>{
// //     return city.name
// //   })

// //   return mapped;
// // }

// // let restaurants = myRestaurants(newArr)
// // console.log(restaurants)/*Answer should be [ 'Mirazur', 'Noma', 'Gaggan', 'Geranium', 'Arpège']*/


// // let students = [
// //   {name: 'Rafa', color: 'Blue', candy: 12},
// //   {name: 'Elise', color: 'Pink', candy: 21},
// //   {name: 'Bodei', color: 'Yellow', candy: 31},
// //   {name: 'Jorge', color: 'Red', candy: 11}
// // ]

// // let newArr = students.map((el)=> {return el.candy * 2})
// // log(newArr);

// // students.forEach((yourElem, index) => {
// //    log(`The name of student ${index} is ${yourElem.name}`)
// // })

// // students.forEach((yourElem, index) => {
// //   yourElem.candy > 20 ? log(`${yourElem.color}`):false;  
// // })

// // let students = ['james', 'yana', 'Ivana'];
// // let arr = [
// //   {name: 'Ama', age: 31},
// // {name: 'Mano', age: 27},
// // {name: 'Evelyn', age: 26},
// // {name: 'Seth', age: 21}
// // ]


// // arr.forEach((el) =>{
// //   if(el.age < 30){
// //      log(el.name)
// //   }
// // })


// // students.forEach((el , index)=> log(el, index))





// //Functions
// // function sum(x, y){
// //  return x + y;
// // }


// // let sum = function(x, y){
// //     return x + y;
// // }

// // log(sum(1,2));

// // ARROW functions
// // let sum = (x, y) => x + y;
// // log(sum(1,4))

// // console.log(sum(1,2 ))


// //---objects-- 23.3
// //  let person = {
// //      firstName : 'Clever',
// //      age: 29,
// //      address : {
// //          hse_no :17,
// //          streetName: 'Am Heidgeshof',
// //          city:'hennef'
// //      }
// //  }

// // looping thru an object
// // for (let x in person){
// //    log(person[x])
// // }

// // //Obj referencing
// // let newPerson = person;

// // newPerson.married = 'yes';
// // log(person);
// // log(newPerson)

// //ARRAYS

// // let animals = ['lion', 'giraffe', 'cheetah', 'elefant']
// // log( animals[2] )

// // // animals.push('Tiger')
// // // animals.splice(1, 0, "cat")
// // animals.splice(1, 2)
// // // animals.unshift(person)
// // log(animals)

// //  log(person.address.city)
// //  person.hobby = 'dancing';
// //  person.favoriteFood = 'jollof';
// //  delete person.age;
// //  log( Object.keys(person) )


// //  log( person )
// //  log( person.firstName )
// //  log( person["firstName"]) // put string around the keys when using the bracket notation

//  //--22.3
// // let firstName= "clever";
// // let lastName= "tedeku";
// // let age = 29;

// // let firstChar = firstName.charAt(0).toUpperCase()
// // // let charAt = firstName[0]
// // // log(charAt)
// // console.log(!50000)
// // log(firstChar + firstName.slice(1))
// // log(firstChar + firstName.substring(1))

// // log( firstChar.toUpperCase())
// // console.log( ` My name is  ${firstName} ${lastName} and i am  ${age} years old ` )

// // let userName = 'Nicholas'
// // let language = 'Bonjour' // keep changing to "Hello" or 'hola'

// // function greeting(){
// //     if (language === 'Bonjour'){
// //        console.log(` ${language}  ${userName}`)
// //     }
// //   else if (language == 'Hola'){
// //        console.log(` ${language}  ${userName}`)
// //     }
// //   else if(language == 'Hello'){
// //        console.log(` ${language}  ${userName}`)
// //     }
// //   else{
// //     console.log('Cannot recognise language')
// //   }
// // }
 



// // greeting();
// // let str = 'Hello,people.How are you.doing'
// // let myStr = ' ';
// // //str.length

// // for (let i  = 0 ; i < str.length ; i++) {
// //    if (str[i] !== ','  && str[i] !== '.'){
// //      myStr += str[i];
// //    }
// //   else{
// //       myStr += ' ';
// //   }
// // }
// // console.log(myStr)



// // for (let i  = 0 ; i < str.length ; i++) {
// //    let myStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ")
// //    if (i === 1) {
// //       console.log(myStr)
// // //    }
// // // }
 
// // // /****Iteration 3.3****/
// // let chars1= ' ';
// // let chars2= ' ';
// // let hacker1 = "Matthew"
// // let hacker2 = "Mano"

// // for ( let i = 0; i < hacker1.length; i++ ) {
// //    chars1 +=  hacker1[i]

// //     for ( let j = 0; j < hacker2.length ; j++ ) {
// //       chars2 += hacker2[j]

// //            if ( chars1 > chars2 ) {

// //              console.log('The driver\'s name goes first')   
             
// //            }else if (chars1 < chars2) {

// //               console.log('Yo, the navigator goes first definitely.')

// //             } else if ( chars1 === chars2 ) {

// //                console.log('What?! You both have the same name?')
// //             } 
// //          }
// //        }








