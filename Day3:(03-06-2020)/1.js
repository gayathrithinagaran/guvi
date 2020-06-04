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
    else 
    {
    return -1;
}
var result = getOpposite(num);
getOpposite(0);
getOpposite(-5);
getOpposite('5a');
getOpposite(5.5);
console.log(getOpposite(0));//0
