//3. Write a callback which is called

//3.1. if the give number is even

//function to check even number

function even(num){
if((num%2)===0) 
{
return true;
else
return false;
}

//callback function
var evenNumber=((num,fun)=>fun(num));
console.log(evenNumber(2,even))//true

//3.2. if the given number is prime
function testPrime(num){
if(num >= 2){
for(var i = 2; i < num; i++){
if(num % i=== 0){
return false;
}
}
return true;
}
else
{
return false;
}
}

console.log(testPrime(3));
console.log(testPrime(20));

//3.3. if the number is palindrome

//function to check palindrome or not
function palindrome(str) {
    var reverseStr=str.split("").reverse().join("");
    if(str===reverseStr)return true;
    else return false;
}
//callback function
var isPalindrome=((str,fun)=>fun(str));
console.log(isPalindrome("eye",palindrome))//true
