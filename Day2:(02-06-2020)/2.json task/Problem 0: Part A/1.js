//playing with json objects//
//Add height and weight to Fluffy
//Create a object called cat
var cat = {
 name: "Fluffy",
 activities: ['play', 'eat cat food'],
 catFriends: [
 {
 name: 'bar',
 activities: ['be grumpy', 'eat bread omblet'],
 weight: 8,
 furcolor: 'white'
 }, 
 {
 name: 'foo',
 activities: ['sleep', 'pre-sleep naps'],
 weight: 3
 }
 ]
}
//CREATE A FUNCTION ADD

function Add()
{
    cat[2]= {"height":"20"},
    cat[3]= {"weight":"30Kg"}
//PRINT HEIGHT AND WEIGHT OF FLUFFY
console.log(cat);
}
add();
