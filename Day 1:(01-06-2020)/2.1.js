//update the count of Person 2 inside readers array in javascript//

//function to update count in person2

var update = function(data){
library[0].readers[1].count=data;
console.log(library[0].readers[1].count); // 400
}

update(400);
