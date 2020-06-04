//2.8 Return an array by K times and return the rotated array//

var arr=[34,56,38,29,19],K=3;
var rev=function(array,k){
  
for(var i=0;i<K;i++)
{
var a= arr.Shift();
array.push(a);
}
return arr;
}
console.log(rev(arr,K));//Return rotated arr//
