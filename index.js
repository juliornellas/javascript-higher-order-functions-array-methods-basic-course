const items = [
    {name: "Bike" , price: 100},
    {name: "TV" , price: 200},
    {name: "Album" , price: 10},
    {name: "Book" , price: 5},
    {name: "Phone" , price: 500},
    {name: "Computer" , price: 1000},
    {name: "Keyboard" , price: 25},
    {name: "TV" , price: 300}
];

/**
 * FILTER (return new Array)
 */
//Loop through the array and return the items that matches TRUE for the condition
const filteredItems = items.filter((item, index, array) => {
    // console.log('Filter item', item)
    // console.log('Filter index', index)
    // console.log('Filter array', array)
    return item.price <= 100
})

console.log('Filter', filteredItems)

/**
 * MAP (return new Array)
 */
//Loop through the items in the original array and returns a new one
//Very useful to modify or change data that you're looping through
const itemsNames = items.map((item, index, array) => {
    // console.log('Map item', item)
    // console.log('Map index', index)
    // console.log('Map array', array)
    // return item.name
    return {
        name: item.name + ' 2',
        price: '$ ' + item.price
    }
})
console.log('Map', itemsNames)

/**
 * FIND (return object)
 */
//Loop through the items in the original array until the first item that matches TRUE, jump off and return this single item
const findItem = items.find((item, index, array) => {
    // console.log('Find item', item)
    // console.log('Find index', index)
    // console.log('Find array', array)
    return item.name === 'TV'
})
console.log('Find', findItem)

/**
 * FOREACH
 */
//Just a better way to loop through an array instead the FOR way
items.forEach((item, index, array) => {
    // console.log('ForEach item', item)
    // console.log('ForEach index', index)
    // console.log('ForEach array', array)
    console.log('foreach', item.name)
})

/**
 * SOME
 */
//Loop through an array and check if at least one item matches with the condition or none of them and returns just TRUE or FALSE, nothing else
const expansiveItems = items.some((item, index, array) => {
    // console.log('Some item', item)
    // console.log('Some index', index)
    // console.log('Some array', array)
    // return item.price > 800
    return item.price > 800 && item.price < 900
})
console.log('Some', expansiveItems)

/**
 * EVERY
 */
//Loop through an array and check if ALL items matches with the condition and returns TRUE or FALSE, nothing else
const checkPrice = items.every((item, index, array) => {
    // console.log('Every item', item)
    // console.log('Every index', index)
    // console.log('Every array', array)
    // return item.price < 1000
    return item.price < 1001
})
console.log('Every', checkPrice)

/**
 * REDUCE
 */
//Loop through an array and will compute a single value from a collection of numbers in an array and return that number, the total
const total = items.reduce((accumulator, item, index, array) => {
    // console.log('Reduce accumulator', accumulator)
    // console.log('Reduce item', item)
    // console.log('Reduce index', index)
    // console.log('Reduce array', array)
    return accumulator + item.price
}, 0)
console.log('Reduce final price', total)

/**
 * INCLUDES
 */
//Loop through an array to verify if the parameter exist and returns TRUE or FALSE
const includesPhone = items.filter((item) => {
    return item.name.includes("Phone")
})
console.log('Includes', includesPhone)

items.forEach((item) => {
    if(item.name.includes("Phone"))
    {
        console.log("Congrats, You've buyed a phone!")
    }
})

//Bingo verify number
const numbers = [3, 13, 9, 27, 11]
console.log('Bingo',numbers.includes(13))

//Verify string into a text
const text = "I am a programmer!"
console.log('Verify string', text.includes("rogr"))
console.log('Verify string', text.includes("!"))

/**
 * SORT
 * Compare two parameters to sort items
 * The function:
 * function(a, b){return a - b}
 * 
 * If the result is NEGATIVE so A is sorted before B = ASC
 * If the result is POSITIVE so B is sorted before A = DESC
 * 
 * !! A in the first position in the function argument is the index[1] ie NEXT!!
 * !! B in the second position in the function argument is the index[0] ie CURRENT!!
 * 
 * I.E. => when the comparison is NEGATIVE the item come first
 */

//SORT Array of numbers
const points = [40, 100, 1, 5, 25, 10];

//ASC
const asc = points.sort(function(a, b){
    console.log('A',a)
    console.log('B',b)
    return a-b
});
console.log('ASC Numbers', asc)

//DESC
const desc = points.sort(function(a, b){
    return b-a
});
console.log('DESC Numbers', desc)

//SORT Array of objects
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

//Organize the positions BY MASS values
const byMass = characters.sort((next, current) => {
    // console.log('current', current.name)
    // console.log('next', next.name)
    return next.mass - current.mass
})
console.log('Sorting by MASS', byMass)

//BY HEIGHT
const byHeight = characters.sort((a, b) => a.height - b.height)
console.log('Sorting by HEIGHT', byHeight)

//BY NAME
//Strings use < or > to compare characters
const byName = characters.sort((a, b) => {
    if(a.name < b.name){
        // return -1 //ASC
        return 1 //DESC
    }else{
        // return 1 //ASC
        return -1 //DESC
    }
})
console.log('Sorting by NAME', byName)

//BY GENDER
//No comparison is needed, just take the next item IF it's "female" and bring them to the front
const byGender = characters.sort((a,b)=>{
    if(a.gender === "female") return -1;
    return 1;
});
console.log('Sorting by GENDER', byGender)