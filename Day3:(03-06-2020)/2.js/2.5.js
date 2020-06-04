//2.5 Return of all the palindromes in an array

var string=["level","noon","radar"]
var palindrome = function () {
var result=string.filter(function(t)
{
var a=t.split('').reverse().join('')
if(t==a)
{
return t;
}
})
console.log(result);
};
palindrome()
