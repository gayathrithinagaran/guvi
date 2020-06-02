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
//create function called catfriendsname
 
 function catfriendsweight(){
   var c= cat.catFriends[0].weight=10;
   var d= cat.catFriends[1].weight=5;
   var e=c+d;
//print catfriends Total weight
console.log(e);
}
catfriendsweight();
