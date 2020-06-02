//function to insert reader into readers in library

var addReader = function(index,n,a){
library[index].readers[library[index].readers.length]={"name":n,"count":a};
console.log(library[index].readers);
}

//assigning reader into readers in library

addReader(0,"Bala",300);
addReader(1,"Bala",300);
© 2020 GitHub, Inc.
