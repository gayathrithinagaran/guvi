//array of elements that splits into group of size//

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
