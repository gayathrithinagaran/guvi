//function to insert reader into readers in library

var addReader = function(index,N,c)
{
library[index].readers[library[index].readers.length]={"name":N,"count":c};
console.log(library[index].readers);
}

//assigning newreader values into readers in library

addReader(0,"Ramprasad",400);
addReader(1,"Ramprasad",400);
}
