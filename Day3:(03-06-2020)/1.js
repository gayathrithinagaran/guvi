//Write a function called "addFive"returns 5 added to that number//

var num = 10;
function AddFive(num) {
    if(num < 0)
    {
    return num-5;
    }
    else
    {
    return num+5;
}
var result = AddFive(num);
addFive(5); 
addFive(0);
addFive(-5); 
console.log(AddFive(-5))

//Write a function called “getOpposite”.Given a number ,returns its opposite//

var num = 5;
function getOpposite(num) {
    if(num==0)
    {
    return 0;
    if(num % 1 === 0)
    {
    return(-num);
    }
        
        //Fill in your code that takes an number minutes and converts it to seconds.

var min = 5;
function toSeconds(min)
        {
         console.log(min*60);
         return min*60;
        }
        var secons = toSeconds(min)
         toSeconds(5) //300
          toSeconds(1) //60
          toSeconds(2) //120
    else 
    {
    return -1;
}
