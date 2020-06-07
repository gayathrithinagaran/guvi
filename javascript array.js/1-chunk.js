//array of elements that splits into group of size//

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

