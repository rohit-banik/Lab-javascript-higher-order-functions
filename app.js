const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

// Function #1: Array Slice
function sliceFood(foods, x, y){
    var modifiedFood = foods.slice(x,y);
    return modifiedFood;
}
console.log(sliceFood(foods, 1, 4));

// Function #2: Array Splice
function spliceFood(foods, x, y){
    foods.splice(x,y, "noodles", "icecream");
    console.log(foods)
}
spliceFood(foods, 2, 0);

const numberArray = [ 12, 324, 213, 4, 2, 3, 45, 4234 ];

// Function #3: Filter
let isEven = (numberArray) => {
    var even = numberArray.filter(element => {
        return element % 2 == 0;
    });
    console.log(even);
}
isEven(numberArray)

let isPrime = (numberArray) => {
    let prime = numberArray.filter(element => {
        for (let index = 2; index < Math.sqrt(element); index++) {
            if(element % index == 0){
                return false;
            }            
        }
        return true;
    });
    console.log(prime);
}
isPrime(numberArray);

// Function #4: Reject
function nonPrime(numberArray){
    let nonprime = numberArray.filter(element => {
        for (let index = 2; index < Math.sqrt(element); index++) {
            if(element % index == 0)
                return true;
        }
        return false;
    });
    console.log(nonprime);
}
nonPrime(numberArray);

// Function #5: Lambda
let even = numberArray.filter(element => element % 2 == 0);
console.log(even)

// Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = myArray.map( element => element*element);
console.log(findSquareOfNumbers);

// Function #7: Reduce
const myArray2 = [2, 3, 5, 10];
let multiply = myArray2.reduce((element, i) => i*element);
console.log(multiply);