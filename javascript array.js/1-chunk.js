//array of elements that splits into group of size//
//chunk(['a','b','c'])//
let randomArray = ['a','b','c'];
// Create an empty array.
let arrayOfArrays = [];
function splitArray( array ) {
    while (array.length > 0) {
        let arrayElement = array.splice(0,1);
        arrayOfArrays.push(arrayElement);
    }
    return arrayOfArrays;
}

// Call the function while passing in an array of your choice.
splitArray(randomArray)
// => [ [ 3 ], [ 5 ], [ 1 ], [ 5 ], [ 7 ] ]
//chunk([['a','b','c','d'],2);

var perChunk = 2 // items per chunk    

var inputArray = ['a','b','c','d']

var result = inputArray.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/perChunk)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, [])

console.log(result); // [['a','b'], ['c','d']]

//chunk(['a','b','c','d'],3);//

function chunkArray(myArray, chunk_size){
    var results = [];
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    
    return results;
}

// Split in group of 3 items
var result = chunkArray(['a','b','c','d'], 3);
console.log(result); //[['a','b','c'],['d']]

