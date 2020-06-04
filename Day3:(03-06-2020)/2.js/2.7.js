//2.7 Removes duplicates from array

var arr=[32,50,32,75,38]
var dupli= function(arr){
  
var Result=[...new Set(arr)];
return Result;
}
console.log(dupli(arr));// remiove and print all duplicates//
}

