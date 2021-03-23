const log = console.log;
const ironhacker = {
    firstName: 'marko',
    age: 39,
    favoriteLanguage: 'JavaScript',
    isSatisfied: true,
    'works at': 'Google',
    isRemote: false
}

// 1: update favoriteLanguage to 'React' 
ironhacker.favoriteLanguage = 'React'
log(ironhacker.favoriteLanguage)

// 2: Update ironhacker's age to 29
 ironhacker.age = 29;
log(ironhacker.age)

// 3: Remove the 'isRemote' property
delete ironhacker.isRemote;
log(ironhacker)

// 4: Add a new property: 'didGraduate' and set it to a valid boolean value
ironhacker.didGraduate = true;
log(ironhacker)

// 5: list all keys of the ironhacker object
log(Object.keys(ironhacker));


// 6: check if ironhacker has property 'works at'
log(['works at'] in ironhacker); 



//ARRAYS

const ironhacker = {
    firstName: 'marko',
    age: 39,
    favoriteLanguage: 'JavaScript',
    isSatisfied: true,
    'works at': 'Google',
    isRemote: false
}

// 1: update favoriteLanguage to 'React' 
ironhacker.favoriteLanguage = 'React'
log(ironhacker.favoriteLanguage)

// 2: Update ironhacker's age to 29
 ironhacker.age = 29;
log(ironhacker.age)

// 3: Remove the 'isRemote' property
delete ironhacker.isRemote;
log(ironhacker)

// 4: Add a new property: 'didGraduate' and set it to a valid boolean value
ironhacker.didGraduate = true;
log(ironhacker)

// 5: list all keys of the ironhacker object
log(Object.keys(ironhacker));


// 6: check if ironhacker has property 'works at'
log(['works at'] in ironhacker);

//ARRAYS
const favorites = ['javascript', 'html', 'css'];

// remove first element
favorites.shift()
console.log(favorites); // => [ 'html', 'css' ]

// remove last element
favorites.pop()
console.log(favorites); // => [ 'html' ]

// add 'react' on the first place
favorites.unshift('react')
console.log(favorites); // => [ 'react', 'html' ]

// add 'node' to the last place
favorites.push('node')
console.log(favorites); // => [ 'react', 'html', 'node' ]

// remove element in the position 2 and add 'express'
favorites.splice(1,1, 'express')
console.log(favorites); // => [ 'react', 'express', 'node' ]

// remove elements in the positions 2 and 3 and add 'mongodb'
favorites.splice(1, 2, 'mongodb')
console.log(favorites); // => [ 'react', 'mongodb' ]