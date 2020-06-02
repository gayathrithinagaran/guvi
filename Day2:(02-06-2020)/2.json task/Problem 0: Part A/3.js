//List all the activities of Fluffyy’s catFriends

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
//create function called catactivities

function activities(){
   var s= cat.catFriends[0].activities;
   var t= cat.catFriends[1].activities
//print activities of catfriends of fluffy
console.log(s,t);
}
activities();
