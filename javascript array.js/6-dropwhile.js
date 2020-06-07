//Creates a slice of array excluding elements dropped from the end//

const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};
dropWhile([1, 2, 3, 4], n => n >= 3);
