//Print the catFriends names//
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
//create function called catFriendsname

function catFriendsname()
{
   var a= cat.catFriends[0].name;
   var b= cat.catFriends[1].name;
//print catFriends names//
  console.log(a,b);
}
catFriendsname();
