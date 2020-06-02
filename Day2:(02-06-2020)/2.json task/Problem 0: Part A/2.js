//Fluffy name is spelled wrongly. Update it to Fluffyy//
//create a object called cat
var cat = {
 name: 'Fluffy',
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

//Create a func Update
function update()
{
    cat.name="fluffyy";

//print the Updated fluffyy name

console.log(cat);
}
update();
