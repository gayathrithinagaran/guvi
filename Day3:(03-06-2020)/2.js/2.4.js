// 2.4. Return all the prime numbers in an array//

var primenumArray = [2, 4, 5, 6, 7, 8, 9, 10,  20]
var prime=function(){
primenumArray = primenumArray.filter((number) => {
for (var i = 2; i <= Math.sqrt(number); i++) {
if (number % i === 0) 
{
return false;
}
return true;
});
//print prime numbers
 console.log(primenumArray);
}
prime()
