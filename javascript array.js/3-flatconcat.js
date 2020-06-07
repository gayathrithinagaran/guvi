//3.Creates a new array concatenating and flattens array a single level deep//


function flat(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(item);
  }, []);
}
let arr = [[1, 2], 3, [4, 5],6];
flat(arr); //returns new concatenated arr//
