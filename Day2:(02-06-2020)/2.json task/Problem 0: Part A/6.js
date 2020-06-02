//Print the total activities of all cats

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
//create Function called cats activity

function catsactivity()
{
   var activity1= cat.catFriends[0].activities;
   var activity2= cat.catFriends[1].activities;
   var activity3= cat.activities;

//print total cats activity
console.log(activity1+activity2+activity3);
}
catsactivity();
