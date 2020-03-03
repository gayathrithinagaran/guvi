//foreach()//

const arr = [1, 2, 3, 4, 5, 6];
arr.forEach(item => {
    console.log(item); // output: 1 2 3 4 5 6
  });
  
  
  //fiter()//
  const arr = [1, 2, 3, 4, 5, 6];
  const filtered = arr.filter(num => num > 3);
  console.log(filtered); // output: [4, 5, 6]
  console.log(arr); // output: [1, 2, 3, 4, 5, 6]
 
 //map()//
 const arr = [1, 2, 3, 4, 5, 6];
 // add one to every element
  const oneAdd = arr.map(num => num + 1);
  console.log(oneAdd); // output [2, 3, 4, 5, 6, 7]
  console.log(arr); // output: [1, 2, 3, 4, 5, 6]
